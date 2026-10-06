const baseUrl = process.argv[2] ?? "http://localhost:3001/";
const pageUrl = new URL(baseUrl);
const response = await fetch(pageUrl, {
  headers: { "accept-encoding": "identity" },
});
const html = await response.text();
const resourceUrls = [
  ...html.matchAll(/(?:src|href)="([^"]+)"/g),
]
  .map((match) => match[1].replaceAll("&amp;", "&"))
  .filter((url) => url.startsWith("/_next/") || url.startsWith("/images/"));
const uniqueUrls = [...new Set(resourceUrls)];

let totalBytes = Buffer.byteLength(html);
let errorCount = 0;

console.log(`HTML_BYTES\t${Buffer.byteLength(html)}`);

for (const resourceUrl of uniqueUrls) {
  const resourceResponse = await fetch(new URL(resourceUrl, pageUrl), {
    headers: { "accept-encoding": "identity" },
  });
  const bytes = Buffer.from(await resourceResponse.arrayBuffer()).length;
  totalBytes += bytes;
  if (!resourceResponse.ok) errorCount += 1;
  console.log(`${resourceResponse.status}\t${bytes}\t${resourceUrl.slice(0, 180)}`);
}

console.log(`RESOURCE_REQUESTS\t${uniqueUrls.length}`);
console.log(`TOTAL_WITH_HTML_REQUESTS\t${uniqueUrls.length + 1}`);
console.log(`TOTAL_IDENTITY_BYTES\t${totalBytes}`);
console.log(`ERRORS\t${errorCount}`);
