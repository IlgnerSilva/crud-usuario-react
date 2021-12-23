import React from "react";
import Main from "../templates/Main";

export default props =>
    <Main 
        icon="home"
        title="Início"
        subtitle="Projeto cadastro">
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema de cadastro de usuário em React</p>
    </Main>