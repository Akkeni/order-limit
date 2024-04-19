-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order_Limit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "productId" TEXT,
    "categoryId" TEXT,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Order_Limit" ("categoryId", "createdAt", "id", "productId", "status", "type", "updatedAt") SELECT "categoryId", "createdAt", "id", "productId", "status", "type", "updatedAt" FROM "Order_Limit";
DROP TABLE "Order_Limit";
ALTER TABLE "new_Order_Limit" RENAME TO "Order_Limit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
