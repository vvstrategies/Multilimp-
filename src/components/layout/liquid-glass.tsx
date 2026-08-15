"use client";

/**
 * Liquid glass refraction effect, ported from github.com/nikdelvin/liquid-glass (MIT)
 * — the same technique Vizentec's floating navbar uses. Generates a per-element
 * SVG displacement filter sized to the element's live bounding box and applies it
 * via `backdrop-filter: url(#filter)`, so whatever renders behind the element
 * appears refracted through glass. Falls back to a plain blur where the browser
 * doesn't support SVG filters inside backdrop-filter.
 */

import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type LiquidGlassProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  blur?: number;
  chromaticAberration?: number;
  depth?: number;
  strength?: number;
  saturate?: number;
  brightness?: number;
};

function effectiveRadius(el: HTMLElement, width: number, height: number) {
  const r = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
  const cap = Math.max(Math.min(width, height) / 2, 1);
  if (!Number.isFinite(r) || r <= 0) return cap;
  return Math.min(r, cap);
}

function getDisplacementMap({
  height,
  width,
  radius,
  depth,
}: {
  height: number;
  width: number;
  radius: number;
  depth: number;
}) {
  const svg = `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <style>.mix { mix-blend-mode: screen; }</style>
    <defs>
        <linearGradient id="Y" x1="0" x2="0" y1="${Math.ceil((radius / height) * 15)}%" y2="${Math.floor(100 - (radius / height) * 15)}%">
            <stop offset="0%" stop-color="#0F0" />
            <stop offset="100%" stop-color="#000" />
        </linearGradient>
        <linearGradient id="X" x1="${Math.ceil((radius / width) * 15)}%" x2="${Math.floor(100 - (radius / width) * 15)}%" y1="0" y2="0">
            <stop offset="0%" stop-color="#F00" />
            <stop offset="100%" stop-color="#000" />
        </linearGradient>
    </defs>
    <rect x="0" y="0" height="${height}" width="${width}" fill="#808080" />
    <g filter="blur(2px)">
      <rect x="0" y="0" height="${height}" width="${width}" fill="#000080" />
      <rect x="0" y="0" height="${height}" width="${width}" fill="url(#Y)" class="mix" />
      <rect x="0" y="0" height="${height}" width="${width}" fill="url(#X)" class="mix" />
      <rect x="${depth}" y="${depth}" height="${height - 2 * depth}" width="${width - 2 * depth}" fill="#808080" rx="${radius}" ry="${radius}" filter="blur(${depth}px)" />
    </g>
</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function getDisplacementFilter({
  height,
  width,
  radius,
  depth,
  strength = 100,
  chromaticAberration = 0,
}: {
  height: number;
  width: number;
  radius: number;
  depth: number;
  strength?: number;
  chromaticAberration?: number;
}) {
  const mapHref = getDisplacementMap({ height, width, radius, depth });
  const svg = `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter id="displace" color-interpolation-filters="sRGB">
            <feImage x="0" y="0" height="${height}" width="${width}" href="${mapHref}" result="displacementMap" />
            <feDisplacementMap transform-origin="center" in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration * 2}" xChannelSelector="R" yChannelSelector="G" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedR" />
            <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration}" xChannelSelector="R" yChannelSelector="G" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedG" />
            <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength}" xChannelSelector="R" yChannelSelector="G" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="displacedB" />
            <feBlend in="displacedR" in2="displacedG" mode="screen"/>
            <feBlend in2="displacedB" mode="screen"/>
        </filter>
    </defs>
</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg) + "#displace";
}

let supportsBackdropFilterUrl: boolean | null = null;
function checkBackdropFilterUrlSupport() {
  if (supportsBackdropFilterUrl !== null) return supportsBackdropFilterUrl;
  const testEl = document.createElement("div");
  testEl.style.cssText = "backdrop-filter: url(#test)";
  supportsBackdropFilterUrl =
    testEl.style.backdropFilter === "url(#test)" || testEl.style.backdropFilter === 'url("#test")';
  return supportsBackdropFilterUrl;
}

export function LiquidGlass({
  children,
  className,
  contentClassName,
  overlayClassName,
  blur = 14,
  chromaticAberration = 0,
  depth = 6,
  strength = 42,
  saturate = 1.12,
  brightness = 1.02,
}: LiquidGlassProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {
    const root = rootRef.current;
    const glass = glassRef.current;
    if (!root || !glass) return;

    function redraw() {
      if (!root || !glass) return;
      const rect = root.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      const radius = effectiveRadius(root, width, height);

      if (checkBackdropFilterUrlSupport()) {
        const filterUrl = getDisplacementFilter({
          height,
          width,
          radius,
          depth,
          strength,
          chromaticAberration,
        });
        const safeUrl = filterUrl.replace(/'/g, "%27");
        const bf = `blur(${blur / 2}px) url('${safeUrl}') blur(${blur}px) brightness(${brightness}) saturate(${saturate})`;
        glass.style.backdropFilter = bf;
        glass.style.setProperty("-webkit-backdrop-filter", bf);
      } else {
        const fallback = `blur(${Math.max(10, Math.round(width / 12))}px) saturate(130%)`;
        glass.style.backdropFilter = fallback;
        glass.style.setProperty("-webkit-backdrop-filter", fallback);
      }
    }

    redraw();
    const ro = new ResizeObserver(redraw);
    ro.observe(root);
    return () => ro.disconnect();
  }, [blur, chromaticAberration, depth, strength, saturate, brightness, reactId]);

  return (
    <div ref={rootRef} className={cn("liquid-glass relative overflow-hidden", className)}>
      <div className={cn("pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-black/22", overlayClassName)} />
      <div className={cn("relative z-[3]", contentClassName)}>{children}</div>
      <div className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit]">
        <div
          ref={glassRef}
          className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_6px_0_rgba(250,250,250,0.28)]"
        />
      </div>
    </div>
  );
}
