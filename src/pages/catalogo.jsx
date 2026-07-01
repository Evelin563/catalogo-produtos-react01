import { useEffect, useState } from "react";
import styled from "styled-components";
import ProdutoCard from "../components/ProdutoCard";

import notebookImg from "../assets/produtos/notebook.jpg";
import mouseImg from "../assets/produtos/mouse.jpg";
import tecladoImg from "../assets/produtos/teclado.jpg";

const CatalogoContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
`;

const TituloSecao = styled.div`
  text-align: center;
  margin-bottom: 30px;

  p {
    color: var(--rosa-forte);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 34px;
    color: var(--texto);
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 28px;
    }
  }
`;

const MensagemCarregando = styled.p`
  text-align: center;
  font-size: 21px;
  color: var(--texto);
  padding: 34px;
  background-color: rgba(255, 250, 246, 0.86);
  border: 2px solid var(--borda);
  border-radius: 28px;
  box-shadow: var(--sombra);
`;

const ListaProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
`;

function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const produtosIniciais = [
      {
        id: 1,
        nome: "Notebook Gamer",
        preco: 4299.9,
        imagem: notebookImg,
        descricao: "Notebook potente para estudos, trabalho e desenvolvimento.",
        adicionado: false,
      },
      {
        id: 2,
        nome: "Mouse Sem Fio",
        preco: 89.9,
        imagem: mouseImg,
        descricao: "Mouse ergonômico com conexão sem fio e alta precisão.",
        adicionado: false,
      },
      {
        id: 3,
        nome: "Teclado Mecânico",
        preco: 249.9,
        imagem: tecladoImg,
        descricao: "Teclado mecânico com iluminação e ótima resposta.",
        adicionado: false,
      },
    ];

    const timer = setTimeout(() => {
      setProdutos(produtosIniciais);
      setCarregando(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  function alterarStatusCarrinho(idProduto) {
    setProdutos((produtosAtuais) =>
      produtosAtuais.map((produto) =>
        produto.id === idProduto
          ? { ...produto, adicionado: !produto.adicionado }
          : produto
      )
    );
  }

  return (
    <CatalogoContainer>
      <TituloSecao>
        <p>Produtos disponíveis</p>
        <h2>Escolha seu produto</h2>
      </TituloSecao>

      {carregando ? (
        <MensagemCarregando>Carregando produtos...</MensagemCarregando>
      ) : (
        <ListaProdutos>
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              descricao={produto.descricao}
              adicionado={produto.adicionado}
              aoAlterarStatus={() => alterarStatusCarrinho(produto.id)}
            />
          ))}
        </ListaProdutos>
      )}
    </CatalogoContainer>
  );
}

export default Catalogo;