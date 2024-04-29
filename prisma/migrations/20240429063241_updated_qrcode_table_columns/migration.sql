/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Order_Limit` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Order_Limit` table. All the data in the column will be lost.
  - Added the required column `quantityLimit` to the `Order_Limit` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order_Limit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "typeId" TEXT,
    "quantityLimit" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Order_Limit" ("createdAt", "id", "status", "type", "updatedAt") SELECT "createdAt", "id", "status", "type", "updatedAt" FROM "Order_Limit";
DROP TABLE "Order_Limit";
ALTER TABLE "new_Order_Limit" RENAME TO "Order_Limit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
