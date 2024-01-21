/*
  Warnings:

  - You are about to drop the column `address` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Equipement` table. All the data in the column will be lost.
  - You are about to drop the column `attribut_id` on the `EquipmentAttribute` table. All the data in the column will be lost.
  - You are about to drop the column `equipment_id` on the `EquipmentAttribute` table. All the data in the column will be lost.
  - You are about to drop the column `customer` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_address` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the column `rent_actuel_end_date` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the `Categorie` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Equipement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipementId` to the `EquipementPosition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attributeId` to the `EquipmentAttribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipementId` to the `EquipmentAttribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipementId` to the `EquipmentTripLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rent_actual_duration` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rent_actual_end_date` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rent_duration` to the `Rent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customer` DROP COLUMN `address`,
    ADD COLUMN `addressId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Equipement` DROP COLUMN `category`,
    ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `EquipementPosition` ADD COLUMN `equipementId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `EquipmentAttribute` DROP COLUMN `attribut_id`,
    DROP COLUMN `equipment_id`,
    ADD COLUMN `attributeId` INTEGER NOT NULL,
    ADD COLUMN `equipementId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `EquipmentTripLog` ADD COLUMN `equipementId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Rent` DROP COLUMN `customer`,
    DROP COLUMN `invoice_address`,
    DROP COLUMN `rent_actuel_end_date`,
    ADD COLUMN `addressId` INTEGER NOT NULL,
    ADD COLUMN `customerId` INTEGER NULL,
    ADD COLUMN `isDelivered` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isPickedUp` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `rent_actual_duration` DATETIME(3) NOT NULL,
    ADD COLUMN `rent_actual_end_date` DATETIME(3) NOT NULL,
    ADD COLUMN `rent_duration` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('USER', 'SELLER', 'MECHANIC', 'MANAGER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `Categorie`;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `created_by` VARCHAR(191) NOT NULL DEFAULT 'System',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rent` ADD CONSTRAINT `Rent_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rent` ADD CONSTRAINT `Rent_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentAttribute` ADD CONSTRAINT `EquipmentAttribute_equipementId_fkey` FOREIGN KEY (`equipementId`) REFERENCES `Equipement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentAttribute` ADD CONSTRAINT `EquipmentAttribute_attributeId_fkey` FOREIGN KEY (`attributeId`) REFERENCES `Attribute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipement` ADD CONSTRAINT `Equipement_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentTripLog` ADD CONSTRAINT `EquipmentTripLog_equipementId_fkey` FOREIGN KEY (`equipementId`) REFERENCES `Equipement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipementPosition` ADD CONSTRAINT `EquipementPosition_equipementId_fkey` FOREIGN KEY (`equipementId`) REFERENCES `Equipement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
