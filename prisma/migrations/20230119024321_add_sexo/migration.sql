/*
  Warnings:

  - Added the required column `sexo` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Aluno` ADD COLUMN `sexo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Professor` ADD COLUMN `sexo` VARCHAR(191) NOT NULL;
