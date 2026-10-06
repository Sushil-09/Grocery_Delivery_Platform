import "dotenv/config";
import { prisma } from "./config/prisma.js";

async function main() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            stock: true,
        },
        take: 10,
    });

    console.log(products);
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
