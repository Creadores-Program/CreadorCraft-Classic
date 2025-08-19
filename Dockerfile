# Dependencia pnpm// install --frozen-lockfile
FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN corepack enable 
RUN corepack prepare pnpm@10.14.0 --activate
RUN pnpm install --frozen-lockfile


# RUNTIME
FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY /src ./src
COPY package*.json ./

USER node

CMD [ "node", "--run", "start"]
