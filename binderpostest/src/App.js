import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { PaginationContainer } from "./features/utils/pagination/PaginationContainer";
import { CardMoreInfo } from "./features/cards/CardMoreInfo";

import "./App.scss";

function App() {
  return (
    <Router>
      <Container className="App">
        <header className="App-header">
          <h1>BinderPOS Test</h1>
        </header>
        <main className="App-body">
          <Switch>
            <Route path="/:set/:collectornumber" children={<CardMoreInfo />} />
            <Route path="/">
              <PaginationContainer />
            </Route>
          </Switch>
        </main>
      </Container>
    </Router>
  );
}

export default App;
