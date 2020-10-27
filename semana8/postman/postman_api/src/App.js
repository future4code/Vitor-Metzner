import React from "react";
import SignUpPage from "./components/SignUpPage";
import UsersListPage from "./components/UsersListPage";

class App extends React.Component {
  state = {
    currentPage: "signUp", //o estado começa em signUpPage, ou seja, começa na página de de cadastro do usuários
  };
  changePage = () => {
    if (this.state.currentPage === "signUp") {
      //ao clicar o botão "trocar página", se estiver no estato "signUp" muda para o estado userList, logo muda para a página de lista de usuários
      this.setState({ currentPage: "usersList" });
    } else {
      //se ao clicar no botão trocar de usuário estiver no estado userListPage, muda para o estado signUp, mudando a página para signUpPage
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    //aqui somente o botão de trocar de página e a renderização condicional que vai chamar os componentes das páginas

    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        <div>
          {this.state.currentPage === "signUp" ? (
            <SignUpPage></SignUpPage>
          ) : (
            <UsersListPage></UsersListPage>
          )}
        </div>
      </div>
    );
  }
}

export default App;
