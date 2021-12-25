import React, { Component } from "react";
import Main from "../templates/Main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários",
};

export default class UserCrud extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://api-pagamento-m4.herokuapp.com/pagamento`).then((res) => {
      const persons = res.data.Users;
      console.log(persons)
      this.setState({ persons });
    });
  }

  render() {
    return (
      <Main {...headerProps}>
        <ul>
          {this.state.persons.map((person) => (
            <li>{`ID:${person.ID} NUMERO CARTÃO: ${person.NUMERO} TITULAR: ${person.NOME_DO_TITULAR} VALIDADE:${person.VALIDADE}`}</li>
          ))}
        </ul>
      </Main>
    );
  }
}
