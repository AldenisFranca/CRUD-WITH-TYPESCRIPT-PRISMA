import prisma from '../prisma/prismaCliente';
import { Qualificacao } from '@prisma/client';
import { TQualificacao } from '../interfaces/alunoInterfaces';

export class QualificacaoService {
  async createQualificacao(qualificacao: TQualificacao): Promise<Qualificacao> {
    return await prisma.qualificacao.create({ data: qualificacao });
  }

  async getQualificacao(id: number): Promise<Qualificacao | null> {
    return await prisma.qualificacao.findUnique({ where: { id } });
  }

  async getQualificacoes(): Promise<Qualificacao[]> {
    return await prisma.qualificacao.findMany();
  }

  async updateQualificacao(id: number, qualificacao: TQualificacao): Promise<Qualificacao> {
    return await prisma.qualificacao.update({
      where: { id },
      data: qualificacao,
    });
  }

  async deleteQualificacao(id: number): Promise<Qualificacao> {
    return await prisma.qualificacao.delete({ where: { id } });
  }
}