import prisma from '../prisma/prismaCliente';
import { Aluno, AlunoCompleto, Curso, Endereco } from '../interfaces/alunoInterfaces'

export class AlunoService {
  public async createAluno(aluno: Aluno, endereco: Endereco, curso: Curso) {
    const cursoCreated = await prisma.curso.create({ data: curso });
    if (!cursoCreated) throw new Error('Curso não criado');

    const enderecoCreated = await prisma.endereco.create({ data: endereco });
    if (!enderecoCreated) throw new Error('Endereço não criado');

    const alunoCreated = await prisma.aluno.create({
      data: { ...aluno, enderecoId: enderecoCreated.id, cursoId: cursoCreated.id }
    });
    if (!alunoCreated) throw new Error('Aluno não criado');

    return alunoCreated;
  }

  public async findById(id: number) {
    const aluno = await prisma.aluno.findUnique({ where: { id }, include: { endereco: true, Curso: true } });
    return aluno;
  }

  public async findByUniqueEmail(email: string) {
    const aluno = await prisma.aluno.findUnique({ where: { email } });
    return aluno;
  }

  public async findByUniqueCpf(cpf: string) {
    const aluno = await prisma.aluno.findUnique({ where: { cpf } });
    return aluno;
  }

  public async findAll() {
    const alunos = await prisma.aluno.findMany();
    return alunos;
  }

  public async updateAluno(currentAluno: any, aluno: any, endereco: Endereco, curso: Curso) {

    const cursoUpdated = await prisma.curso.update({
      where: { id: currentAluno.Curso.id },
      data: curso
    });

    if (!cursoUpdated) throw new Error('Curso não atualizado');

    const enderecoUpdated = await prisma.endereco.update({
      where: { id: currentAluno.endereco.id },
      data: endereco
    });

    if (!enderecoUpdated) throw new Error('Endereço não atualizado');

    const alunoUpdated = await prisma.aluno.update({
      where: { id: Number(currentAluno.id) },
      data: aluno
    });
    if (!alunoUpdated) throw new Error('Aluno não atualizado');

    return alunoUpdated;
  }

  public async deleteAluno(id: number) {
    const aluno = await prisma.aluno.delete({ where: { id } });
    return aluno;
  }
}