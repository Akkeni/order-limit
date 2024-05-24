/*
  Warnings:

  - You are about to drop the column `quantityLimit` on the `Order_Limit` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Order_Limit` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Order_Limit` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Order_Limit` table. All the data in the column will be lost.
  - Added the required column `shopName` to the `Order_Limit` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order_Limit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shopName" TEXT NOT NULL,
    "hasToDelete" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Order_Limit" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Order_Limit";
DROP TABLE "Order_Limit";
ALTER TABLE "new_Order_Limit" RENAME TO "Order_Limit";
CREATE UNIQUE INDEX "Order_Limit_shopName_key" ON "Order_Limit"("shopName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
