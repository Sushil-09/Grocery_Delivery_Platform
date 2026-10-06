import "dotenv/config";
import { prisma } from "./config/prisma.js";

async function main() {
    const product = await prisma.product.update({
        where: {
            id: "0a2b471d-bc49-46fd-a91b-b3ec8187f1b5",
        },
        data: {
            stock: 5,
        },
    });

    console.log({
        id: product.id,
        name: product.name,
        stock: product.stock,
    });
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
