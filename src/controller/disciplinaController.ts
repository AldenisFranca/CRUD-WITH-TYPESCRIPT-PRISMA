import { DisciplinaService } from "../services/disciplinaService";

export class DisciplinaController extends DisciplinaService {
  async create(req: any, res: any) {
    const disciplina = req.body;
    const disciplinaCreated = await super.createDisciplina(disciplina);
    res.status(201).json(disciplinaCreated);
  }

  async index(req: any, res: any) {
    const id = req.params.id;
    const disciplina = await super.getDisciplina(id);
    res.status(200).json(disciplina);
  }

  async list(req: any, res: any) {
    const disciplinas = await super.getDisciplinas();
    res.status(200).json(disciplinas);
  }

  async update(req: any, res: any) {
    const id = req.params.id;
    const disciplina = req.body;
    const disciplinaUpdated = await super.updateDisciplina(id, disciplina);
    res.status(200).json(disciplinaUpdated);
  }

  async delete(req: any, res: any) {
    const id = req.params.id;
    const disciplinaDeleted = await super.deleteDisciplina(id);
    res.status(200).json(disciplinaDeleted);
  }
}