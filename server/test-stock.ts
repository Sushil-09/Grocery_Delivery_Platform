import "dotenv/config";
import { prisma } from "./config/prisma.js";
import { inngest } from "./inngest/index.js";

const testStock = async () => {
    try {
        const product = await prisma.product.findFirst();

        if (!product) {
            console.log("No products found");
            return;
        }

        console.log("Testing product:", product.name);
        console.log("Product ID:", product.id);

        // Reduce stock below the low-stock threshold
        await prisma.product.update({
            where: { id: product.id },
            data: { stock: 5 },
        });

        console.log("Stock updated to 5");

        // Send Inngest event
        const result = await inngest.send({
            name: "inventory/stock.updated",
            data: {
                productId: product.id,
            },
        });

        console.log("Inngest event sent:", result);
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await prisma.$disconnect();
    }
};

testStock();