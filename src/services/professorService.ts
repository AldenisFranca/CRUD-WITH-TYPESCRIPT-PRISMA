import prisma from '../prisma/prismaCliente';
import {TProfessor} from "../interfaces/alunoInterfaces";
import { Professor } from '@prisma/client';

export class ProfessorService {
  async findByUniqueCpf(cpf: string): Promise<boolean> {
    const professor = await prisma.professor.findUnique({ where: { cpf } });
    return professor ? true : false;
  }

  async findByUniqueEmail(email: string): Promise<boolean> {
    const professor = await prisma.professor.findUnique({ where: { email } });
    return professor ? true : false;
  }
  
  async createProfessor(professor: TProfessor): Promise<Professor> {
    return await prisma.professor.create({ data: professor });
  }

  async getProfessor(id: number): Promise<Professor | null> {
    return await prisma.professor.findUnique({ where: { id } });
  }

  async getProfessores(): Promise<Professor[]> {
    return await prisma.professor.findMany();
  }

  async updateProfessor(id: number, professor: TProfessor): Promise<Professor> {
    return await prisma.professor.update({
      where: { id },
      data: professor,
    });
  }

  async deleteProfessor(id: number): Promise<Professor> {
    return await prisma.professor.delete({ where: { id } });
  }
}