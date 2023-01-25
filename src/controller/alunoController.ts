import { Request, Response } from 'express';
import moment from 'moment';
import { Aluno, Curso, TEndereco } from '../interfaces/alunoInterfaces';
import prisma from '../prisma/prismaCliente';
import { AlunoService } from '../services/alunoService';

export class AlunoController extends AlunoService {
  public async create(req: Request, res: Response) {
    const { nome, email, dataNascimento, cpf, telefone, celular, sexo, bairro, cep, cidade, complemento, estado, logradouro, numero, descricao, instituicao, periodo } = req.body;

    if (!nome || !email || !dataNascimento || !cpf || !telefone || !celular || !sexo || !bairro || !cep || !cidade || !complemento || !estado || !logradouro || !numero || !descricao || !instituicao || !periodo) {
      return res.status(400).json({ message: 'Dados inválidos' });
    }

    const emailExists = await super.findByUniqueEmail(email);
    if (emailExists) return res.status(400).json({ message: 'Aluno já cadastrado com o e-mail' });

    const cpfExists = await super.findByUniqueCpf(cpf);
    if (cpfExists) return res.status(400).json({ message: 'CPF já cadastrado' });

    const curso: Curso = { descricao, instituicao, periodo };
    const endereco: TEndereco = { bairro, cep, cidade, complemento, estado, logradouro, numero };
    const aluno: Aluno = { celular, cpf, dataNascimento, email, nome, sexo, telefone };

    const alunoCreated = await super.createAluno(aluno, endereco, curso);

    return res.status(201).json(aluno);
  }

  public async list(req: Request, res: Response) {
    const alunos = await super.findAll();
    if (!alunos) return res.status(404).json({ message: 'Nenhum aluno encontrado' });
    return res.status(200).json(alunos);
  }

  public async index(req: Request, res: Response) {
    const { id } = req.params;
    const aluno = await super.findById(Number(id));
    if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
    return res.status(200).json(aluno);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, dataNascimento, cpf, telefone, celular, sexo, bairro, cep, cidade, complemento, estado, logradouro, numero, descricao, instituicao, periodo } = req.body;

    if (!nome || !email || !dataNascimento || !cpf || !telefone || !celular || !sexo || !bairro || !cep || !cidade || !complemento || !estado || !logradouro || !numero || !descricao || !instituicao || !periodo) {
      return res.status(400).json({ message: 'Dados inválidos' });
    }

    const alunoExists = await prisma.aluno.findUnique({ where: { id: Number(id) }, include: { endereco: true, Curso: true } });
    if (!alunoExists) return res.status(404).json({ message: 'Aluno não encontrado' });

    const curso: Curso = { descricao, instituicao, periodo };
    const endereco: TEndereco = { bairro, cep, cidade, complemento, estado, logradouro, numero };
    const aluno = { celular, cpf, dataNascimento: moment(dataNascimento).format('YYYY-MM-DDTHH:mm:ssZ'), email, nome, sexo, telefone };

    const alunoUpdated = super.updateAluno( alunoExists, aluno, endereco, curso);
    if (!alunoUpdated) return res.status(400).json({ message: 'Erro ao atualizar o aluno' });

    return res.status(200).json({ message: 'Aluno atualizado com sucesso' });
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const alunoExists = await super.findById(Number(id));
    if (!alunoExists) return res.status(404).json({ message: 'Aluno não encontrado' });

    const alunoDeleted = await super.deleteAluno(Number(id));
    if (!alunoDeleted) return res.status(400).json({ message: 'Erro ao deletar o aluno' });

    return res.status(200).json({ message: 'Aluno deletado com sucesso' });
  }

}