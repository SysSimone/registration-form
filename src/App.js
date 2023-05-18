import React, { Component} from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import '@fontsource/roboto';


import {Container, Typography} from '@mui/material';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro </Typography>
        <FormularioCadastro  aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
        </Container>
        );
  }   
}  

//essa função vai 
function aoEnviarForm(dados){
  console.log(dados);
} 
function validarCPF(cpf){
  if(confirm.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
