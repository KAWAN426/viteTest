import styled from "styled-components";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./pages/Home"
import { useEffect, useState } from "react";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
  height:100%;
  min-height:100vh;
  background-color: #DBE2EF;
`
const Content = styled.div`
  width:100%;
  min-height:calc(100vh - 54.67px - 50.64px - (132px / 2));
  height:100%;
  padding-bottom: 54.67px;
  display:flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Home/>
      </Content>
      <Nav />
    </Container>
  );
}

export default App;
