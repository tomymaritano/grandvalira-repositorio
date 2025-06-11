// src/lib/prisma.js
const { PrismaClient } = require('@prisma/client');

const globalForPrisma = globalThis;

let prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

module.exports = prisma;