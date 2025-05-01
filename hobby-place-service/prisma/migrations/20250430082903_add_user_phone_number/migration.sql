/*
  Warnings:

  - A unique constraint covering the columns `[image]` on the table `ServiceCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phoneNumber" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_image_key" ON "ServiceCategory"("image");
