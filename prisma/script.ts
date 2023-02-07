import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line import/prefer-default-export
export const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.user.deleteMany({
  //   where: {
  //     username: 'admin',
  //   },
  // });

  // await prisma.user.create({
  //   data: {
  //     username: 'admin',
  //     password: 'admin',
  //     tasks: {
  //       create: {
  //         taskToDo: 'Finish backend',
  //       },
  //     },
  //   },
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
