# Multilimp Higienização

Site institucional da Multilimp Higienização, empresa localizada em Americana e especializada em higienização e impermeabilização de estofados.

- Site atualmente configurado: https://gsvitaliza.com.br
- Repositorio: https://github.com/vvstrategies/Multilimp-

O domínio acima foi mantido porque não foi informado um novo domínio para a marca. Antes de trocar o domínio público, atualize `SITE_URL` em `src/lib/constants.ts` e o campo `homepage` deste arquivo e de `package.json`.

## Stack

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Node.js 24 ou superior

## Desenvolvimento local

```bash
npm ci
npm run dev
```

O servidor de desenvolvimento fica disponivel em http://localhost:3001.

Comandos uteis:

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

## Docker

Para iniciar a versao de producao em Docker:

```bash
docker compose up --build app
```

O site fica disponivel em http://localhost:3000. Para desenvolvimento com hot reload, use `docker compose up --build dev`; a porta padrao e 3001.

## Estrutura

- `src/app/` — paginas e rotas do site
- `src/components/` — componentes de layout e secoes
- `src/data/` — conteudo de servicos, localidades, FAQ e blog
- `src/lib/constants.ts` — dados centrais da empresa, contato, navegacao e URL publica
- `public/images/multilimp/` — logo e fotos otimizadas da empresa
- `public/videos/` — vídeos de atendimento
- `src/app/icon.png` — ícone da marca

O site mantém as páginas por serviço e por cidade atendida. As avaliações são consultadas no perfil público do Google para evitar exibir comentários desatualizados.

Ao atualizar informações comerciais, mantenha telefone, endereço, redes sociais, perfil do Google e cidades em `src/lib/constants.ts` e nos dados de conteúdo correspondentes.

## Deploy

O projeto e uma aplicacao Next.js e pode ser conectado a um provedor compativel, como Vercel. A integracao de hospedagem e a associacao do dominio precisam ser configuradas na conta do provedor; este repositorio, por si so, nao contem credenciais de deploy.
