import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BUSINESS } from "@/lib/constants";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Política de Privacidade",
  description:
    "Saiba como a Multilimp Higienização coleta, usa e protege as informações enviadas pelo formulário de contato do site.",
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        ])}
      />

      <section className="bg-navy text-navy-foreground">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Privacidade
          </p>
          <h1 className="mt-3 max-w-2xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 max-w-2xl text-navy-muted">
            Última atualização: 15 de agosto de 2026.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-10 text-foreground/90">
          <div className="space-y-4">
            <p>
              Esta política explica, de forma simples e direta, como a {BUSINESS.legalName}{" "}
              (&quot;{BUSINESS.displayName}&quot;, &quot;nós&quot;) trata as informações de quem
              visita este site e utiliza o formulário de contato, em conformidade com a Lei Geral
              de Proteção de Dados (Lei nº 13.709/2018, &quot;LGPD&quot;).
            </p>
            <p>
              Este site é um site institucional simples, usado para apresentar nossos serviços e
              facilitar o contato com potenciais clientes. Não operamos loja online, não
              processamos pagamentos pelo site e não solicitamos dados sensíveis em nenhuma parte
              da navegação.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground">Quais dados coletamos</h2>
            <p>
              O único ponto do site onde coletamos dados pessoais é o formulário de contato, na
              página <Link href="/contato" className="text-primary hover:underline">Contato</Link>.
              Nesse formulário, pedimos:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Nome;</li>
              <li>Telefone / WhatsApp;</li>
              <li>Serviço de interesse (opcional);</li>
              <li>Mensagem com detalhes do que você precisa.</li>
            </ul>
            <p>
              Não coletamos dados de pagamento, documentos, dados sensíveis (como saúde, origem
              racial ou opinião política) nem informações de terceiros sem necessidade. Também não
              utilizamos cookies de rastreamento ou ferramentas de análise de terceiros neste site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground">Como o formulário funciona</h2>
            <p>
              Este site é estático e não possui um servidor próprio armazenando as informações
              enviadas. Ao preencher e enviar o formulário de contato, os dados digitados são
              usados apenas para montar uma mensagem que abre diretamente uma conversa no
              WhatsApp com a nossa equipe. Ou seja, o &quot;envio&quot; do formulário é, na prática,
              o encaminhamento da sua mensagem para o nosso WhatsApp comercial, {BUSINESS.phoneDisplay}.
            </p>
            <p>
              A partir do momento em que a conversa acontece no WhatsApp, ela passa a estar sujeita
              também aos termos de uso e à política de privacidade do próprio WhatsApp, que é um
              serviço da Meta e não está sob nosso controle.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground">Para que usamos os dados</h2>
            <p>
              Usamos as informações enviadas exclusivamente para responder à sua solicitação, tirar
              dúvidas sobre nossos serviços de higienização e impermeabilização de estofados e
              elaborar orçamentos. Não vendemos, alugamos ou compartilhamos seus dados com terceiros
              para fins de marketing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground">
              Por quanto tempo guardamos os dados
            </h2>
            <p>
              Como as mensagens são enviadas diretamente pelo WhatsApp, o histórico de conversa fica
              armazenado no aplicativo de WhatsApp usado pela nossa equipe, seguindo as regras de
              armazenamento do próprio WhatsApp, até que o contato seja apagado por qualquer uma das
              partes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground">Seus direitos como titular</h2>
            <p>
              De acordo com a LGPD, você pode solicitar a qualquer momento a confirmação de que
              tratamos seus dados, o acesso a eles, a correção de informações incompletas ou
              desatualizadas, e a exclusão dos dados que você nos enviou, exceto quando houver
              obrigação legal de retenção.
            </p>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo WhatsApp{" "}
              {BUSINESS.phoneDisplay}, informando o pedido. Como ainda não temos um e-mail
              comercial público, esse é o canal oficial para questões relacionadas aos seus dados.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground">Alterações nesta política</h2>
            <p>
              Podemos atualizar esta política de tempos em tempos para refletir mudanças em nossos
              processos ou na legislação aplicável. A data no topo desta página indica a versão mais
              recente.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
