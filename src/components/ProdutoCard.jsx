function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="produto-card">
      <div className="imagem-container">
        <img src={imagem} alt={nome} className="produto-imagem" />
      </div>

      <div className="produto-info">
        <h3>{nome}</h3>
        <p>{descricao}</p>

        <div className="produto-rodape">
          <strong>R$ {preco}</strong>
        </div>
      </div>
    </article>
  )
}

export default ProdutoCard