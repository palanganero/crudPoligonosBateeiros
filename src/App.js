import { Container, Row, Navbar,Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import { useState } from "react";
//import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
//import "./App.css";

function App() {

  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
    <>
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
      </Container>
    </Navbar>

    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <AddBook id={bookId} setBookId={setBookId} />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <BooksList getBookId={getBookIdHandler} />
        </Col>
      </Row>
    </Container>
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  </>
    
  );
}

export default App;
