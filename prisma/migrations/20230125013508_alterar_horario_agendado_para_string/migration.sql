/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Solicitacao` MODIFY `horarioAgendado` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Aluno_cpf_key` ON `Aluno`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Aluno_email_key` ON `Aluno`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Professor_cpf_key` ON `Professor`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Professor_email_key` ON `Professor`(`email`);
