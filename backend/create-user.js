const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log('Starting user create');

  const plainPassword = '123456';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email: 'test@example.com' },
  });

  if (existingUser) {
    console.log('User already exists:', existingUser.email);
    return;
  }

  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: hashedPassword,
      role: 'USER',
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });