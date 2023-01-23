import { SolicitacaoService } from "../services/solicitacaoService";

export class SolicitacaoController extends SolicitacaoService {
  async create(req: any, res: any) {
    const solicitacao = req.body;
    const solicitacaoCreated = await super.createSolicitacao(solicitacao);
    res.status(201).json(solicitacaoCreated);
  }

  async index(req: any, res: any) {
    const id = req.params.id;
    const solicitacao = await super.getSolicitacao(id);
    res.status(200).json(solicitacao);
  }

  async list(req: any, res: any) {
    const solicitacoes = await super.getSolicitacoes();
    res.status(200).json(solicitacoes);
  }

  async update(req: any, res: any) {
    const id = req.params.id;
    const solicitacao = req.body;
    const solicitacaoUpdated = await super.updateSolicitacao(id, solicitacao);
    res.status(200).json(solicitacaoUpdated);
  }

  async delete(req: any, res: any) {
    const id = req.params.id;
    const solicitacaoDeleted = await super.deleteSolicitacao(id);
    res.status(200).json(solicitacaoDeleted);
  }
}