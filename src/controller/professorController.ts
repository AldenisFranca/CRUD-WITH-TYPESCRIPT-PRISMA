import { Request, Response } from "express";
import { ProfessorService } from "../services/professorService";
import { EnderecoService } from "../services/enderecoService";
import { QualificacaoService } from "../services/formacaoService";
import { SolicitacaoService } from "../services/solicitacaoService";

export class ProfessorController extends ProfessorService {
  public async assinar(req: Request, res: Response) {
    const { profId, solicitacaoId } = req.body;
    if (!profId || !solicitacaoId) return res.status(400).json({ message: 'Dados inválidos' });
    const solicitacao = await new SolicitacaoService().getSolicitacao(solicitacaoId);
    if (!solicitacao) return res.status(400).json({ message: 'Solicitação não encontrada' });
    if (solicitacao.status !== 'PENDENTE') return res.status(400).json({ message: 'Solicitação já assinada' });
    const solicitacaoAssinada = await new SolicitacaoService().assinarSolicitacao(solicitacaoId, profId);
    res.status(200).json(solicitacaoAssinada);
  }

  public async desassinar(req: Request, res: Response) {
    const { solicitacaoId } = req.body;
    if (!solicitacaoId) return res.status(400).json({ message: 'Dados inválidos' });
    const solicitacao = await new SolicitacaoService().getSolicitacao(solicitacaoId);
    if (!solicitacao) return res.status(400).json({ message: 'Solicitação não encontrada' });
    if (solicitacao.status !== 'ASSINADA') return res.status(400).json({ message: 'Solicitação não assinada' });
    const solicitacaoDesassinada = await new SolicitacaoService().desassinarSolicitacao(solicitacaoId);
    res.status(200).json(solicitacaoDesassinada);
  }

  public async create(req: Request, res: Response) {
    const { nome, email, dataNascimento, cpf, telefone, celular, sexo, bairro, cep, cidade, complemento, estado, logradouro, numero, formacao, especializacao } = req.body;

    if (!nome || !email || !dataNascimento || !cpf || !telefone || !celular || !sexo || !bairro || !cep || !cidade || !complemento || !estado || !logradouro || !numero || !formacao || !especializacao) {
      return res.status(400).json({ message: 'Dados inválidos' });
    }

    const emailExists = await super.findByUniqueEmail(email);
    if (emailExists) return res.status(400).json({ message: 'Professor já cadastrado com o e-mail' });

    const cpfExists = await super.findByUniqueCpf(cpf);
    if (cpfExists) return res.status(400).json({ message: 'CPF já cadastrado' });

    const enderecoCreated = await new EnderecoService().createEndereco({ bairro, cep, cidade, complemento, estado, logradouro, numero });

    const profCreated = await super.createProfessor({ celular, cpf, dataNascimento, email, nome, sexo, telefone, enderecoId: enderecoCreated.id });

    const formacaoCreated = await new QualificacaoService().createQualificacao({ formacao, especializacao, professorId: profCreated.id });

    return res.status(201).json({ ...profCreated, ...formacaoCreated });
  }

  async index(req: any, res: any) {
    const id = req.params.id;
    const professor = await super.getProfessor(id);
    res.status(200).json(professor);
  }

  async list(req: any, res: any) {
    const professores = await super.getProfessores();
    res.status(200).json(professores);
  }

  async update(req: any, res: any) {
    const id = req.params.id;
    const professor = req.body;
    const professorUpdated = await super.updateProfessor(id, professor);
    res.status(200).json(professorUpdated);
  }

  async delete(req: any, res: any) {
    const id = req.params.id;
    const professorDeleted = await super.deleteProfessor(id);
    res.status(200).json(professorDeleted);
  }
}