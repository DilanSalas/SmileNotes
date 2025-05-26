# 1) Build: compila tu app con Vite
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# 2) Production: sirve los estáticos con 'serve'
FROM node:18-alpine AS runner

WORKDIR /app

# Instalamos únicamente el paquete 'serve' de forma global
RUN yarn global add serve

# Copiamos la carpeta 'dist' desde el builder
COPY --from=builder /app/dist ./dist

# Exponemos el mismo puerto
EXPOSE 4173

# Arrancamos en modo producción, sirviendo sólo estáticos
CMD ["serve", "-s", "dist", "-l", "4173"]
