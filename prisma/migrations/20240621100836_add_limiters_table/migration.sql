-- CreateTable
CREATE TABLE "Limiters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeName" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Limiters_typeName_key" ON "Limiters"("typeName");
