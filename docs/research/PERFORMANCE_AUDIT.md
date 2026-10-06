# Auditoria de performance e otimização — Multilimp

Data: 6 de outubro de 2026

## Resumo

O projeto foi mantido em Next.js 16 com App Router. A lentidão percebida tinha como principais causas o cabeçalho global hidratado no navegador, efeitos gráficos e listeners executados durante a rolagem, componentes interativos de uma biblioteca usados para comportamentos simples, animações de entrada que ocultavam conteúdo até a execução de JavaScript e um vídeo de 3,33 MB sem qualquer referência no site.

A revisão removeu esse trabalho do caminho crítico, preservou o conteúdo e as rotas existentes, corrigiu a aplicação da marca e preparou uma integração oficial e server-side com o Google Places API (New).

## Referência antes e depois

| Medida | Antes | Depois | Variação |
| --- | ---: | ---: | ---: |
| JavaScript gerado em `.next/static/chunks` | 1.193.962 B | 964.404 B | -229.558 B (-19,2%) |
| Chunk do layout global | 25.183 B | 1.710 B | -93,2% |
| Chunk da página inicial | 4.492 B | 279 B | -93,8% |
| Chunk da página de contato | 17.734 B | 8.403 B | -52,6% |
| Mídia em `public` auditada | 4.188.182 B | 804.858 B | -3.383.324 B (-80,8%) |
| Imagens visuais da Multilimp | 855.760 B | 804.858 B | -50.902 B (-5,9%) |

Os números de chunks são a soma dos arquivos JavaScript produzidos pelo build e funcionam como comparação reprodutível do artefato, não como bytes efetivamente transferidos em uma navegação. Compressão HTTP, cache, divisão por rota e carregamento sob demanda alteram o tráfego real.

Lighthouse, LCP, CLS e INP não foram registrados porque o ambiente local disponível não expôs instrumentação Lighthouse confiável. Não há, portanto, estimativas inventadas. Essas métricas devem ser coletadas na URL publicada, preferencialmente com PageSpeed Insights e dados de campo do Chrome UX Report quando houver tráfego suficiente.

## Alterações principais

- O cabeçalho passou de um Client Component global para HTML nativo renderizado no servidor.
- Foram removidos canvas, filtros SVG, leitura de pixels, listeners de `scroll`/`resize` e animações dependentes de hidratação.
- Menus desktop e mobile usam `details`/`summary`, sem biblioteca de navegação ou painel lateral.
- Componentes simples de botão, selo, campo, rótulo e acordeão usam elementos nativos.
- Apenas o formulário de contato e um controlador mínimo que fecha o menu móvel após a navegação continuam como Client Components próprios do site.
- A fonte monoespaçada não utilizada foi removida; a família visual principal e os pesos efetivamente usados foram preservados.
- A imagem principal usa preload do `next/image`; imagens fora da primeira dobra continuam responsivas e preguiçosas.
- A lista de qualidades do otimizador foi restringida à qualidade usada pelo site.
- Não foram encontrados scripts de analytics ou terceiros que exigissem remoção.

## Logo e imagens

A logo original foi recortada apenas no espaço branco excedente, sem redesenho, corte de letras ou deformação. O novo WebP tem 579 × 465 px e 22.362 B. Cabeçalho e rodapé usam `object-contain` em um retângulo branco com cantos discretos; não há máscara circular nem `object-cover`.

Oito fotografias WebP foram recomprimidas com inspeção visual. Somada à nova logo, a biblioteca visual contém nove WebPs e ocupa 804.858 B. O PNG técnico do ícone da aplicação foi preservado. O vídeo sem referências, com 3.332.422 B, foi removido.

## Google Reviews

A solução implementada é Google Places API (New), pois não existem no projeto as credenciais OAuth e a autorização de proprietário necessárias para a Google Business Profile API.

- Place ID verificado: `ChIJpZsuJCmbyJQRfhmij8eITxk`.
- A consulta ocorre somente no servidor.
- O field mask solicita apenas nome, nota, total, URI do Google e reviews.
- O cache do Next.js revalida a cada 21.600 segundos (6 horas).
- Em falha ou ausência de chave, a página preserva nota, quantidade e link já conhecidos, mas não inventa textos de avaliações.
- A Places API retorna apenas uma seleção limitada de avaliações; a interface não afirma sincronizar o histórico completo.

Variáveis:

```dotenv
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=ChIJpZsuJCmbyJQRfhmij8eITxk
```

`GOOGLE_PLACE_ID` é opcional porque o ID verificado já existe como padrão. A chave deve ser criada em um projeto Google Cloud com faturamento ativo, Places API (New) habilitada e restrição de API aplicada. Ela nunca deve receber o prefixo `NEXT_PUBLIC_`.

## Arquivos removidos

Código sem referências:

- `src/components/layout/liquid-glass.tsx`
- `src/components/ui/navigation-menu.tsx`
- `src/components/ui/sheet.tsx`
- `src/components/ui/separator.tsx`

Mídia substituída ou sem referências:

- `public/images/multilimp/logo.webp`
- `public/videos/multilimp-atendimento.mp4`

Resíduos do template original, sem relação com o site e sem referências de build:

- `README.ja.md`
- `README.zh-CN.md`
- `docs/assets/star-history.png`
- `docs/assets/sponsors/rapidproxy-banner.png`
- `docs/assets/sponsors/atlas-cloud-logo.svg`
- `docs/assets/sponsors/atlas-cloud-logo-white.svg`

## Dependências removidas

- `@base-ui/react`: substituída por elementos nativos nos componentes usados.
- `tw-animate-css`: o import global foi removido junto das animações dependentes de JavaScript.

## Validação

- ESLint, TypeScript strict e build de produção passaram sem erros.
- As 29 URLs descobertas pelo sitemap e pelos recursos técnicos retornaram HTTP 200 no servidor de produção local.
- Header, menu, rodapé, formulário, acordeão, imagens e fallback de reviews foram verificados em desktop, tablet e mobile.
- Não foram observados erros ou avisos no console do navegador.
- O script `scripts/audit-page.mjs` permite repetir a auditoria de recursos HTTP em uma URL local ou publicada.

## Pendências externas

1. Criar ou selecionar um projeto no Google Cloud com faturamento ativo.
2. Habilitar Places API (New).
3. Criar uma API key e restringi-la à Places API (New); aplicar também uma restrição de origem de servidor compatível com a hospedagem.
4. Configurar `GOOGLE_PLACES_API_KEY` no ambiente de produção e fazer novo deploy.
5. Validar os cards com a resposta real e registrar Lighthouse/LCP/CLS/INP na URL pública.

Caso seja necessário listar todas as avaliações do perfil administrado, será preciso migrar para Google Business Profile API e fornecer consentimento OAuth do proprietário, conta e localização do perfil. Essa autorização não foi simulada.
