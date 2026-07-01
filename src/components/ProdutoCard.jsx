import styled from "styled-components";

const ProdutoCardContainer = styled.article`
  background-color: rgba(255, 250, 246, 0.94);
  border-radius: 32px;
  overflow: hidden;
  box-shadow: var(--sombra);
  border: 2px solid var(--borda);
  transition: 0.25s;
  position: relative;

  &::before {
    content: "✦";
    position: absolute;
    top: 16px;
    right: 18px;
    z-index: 2;
    color: var(--rosa-forte);
    font-size: 24px;
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 22px 52px rgba(247, 160, 184, 0.35);
  }
`;

const ImagemContainer = styled.div`
  height: 205px;
  background: linear-gradient(135deg, var(--creme-quente), var(--rosa-suave));
  overflow: hidden;
  border-bottom: 7px solid var(--rosa-suave);
`;

const ProdutoImagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProdutoInfo = styled.div`
  padding: 24px;
`;

const NomeProduto = styled.h3`
  font-size: 23px;
  color: var(--texto);
  margin-bottom: 12px;
`;

const DescricaoProduto = styled.p`
  color: var(--texto-suave);
  margin-bottom: 19px;
  line-height: 1.5;
`;

const ProdutoRodape = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PrecoProduto = styled.strong`
  display: inline-block;
  width: fit-content;
  padding: 10px 16px;
  border-radius: 999px;
  background-color: var(--creme-quente);
  color: var(--texto);
  font-size: 19px;
  border: 2px solid rgba(247, 160, 184, 0.35);
`;

const BotaoCarrinho = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.25s;

  background-color: ${({ $adicionado }) =>
    $adicionado ? "#198754" : "#6c757d"};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

function ProdutoCard({
  nome,
  preco,
  imagem,
  descricao,
  adicionado = false,
  aoAlterarStatus,
}) {
  const precoFormatado = Number(preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <ProdutoCardContainer>
      <ImagemContainer>
        <ProdutoImagem src={imagem} alt={nome} />
      </ImagemContainer>

      <ProdutoInfo>
        <NomeProduto>{nome}</NomeProduto>

        <DescricaoProduto>{descricao}</DescricaoProduto>

        <ProdutoRodape>
          <PrecoProduto>{precoFormatado}</PrecoProduto>

          <BotaoCarrinho
            type="button"
            $adicionado={adicionado}
            onClick={aoAlterarStatus}
          >
            {adicionado ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
          </BotaoCarrinho>
        </ProdutoRodape>
      </ProdutoInfo>
    </ProdutoCardContainer>
  );
}

export default ProdutoCard;