import React from "react";
import { PaginationContainer } from "./features/utils/pagination/PaginationContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./App.scss";

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <h1>BinderPOS Test</h1>
      </header>
      <main className="App-body">
        <PaginationContainer />
      </main>
    </Container>
  );
}

export default App;
