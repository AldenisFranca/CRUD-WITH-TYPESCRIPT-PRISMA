import prisma from '../prisma/prismaCliente';
import { Solicitacao } from '@prisma/client';
import { TSolicitacao } from '../interfaces/alunoInterfaces';

export class SolicitacaoService {
  async desassinarSolicitacao(solicitacaoId: number) {
    return await prisma.solicitacao.update({
      where: { id: solicitacaoId },
      data: {
        status: 'PENDENTE',
        professorId: null,
      },
    });
  }
  
  async createSolicitacao(solicitacao: TSolicitacao): Promise<Solicitacao> {
    return await prisma.solicitacao.create({ data: solicitacao });
  }

  async getSolicitacao(id: number): Promise<Solicitacao | null> {
    return await prisma.solicitacao.findUnique({ where: { id } });
  }

  async getSolicitacoes(): Promise<Solicitacao[]> {
    return await prisma.solicitacao.findMany();
  }

  async updateSolicitacao(id: number, solicitacao: TSolicitacao): Promise<Solicitacao> {
    return await prisma.solicitacao.update({
      where: { id },
      data: solicitacao,
    });
  }

  async deleteSolicitacao(id: number): Promise<Solicitacao> {
    return await prisma.solicitacao.delete({ where: { id } });
  }

  async assinarSolicitacao(id: number, professorId: number): Promise<Solicitacao> {
    return await prisma.solicitacao.update({
      where: { id },
      data: {
        status: 'ASSINADA',
        professorId,
       },
    });
  }
}