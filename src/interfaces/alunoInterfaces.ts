export type Aluno = {
  id?: number
  nome: string
  dataNascimento: Date
  cpf: string
  email: string
  celular: string
  telefone: string
  sexo: string
}

export type TProfessor = {
  nome: string
  dataNascimento: Date
  cpf: string
  email: string
  celular: string
  telefone: string
  sexo: string
  enderecoId: number
}

export type AlunoCompleto = {
  aluno: Aluno & {
    endereco: TEndereco;
    Curso: Curso | null;
  }
}

export type Curso = {
  id?: number
  descricao: string
  instituicao: string
  periodo: string
}

export type TEndereco = {
  logradouro: string
  complemento: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  cep: string
}

export type TQualificacao = {
  formacao: string
  especializacao: string
  professorId: number
}

export type TSolicitacao = {
  data: Date
  status: string
  horarioAgendado: Date
  assunto: string
  alunoId: number
  professorId: number | null
  disciplinaId: number
}
