import React, { Component } from "react";
import ListarSpoiler from "./components/spoilers/ListarSpoiler";
import CriarSpoiler from "./components/spoilers/CriarSpoiler";
import EditarSpoiler from "./components/spoilers/EditarSpoiler";
import ConfirmarRemoverSpoiler from "./components/spoilers/ConfirmarRemoverSpoiler";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Jumbotron from 'react-bootstrap/Jumbotron'

class App extends Component {
  render() {
    const path = "react-spoiler-app"

    return (
      <BrowserRouter>
        <div>
          <Jumbotron fluid>
            <div className="container">
              <Link to={`/${path}/`}>
                <h1 className="display-4">#spoilers</h1>
              </Link>
              <p className="lead">
                Não se preocupe, tudo aqui é brincadeira. Ou não :)
              </p>
              <Link to={`/${path}/criar`} className="btn btn-primary">
                Criar
              </Link>
            </div>
          </Jumbotron>
          <div className="container">
            <div className="row justify-content-md-center">
              <main className="col-10" role="main">
                {/* <Route path="/react-spoiler-app/" component={ListarSpoiler} /> */}
                <Route path={`/${path}/`} exact component={ListarSpoiler} />
                <Route path={`/${path}/criar/`} component={CriarSpoiler} />
                <Route path={`/${path}/editar/:id`} component={EditarSpoiler} />
                <Route path={`/${path}/remover/:id`} component={ConfirmarRemoverSpoiler}/>
              </main>
            </div>
          </div>

            <div className="container mt-5 mb-0">
              <p className="lead">
               endpage
              </p>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;