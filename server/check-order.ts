import { prisma } from "./config/prisma.js";

const main = async () => {
    const order = await prisma.order.findFirst({
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            status: true, 
            deliveryPartnerId: true,
            deliveryOtp: true,
            statusHistory: true,
            createdAt: true,
        },
    });

    console.log(order);

    await prisma.$disconnect();
};

main();