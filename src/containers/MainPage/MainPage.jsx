import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Proposal } from "../../components/Proposal";
import "./MainPage.sass";

const MainPage = () => (
  <Container>
    <Header />
    <Proposal />
  </Container>
);

export default MainPage;
