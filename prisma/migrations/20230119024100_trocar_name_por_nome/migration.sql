/*
  Warnings:

  - You are about to drop the column `name` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Professor` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Aluno` DROP COLUMN `name`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Professor` DROP COLUMN `name`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;
