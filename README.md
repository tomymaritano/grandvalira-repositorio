# Employee Contacts App 📇

Una plataforma interna para gestionar el directorio de empleados. **Roles: USER, MODERATOR, ADMIN**.

## 📚 Tech Stack

- **Frontend:** Next.js App Router + React 19 + Tailwind CSS
- **Backend:** Node.js + Express + Prisma ORM + PostgreSQL
- **Auth:** JWT (propio) con roles embebidos
- **API:** RESTful
- **DB:** PostgreSQL (via Prisma ORM)
- **Testing:** Vitest + React Testing Library, Jest + Supertest
- **Security:** RBAC, JWT verification, CORS control

## 🚀 Funcionalidad

| Rol       | Permisos                                                     |
|-----------|--------------------------------------------------------------|
| USER      | Ver contactos                                               |
| MODERATOR | Ver, crear, editar, eliminar, bannear contactos             |
| ADMIN     | Igual que MODERATOR + gestión de moderadores + acceso a Audit Log |

## ⚙️ Setup

### 1️⃣ Backend

```bash
cd backend
npm install
cp .env.example .env
# Completa DATABASE_URL y JWT_SECRET

# Generar Prisma Client
npx prisma generate

# Crear la base de datos
npx prisma migrate dev --name init

# Ejecutar servidor
npm run dev

# Swagger UI
# Abre http://localhost:3000/api-docs para ver la documentación
```

### 2️⃣ Frontend

```bash
cd app
npm install
npm run dev
# Abre http://localhost:3001
```

## 🧪 Testing

```bash
npm run test          # Ejecutar todos los tests
npm run test:watch    # Ejecutar en modo watch
npm run test:coverage # Generar reporte de coverage
```

Para React 19 se usa React Testing Library con Vitest. El backend utiliza Jest y Supertest.
