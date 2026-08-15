import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BlogPostCard } from "@/components/sections/blog/post-card";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/data/blog";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog | Dicas de Higienização de Estofados",
  description:
    "Artigos com dicas práticas sobre higienização e conservação de sofás, colchões, bancos automotivos e tapetes, direto da equipe da GS Vitaliza.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className="bg-navy text-navy-foreground">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Blog</p>
          <h1 className="mt-3 max-w-2xl">
            Dicas para manter sofás, colchões e estofados sempre limpos
          </h1>
          <p className="mt-4 max-w-2xl text-navy-muted">
            Conteúdo escrito pela equipe da {BUSINESS.displayName} para ajudar você a cuidar melhor
            dos estofados de casa, do escritório e do carro entre uma higienização profissional e
            outra.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-muted px-6 py-10 text-center ring-1 ring-border sm:px-10">
            <h2 className="">Precisa de uma higienização profissional?</h2>
            <p className="max-w-xl text-muted-foreground">
              Atendemos a domicílio em Taboão da Serra, Osasco, Santo Amaro, Embu das Artes, Itapevi,
              Cotia e região. Solicite um orçamento gratuito e sem compromisso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="cta"
                size="xl"
                render={
                  <a
                    href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "blog_index_cta")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Solicitar orçamento no WhatsApp
              </Button>
              <Button variant="outline" size="xl" render={<Link href="/servicos" />}>
                Ver nossos serviços
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
