import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Form } from "../Form";
import "./MainPage.sass";

const MainPage = () => (
  <Container>
    <Header />
    <Form />
  </Container>
);

export default MainPage;
