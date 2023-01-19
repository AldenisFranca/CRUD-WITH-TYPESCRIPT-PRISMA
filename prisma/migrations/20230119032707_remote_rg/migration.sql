/*
  Warnings:

  - You are about to drop the column `rg` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `rg` on the `Professor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Aluno` DROP COLUMN `rg`;

-- AlterTable
ALTER TABLE `Professor` DROP COLUMN `rg`;
