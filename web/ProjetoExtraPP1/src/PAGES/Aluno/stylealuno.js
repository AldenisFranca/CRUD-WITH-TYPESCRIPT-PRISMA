import styled from "styled-components";

export const Geral = styled.div`
  width: 100%;
  heigth: 100%;
  padding: 4px;
`;

export const Pagina = styled.div`
  width: 100%;
  heigth: auto;
`;

export const Box = styled.form`
  width: 100%;
  height: 100%;
  display: block;
  margin: 4px;
  background-repeat: no-repeat;
  padding: 10px 14px;
`;

export const InputRadio = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputBox = styled.div`
  width: 250px
  display: flex;
  flex-direction: column;
  margin: 2px;
  padding: 2px;

  h2{
    padding: 0px;
    margin: 0px;
    font-size: 10px
    text-align: left;    
  }
  input{
    width: 100%
  }

`;

export const BoxForm = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-self: center;
align-items: center;
text-align: left;
margin: 4px;
padding: 4px;
`;

export const BotaoDiv = styled.button`
  width: 250px;
  height: auto;
  background-color: #000;
  border: 1px solid #fff;
  cursor: point;
  border-radius: 10px;
  margin: 4px;
  padding: 6px 4px;

  h2 {
    color: #fff;
  }

  :hover {
    background-color: #f00;
  }
`;
