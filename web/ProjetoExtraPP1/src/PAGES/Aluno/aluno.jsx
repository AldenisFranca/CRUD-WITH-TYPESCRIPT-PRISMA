import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { toast } from "react-toastify";
import * as s from "./stylealuno";

import { useNavigate } from "react-router-dom";
import Logo from "./../../img/Logo.png";

export default function Aluno() {
  const navigate = useNavigate()
  const notify = (mensagem, tipo) => toast(mensagem, { type: tipo });

  const { setValue, getValues, register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (!data.dataNascimento.includes('T')) {
      setValue('dataNascimento', data.dataNascimento + 'T00:00:00.000Z');
    }

    axios.post('http://localhost:3001/api/aluno', data)
      .then(resp => {
        if (resp.status === 201) {
          notify('Aluno cadastrado com sucesso', 'success');
          navigate('/alunos')
        }
      })
      .catch(e => {
        console.log('e', e)
        notify('Erro ao cadastrar aluno', 'error');
      })
  }

  async function handleChangeCep(event) {
    let cep = event.target.value.replace(/[^0-9]/g, '');
    if (cep.length <= 7) return;

    try {
      let respCorreio = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);

      if (respCorreio.status === 200) {
        const data = respCorreio.data;
        setValue('cep', data.cep)
        setValue('logradouro', data.street)
        setValue('cidade', data.city)
        setValue('bairro', data.neighborhood)
        setValue('estado', data.state)
      } else {
        notify('CEP não encontrado', 'error');
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  return (
    <s.Geral>
      <s.Pagina>
        <img src={Logo} />

        <h1>ALUNO</h1>
        <s.Box onSubmit={handleSubmit(onSubmit)}>
          <s.BoxForm>
            <s.InputBox>
              <h2>Nome:</h2>
              <input defaultValue={getValues('nome')} {...register('nome')} className="gravar_ apagar_" id="nome" />
            </s.InputBox>
            <s.InputBox>
              <h2>Data de Nascimento:</h2>
              <input
                className="gravar_ apagar_"
                title="Data Nascimento:"
                type="date"
                id="dataNasc"
                {...register('dataNascimento')}
              />
            </s.InputBox>
            <s.InputBox>
              <h2>CPF:</h2>
              <InputMask
                mask="999.999.999-99" defaultValue={getValues('cpf')} {...register('cpf')} className="gravar_ apagar_" title="CPF:" id="cpf" />
            </s.InputBox>

            <s.InputBox>
              <h2>Sexo:</h2>
              <s.InputRadio>
                <div>
                  <input type="radio" id="masculino" defaultChecked={getValues('sexo')} {...register('sexo')} value="M" />
                  <label for="masculino">Masculino</label>
                </div>
                <div>
                  <input type="radio" id="feminino" defaultChecked={getValues('sexo')} {...register('sexo')} value="F" />
                  <label for="feminino">Feminino</label>
                </div>
                <div>
                  <input type="radio" id="outro" defaultChecked={getValues('sexo')} {...register('sexo')} value="Outro" />
                  <label for="outro">Outro</label>
                </div>
              </s.InputRadio>
            </s.InputBox>

          </s.BoxForm>

          <s.BoxForm>
            <h3>CONTATOS</h3>
            <s.InputBox>
              <h2>E-mail:</h2>
              <input defaultValue={getValues('email')} {...register('email')} className="gravar_ apagar_" id="email" />
            </s.InputBox>
            <s.InputBox>
              <h2>Telefone:</h2>
              <InputMask
                mask="(99) 9999 9999" defaultValue={getValues('telefone')} {...register('telefone')} className="gravar_ apagar_" id="telefone" />
            </s.InputBox>
            <s.InputBox>
              <h2>Celular:</h2>
              <InputMask
                mask="(99) 9 9999 9999" defaultValue={getValues('celular')} {...register('celular')} className="gravar_ apagar_" type="text" id="celular" />
            </s.InputBox>
          </s.BoxForm>

          <s.BoxForm>
            <h3>INFORMAÇÃO</h3>
            <s.InputBox>
              <h2>Curso:</h2>
              <input defaultValue={getValues('descricao')} {...register('descricao')} className="gravar_ apagar_" id="curso" />
            </s.InputBox>
            <s.InputBox>
              <h2>Instituição de Ensino:</h2>
              <input defaultValue={getValues('instituicao')} {...register('instituicao')} className="gravar_ apagar_" id="instituicao" />
            </s.InputBox>
            <s.InputBox>
              <h2>Período:</h2>
              <input defaultValue={getValues('periodo')} {...register('periodo')} className="gravar_ apagar_" type="text" id="periodo" />
            </s.InputBox>
          </s.BoxForm>

          <s.BoxForm>
            <h3>ENDEREÇO</h3>
            <s.InputBox>
              <h2>CEP:</h2>
              <InputMask
                mask="99999-999"
                className="gravar_ apagar_ cep_"
                title="cep"
                id="cep"
                onChange={(e) => handleChangeCep(e)}
                defaultValue={getValues('cep')}
              />
            </s.InputBox>
            <s.InputBox>
              <h2>Logradouro:</h2>
              <input
                className="gravar_ apagar_"
                title="logradouro:"
                id="logradouro"
                defaultValue={getValues('logradouro')}
                {...register('logradouro')}
              />
            </s.InputBox>
            <s.InputBox>
              <h2>Número:</h2>
              <input defaultValue={getValues('numero')} {...register('numero')} className="gravar_ apagar_" title="numero:" id="numero" />
            </s.InputBox>
            <s.InputBox>
              <h2>Complemento:</h2>
              <input defaultValue={getValues('complemento')} {...register('complemento')} className="gravar_ apagar_" id="complemento" />
            </s.InputBox>
            <s.InputBox>
              <h2>Bairro:</h2>
              <input defaultValue={getValues('bairro')}  {...register('bairro')} className="gravar_ apagar_" title="bairro:" id="bairro" />
            </s.InputBox>
            <s.InputBox>
              <h2>Cidade:</h2>
              <input defaultValue={getValues('cidade')}  {...register('cidade')} className="gravar_ apagar_" title="cidade:" id="cidade" />
            </s.InputBox>
            <s.InputBox>
              <h2>UF:</h2>
              <input defaultValue={getValues('estado')}  {...register('estado')} className="gravar_ apagar_" title="uf:" id="uf" />
            </s.InputBox>
          </s.BoxForm>
          <s.BotaoDiv type="submit"><h2>Salvar</h2></s.BotaoDiv>
          <s.BotaoDiv type="reset"><h2>Novo</h2></s.BotaoDiv>
          <s.BotaoDiv type="reset" onClick={() => navigate(-1)}><h2>Voltar</h2></s.BotaoDiv>
        </s.Box>
      </s.Pagina>
    </s.Geral>
  );
}
