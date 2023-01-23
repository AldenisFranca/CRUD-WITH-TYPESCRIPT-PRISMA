import prisma from '../prisma/prismaCliente';
import { Endereco } from '@prisma/client';
import { TEndereco} from "../interfaces/alunoInterfaces";

export class EnderecoService {
  async createEndereco(endereco: TEndereco): Promise<Endereco> {
    return await prisma.endereco.create({ data: endereco });
  }

  async getEndereco(id: number): Promise<Endereco | null> {
    return await prisma.endereco.findUnique({ where: { id } });
  }

  async getEnderecos(): Promise<Endereco[]> {
    return await prisma.endereco.findMany();
  }

  async updateEndereco(id: number, endereco: TEndereco): Promise<Endereco> {
    return await prisma.endereco.update({
      where: { id },
      data: endereco,
    });
  }

  async deleteEndereco(id: number): Promise<Endereco> {
    return await prisma.endereco.delete({ where: { id } });
  }
}