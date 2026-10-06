import { prisma } from "./config/prisma.js";

const main = async () => {
    const result = await prisma.order.deleteMany({});
    console.log(`Deleted ${result.count} orders`);
    await prisma.$disconnect();
};

main();