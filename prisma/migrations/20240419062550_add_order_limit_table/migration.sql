-- CreateTable
CREATE TABLE "Order_Limit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "productId" INTEGER,
    "categoryId" INTEGER,
    "status" TEXT NOT NULL
);
