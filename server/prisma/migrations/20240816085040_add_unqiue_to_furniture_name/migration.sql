/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Furniture` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Furniture_name_key" ON "Furniture"("name");
