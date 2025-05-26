# 1) Build: compila tu app con Vite
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# 2) Production: sirve los estáticos con 'serve'
FROM node:20-alpine AS runner
WORKDIR /app

RUN yarn global add serve
COPY --from=builder /app/dist ./dist

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
