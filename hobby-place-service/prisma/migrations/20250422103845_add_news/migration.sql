/*
  Warnings:

  - Added the required column `breed` to the `PetPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `PetPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `PetPost` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PetSizeEnum" AS ENUM ('SMALL', 'MIDDLE', 'BIG');

-- CreateEnum
CREATE TYPE "PetGenderEnum" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "userRoleEnum" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "Hospital" DROP CONSTRAINT "Hospital_userId_fkey";

-- AlterTable
ALTER TABLE "PetPost" ADD COLUMN     "breed" TEXT NOT NULL,
ADD COLUMN     "gender" "PetGenderEnum" NOT NULL,
ADD COLUMN     "size" "PetSizeEnum" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "location" TEXT,
ADD COLUMN     "role" "userRoleEnum" NOT NULL DEFAULT 'USER';
