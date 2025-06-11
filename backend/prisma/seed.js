const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs'); // usa 'bcrypt' si pudiste instalarlo

const prisma = new PrismaClient();

async function main() {
  // Crear User ADMIN
  const adminEmail = 'admin@example.com';
  const adminPassword = 'password123';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  let adminUser;

  if (existingUser) {
    console.log(`User with email ${adminEmail} already exists.`);
    adminUser = existingUser;
  } else {
    adminUser = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        role: 'ADMIN',
      },
    });
    console.log('✅ Admin user created:', adminUser);
  }

  // Crear contactos de ejemplo
  const contactsData = [
    {
      name: 'Juan Perez',
      email: 'juan.perez@example.com',
      phone: '1234567890',
    },
    {
      name: 'Maria Gomez',
      email: 'maria.gomez@example.com',
      phone: '2345678901',
    },
    {
      name: 'Carlos Lopez',
      email: 'carlos.lopez@example.com',
      phone: '3456789012',
    },
  ];

  // Ver si ya existen contactos (por ejemplo el de Juan)
  const existingContact = await prisma.contact.findUnique({
    where: { email: 'juan.perez@example.com' },
  });

  if (existingContact) {
    console.log('Contacts already seeded.');
  } else {
    for (const contact of contactsData) {
      await prisma.contact.create({
        data: contact,
      });
    }
    console.log('✅ Example contacts created.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });