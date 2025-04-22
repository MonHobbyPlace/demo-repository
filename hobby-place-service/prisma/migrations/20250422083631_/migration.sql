/*
  Warnings:

  - You are about to drop the column `HospitalId` on the `Hospital` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `PetCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `location` to the `Hospital` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Hospital` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workTime` to the `Hospital` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hospital" DROP COLUMN "HospitalId",
ADD COLUMN     "category" TEXT[],
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" INTEGER NOT NULL,
ADD COLUMN     "workTime" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PetCategory_name_key" ON "PetCategory"("name");
