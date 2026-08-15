import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { formatDate } from "@/components/sections/blog/post-card";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";
import { DEFAULT_WHATSAPP_MESSAGE, SERVICES_NAV, whatsappHref } from "@/lib/constants";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedServices = post.relatedServiceSlugs
    .map((serviceSlug) => SERVICES_NAV.find((service) => service.href.endsWith(`/${serviceSlug}`)))
    .filter((service): service is (typeof SERVICES_NAV)[number] => Boolean(service));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <section className="bg-navy text-navy-foreground">
        <Container className="py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-navy-foreground">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-navy-foreground">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy-foreground" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <h1 className="mt-5 max-w-3xl">{post.title}</h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-navy-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4" aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </Container>
      </section>

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-base text-muted-foreground">{post.excerpt}</p>

          <div className="mt-8 space-y-10">
            {post.body.map((section, index) => (
              <div key={section.heading ?? index}>
                {section.heading && (
                  <h2 className="text-foreground">{section.heading}</h2>
                )}
                <div className="mt-3 space-y-4 text-foreground/90">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-14 rounded-2xl bg-muted p-6 ring-1 ring-border sm:p-8">
              <h2 className="">Serviços relacionados</h2>
              <ul className="mt-4 space-y-3">
                {relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex items-center justify-between gap-3 rounded-xl bg-background px-4 py-3 ring-1 ring-border transition-colors hover:ring-primary"
                    >
                      <span>
                        <span className="block text-sm font-semibold">{service.label}</span>
                        <span className="block text-xs text-muted-foreground">
                          {service.description}
                        </span>
                      </span>
                      <ArrowRight
                        className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-navy px-6 py-10 text-navy-foreground sm:px-10">
            <h2 className="">Gostou das dicas?</h2>
            <p className="max-w-xl text-navy-muted">
              Solicite um orçamento gratuito e conheça a higienização profissional da GS Vitaliza,
              com atendimento a domicílio em Taboão da Serra e região.
            </p>
            <Button
              variant="cta-white"
              size="xl"
              render={
                <a
                  href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "blog_post_cta")}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Solicitar orçamento no WhatsApp
            </Button>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
              Voltar para o blog
            </Link>
          </div>
        </Container>
      </article>
    </>
  );
}
