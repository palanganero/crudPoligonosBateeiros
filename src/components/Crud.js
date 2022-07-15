import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./AddBook";
import BooksList from "./BooksList";
import Home from './Home';
import RiasList from "./RiasList";
import RiasSelect from "./RiasSelect";
import "../Crud.css";



const Crud = () => {
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
    
    <Container>
      <Row>
        <Col>
        <Home/>
        </Col>
      </Row>
    </Container>
  
  </>
  );
}

export default Crud;