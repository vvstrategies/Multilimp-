# GS Vitaliza

Site institucional da GS Vitaliza, especializada em higienizacao de estofados com atendimento em Taboao da Serra e regiao.

- Site: https://gsvitaliza.com.br
- Repositorio: https://github.com/vvstrategies/Multilimp-

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
- `src/data/` — conteudo de servicos, localidades, avaliacoes, FAQ e blog
- `src/lib/constants.ts` — dados centrais da empresa, contato, navegacao e URL publica
- `public/` — imagens e outros arquivos publicos

Ao atualizar informacoes comerciais, mantenha telefone, endereco, horarios e links consistentes em `src/lib/constants.ts` e nos dados de conteudo correspondentes.

## Deploy

O projeto e uma aplicacao Next.js e pode ser conectado a um provedor compativel, como Vercel. A integracao de hospedagem e a associacao do dominio precisam ser configuradas na conta do provedor; este repositorio, por si so, nao contem credenciais de deploy.
