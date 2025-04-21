-- CreateEnum
CREATE TYPE "PetPostEnum" AS ENUM ('SALE', 'ADOPT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "price" INTEGER NOT NULL,
    "purpose" "PetPostEnum" NOT NULL,
    "petCategoryId" INTEGER NOT NULL,

    CONSTRAINT "PetPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServicePost" (
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
    "price" INTEGER NOT NULL,
    "purpose" "PetPostEnum" NOT NULL,
    "petCategoryId" INTEGER NOT NULL,

    CONSTRAINT "ServicePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "avatarImage" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "backgroundImage" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "HospitalId" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PetCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PetCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "PetPost" ADD CONSTRAINT "PetPost_petCategoryId_fkey" FOREIGN KEY ("petCategoryId") REFERENCES "PetCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetPost" ADD CONSTRAINT "PetPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePost" ADD CONSTRAINT "ServicePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePost" ADD CONSTRAINT "ServicePost_petCategoryId_fkey" FOREIGN KEY ("petCategoryId") REFERENCES "PetCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
