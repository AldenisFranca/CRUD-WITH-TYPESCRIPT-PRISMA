import prisma from '../prisma/prismaCliente';
import { Disciplina } from '@prisma/client';

export class DisciplinaService {
  async createDisciplina(disciplina: Disciplina): Promise<Disciplina> {
    return await prisma.disciplina.create({ data: disciplina });
  }

  async getDisciplina(id: number): Promise<Disciplina | null> {
    return await prisma.disciplina.findUnique({ where: { id } });
  }

  async getDisciplinas(): Promise<Disciplina[]> {
    return await prisma.disciplina.findMany();
  }

  async updateDisciplina(id: number, disciplina: Disciplina): Promise<Disciplina> {
    return await prisma.disciplina.update({
      where: { id },
      data: disciplina,
    });
  }

  async deleteDisciplina(id: number): Promise<Disciplina> {
    return await prisma.disciplina.delete({ where: { id } });
  }
}