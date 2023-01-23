import { Router } from "express";
import { AlunoController } from "../controller/alunoController";
import { ProfessorController } from "../controller/professorController";
import { SolicitacaoController } from "../controller/solicitacaoController";
import { DisciplinaController } from "../controller/disciplinaController";

const router = Router();

const alunoController = new AlunoController();
const professorController = new ProfessorController();
const solicitacaoController = new SolicitacaoController();
const disciplinaController = new DisciplinaController();

router.post("/aluno", alunoController.create);
router.get("/aluno", alunoController.list);
router.get("/aluno/:id", alunoController.index);
router.put("/aluno/:id", alunoController.update);
router.delete("/aluno/:id", alunoController.delete);

router.get("/professor", professorController.list);
router.get("/professor/:id", professorController.index);
router.post("/professor", professorController.create);
router.put("/professor/:id", professorController.update);
router.delete("/professor/:id", professorController.delete);

router.get("/solicitacao", solicitacaoController.list);
router.get("/solicitacao/:id", solicitacaoController.index);
router.post("/solicitacao", solicitacaoController.create);
router.post("/solicitacao/assinar", professorController.assinar);
router.put("/solicitacao/:id", solicitacaoController.update);
router.delete("/solicitacao/:id", solicitacaoController.delete);

router.get("/disciplina", disciplinaController.list);
router.get("/disciplina/:id", disciplinaController.index);
router.post("/disciplina", disciplinaController.create);
router.put("/disciplina/:id", disciplinaController.update);
router.delete("/disciplina/:id", disciplinaController.delete);

export { router }