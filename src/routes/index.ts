import { Router } from "express";
import { AlunoController } from "../controller/alunoController";

const router = Router();

const alunoController = new AlunoController();

router.post("/aluno", alunoController.createAluno);

export { router }