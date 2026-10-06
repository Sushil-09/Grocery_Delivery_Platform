import { prisma } from "./config/prisma.js";

const main = async () => {
    const riders = [
        {
            name: "Rahul Sharma",
            email: "rahul@example.com",
            password: "password123",
            phone: "9999999991",
            vehicleType: "bike",
            isActive: true,
        },
        {
            name: "Amit Kumar",
            email: "amit@example.com",
            password: "password123",
            phone: "9999999992",
            vehicleType: "bike",
            isActive: true,
        },
        {
            name: "Vikas Singh",
            email: "vikas@example.com",
            password: "password123",
            phone: "9999999993",
            vehicleType: "scooter",
            isActive: true,
        },
        {
            name: "Rohit Verma",
            email: "rohit@example.com",
            password: "password123",
            phone: "9999999994",
            vehicleType: "bike",
            isActive: true,
        },
        {
            name: "Test Rider",
            email: "testrider@example.com",
            password: "password123",
            phone: "9999999999",
            vehicleType: "bike",
            isActive: true,
        },
    ];

    for (const rider of riders) {
        const existing = await prisma.deliveryPartner.findUnique({
            where: { email: rider.email },
        });

        if (existing) {
            console.log(`Already exists: ${rider.name}`);
            continue;
        }

        const created = await prisma.deliveryPartner.create({
            data: rider,
        });

        console.log(`Created: ${created.name} (${created.id})`);
    }

    await prisma.$disconnect();
};

main();