import styled, { createGlobalStyle } from "styled-components";
import Catalogo from "./pages/catalogo";

const GlobalStyle = createGlobalStyle`
  :root {
    --rosa-forte: #f7a0b8;
    --creme-claro: #faf5ec;
    --creme-quente: #fae9d7;
    --rosa-suave: #fbb6c4;

    --texto: #5f3f4b;
    --texto-suave: #9b6b78;
    --branco: #fffaf6;

    --sombra: 0 18px 45px rgba(247, 160, 184, 0.28);
    --borda: rgba(247, 160, 184, 0.35);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    color: var(--texto);
    background:
      radial-gradient(circle at 15% 10%, rgba(255, 255, 255, 0.95) 0 3%, transparent 10%),
      radial-gradient(circle at 85% 20%, rgba(251, 182, 196, 0.65), transparent 25%),
      radial-gradient(circle at 20% 85%, rgba(250, 233, 215, 0.9), transparent 35%),
      radial-gradient(circle at 70% 90%, rgba(247, 160, 184, 0.45), transparent 30%),
      linear-gradient(135deg, var(--creme-claro), var(--rosa-suave));
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }
`;

const AppContainer = styled.main`
  min-height: 100vh;
  padding: 42px 20px;

  @media (max-width: 700px) {
    padding: 26px 14px;
  }
`;

const Cabecalho = styled.header`
  max-width: 1120px;
  margin: 0 auto 42px;
  padding: 58px 28px;
  text-align: center;
  background: rgba(250, 245, 236, 0.88);
  border: 2px solid var(--borda);
  border-radius: 36px;
  box-shadow: var(--sombra);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);

  &::before {
    content: "♡";
    position: absolute;
    top: 24px;
    right: 42px;
    font-size: 54px;
    color: var(--rosa-forte);
    opacity: 0.5;
  }

  &::after {
    content: "✦";
    position: absolute;
    left: 55px;
    bottom: 34px;
    font-size: 42px;
    color: var(--rosa-suave);
    opacity: 0.7;
  }

  @media (max-width: 700px) {
    padding: 42px 20px;
  }
`;

const DecoracaoUm = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  border-radius: 999px;
  background-color: var(--rosa-forte);
  top: -85px;
  left: -65px;
  opacity: 0.55;
  filter: blur(1px);
`;

const DecoracaoDois = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 999px;
  background-color: var(--creme-quente);
  bottom: -105px;
  right: -80px;
  opacity: 0.55;
  filter: blur(1px);
`;

const Etiqueta = styled.p`
  position: relative;
  display: inline-block;
  padding: 9px 18px;
  margin-bottom: 18px;
  border-radius: 999px;
  background-color: var(--rosa-suave);
  color: var(--texto);
  font-weight: bold;
  letter-spacing: 1px;
`;

const TituloPrincipal = styled.h1`
  position: relative;
  font-size: 52px;
  color: var(--texto);
  margin-bottom: 14px;

  @media (max-width: 700px) {
    font-size: 36px;
  }
`;

const Subtitulo = styled.p`
  position: relative;
  max-width: 690px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
  color: var(--texto-suave);

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <AppContainer>
        <Cabecalho>
          <DecoracaoUm />
          <DecoracaoDois />

          <Etiqueta>React + Vite</Etiqueta>

          <TituloPrincipal>Catálogo de Produtos</TituloPrincipal>

          <Subtitulo>
            
          </Subtitulo>
        </Cabecalho>

        <Catalogo />
      </AppContainer>
    </>
  );
}

export default App;