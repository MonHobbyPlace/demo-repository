/*
  Warnings:

  - You are about to drop the column `userId` on the `Hospital` table. All the data in the column will be lost.
  - The `avatarImage` column on the `Hospital` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `petName` on the `ServicePost` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `ServicePost` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Hospital` table without a default value. This is not possible if the table is not empty.
  - Made the column `backgroundImage` on table `Hospital` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `image` to the `PetCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video` to the `PetPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `ServicePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hospital" DROP COLUMN "userId",
ADD COLUMN     "rating" INTEGER NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "avatarImage",
ADD COLUMN     "avatarImage" TEXT[],
ALTER COLUMN "backgroundImage" SET NOT NULL,
ALTER COLUMN "backgroundImage" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PetCategory" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PetPost" ADD COLUMN     "video" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServicePost" DROP COLUMN "petName",
DROP COLUMN "price",
ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "serviceId" INTEGER[],
ADD COLUMN     "skill" TEXT[];

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServicePost" ADD CONSTRAINT "ServicePost_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
