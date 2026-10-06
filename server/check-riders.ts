import { prisma } from "./config/prisma.js";

const main = async () => {
    const riders = await prisma.deliveryPartner.findMany({
        select: {
            id: true,
            name: true,
            isActive: true,
        },
    });

    console.log("Riders:");
    console.log(riders);
};

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });