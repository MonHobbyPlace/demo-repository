-- CreateEnum
CREATE TYPE "PetPostEnum" AS ENUM ('SALE', 'ADOPT');

-- CreateEnum
CREATE TYPE "PetSizeEnum" AS ENUM ('SMALL', 'MIDDLE', 'BIG');

-- CreateEnum
CREATE TYPE "PetGenderEnum" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "userRoleEnum" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "userRoleEnum" NOT NULL DEFAULT 'USER',
    "location" TEXT,
    "profileImage" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PetPost" (
    "id" SERIAL NOT NULL,
    "petName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "size" "PetSizeEnum" NOT NULL,
    "gender" "PetGenderEnum" NOT NULL,
    "price" INTEGER NOT NULL,
    "purpose" "PetPostEnum" NOT NULL,
    "petCategoryId" INTEGER NOT NULL,
    "video" TEXT NOT NULL,

    CONSTRAINT "PetPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServicePost" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "purpose" "PetPostEnum" NOT NULL,
    "petCategoryId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "skill" TEXT[],

    CONSTRAINT "ServicePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "avatarImage" TEXT[],
    "email" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "workTime" TEXT NOT NULL,
    "category" TEXT[],
    "views" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PetCategory" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PetCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "PetCategory_name_key" ON "PetCategory"("name");

-- AddForeignKey
ALTER TABLE "PetPost" ADD CONSTRAINT "PetPost_petCategoryId_fkey" FOREIGN KEY ("petCategoryId") REFERENCES "PetCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetPost" ADD CONSTRAINT "PetPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePost" ADD CONSTRAINT "ServicePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePost" ADD CONSTRAINT "ServicePost_petCategoryId_fkey" FOREIGN KEY ("petCategoryId") REFERENCES "PetCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePost" ADD CONSTRAINT "ServicePost_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
