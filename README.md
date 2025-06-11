# grandvalira-repositorio

Repositorio que contiene el frontend en Next.js y el backend en Express.

## Requisitos
- Node.js 18 o superior
- Una base de datos PostgreSQL

## Instalación del Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` con las siguientes variables:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
JWT_SECRET="clave_secreta"
PORT=3000 # opcional
```

Ejecuta las migraciones de Prisma y genera el cliente:

```bash
npx prisma migrate deploy # o npx prisma migrate dev para desarrollo
npx prisma generate
```

Inicia el servidor:

```bash
node src/server.js
```

La documentación Swagger estará disponible en [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Instalación del Frontend

Desde la raíz del proyecto ejecuta:

```bash
npm install
npm run dev
```

El frontend se abrirá en [http://localhost:3001](http://localhost:3001).

