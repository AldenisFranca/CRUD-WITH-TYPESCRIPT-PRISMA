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

export type Curso = {
  id?: number
  descricao: string
  instituicao: string
  periodo: string
}

export type Endereco = {
  id?: number
  logradouro: string
  complemento: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  cep: string
}