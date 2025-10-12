# Frontend - Vite + React con pnpm
FROM node:20-slim

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar solo archivos necesarios
COPY package.json pnpm-lock.yaml /app/

# Instalar dependencias usando pnpm
RUN pnpm install

# Copiar el resto del código
COPY . /app/
COPY pnpm-workspace.yaml /app/


EXPOSE 5173

CMD ["pnpm", "run", "dev", "--host"]

