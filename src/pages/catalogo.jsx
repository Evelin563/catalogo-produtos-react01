import { useEffect, useState } from 'react'
import ProdutoCard from '../components/ProdutoCard'

import notebookImg from '../assets/produtos/notebook.jpg'
import mouseImg from '../assets/produtos/mouse.jpg'
import tecladoImg from '../assets/produtos/teclado.jpg'

function Catalogo() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  const [formulario, setFormulario] = useState({
    nome: '',
    preco: '',
    imagem: '',
    descricao: ''
  })

  useEffect(() => {
    const produtosMockados = [
      {
        id: 1,
        nome: 'Notebook Gamer',
        preco: '4500,00',
        imagem: notebookImg,
        descricao: 'Notebook potente para jogos, estudos e programação.'
      },
      {
        id: 2,
        nome: 'Mouse Sem Fio',
        preco: '89,90',
        imagem: mouseImg,
        descricao: 'Mouse ergonômico com conexão sem fio.'
      },
      {
        id: 3,
        nome: 'Teclado Mecânico',
        preco: '250,00',
        imagem: tecladoImg,
        descricao: 'Teclado mecânico com iluminação RGB.'
      }
    ]

    const tempo = setTimeout(() => {
      setProdutos(produtosMockados)
      setCarregando(false)
    }, 1500)

    return () => clearTimeout(tempo)
  }, [])

  function alterarFormulario(evento) {
    const { name, value } = evento.target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  function cadastrarProduto(evento) {
    evento.preventDefault()

    if (
      formulario.nome.trim() === '' ||
      formulario.preco.trim() === '' ||
      formulario.descricao.trim() === ''
    ) {
      alert('Preencha nome, preço e descrição.')
      return
    }

    const novoProduto = {
      id: Date.now(),
      nome: formulario.nome,
      preco: formulario.preco,
      imagem:
        formulario.imagem.trim() !== ''
          ? formulario.imagem
          : 'https://placehold.co/300x200/fbf5d1/637460?text=Produto',
      descricao: formulario.descricao
    }

    setProdutos([...produtos, novoProduto])

    setFormulario({
      nome: '',
      preco: '',
      imagem: '',
      descricao: ''
    })
  }

  return (
    <section className="catalogo">
      <div className="titulo-secao">
        <p>Produtos disponíveis</p>
        <h2>Vitrine principal</h2>
      </div>

      <form className="formulario" onSubmit={cadastrarProduto}>
        <h2>Cadastrar novo produto</h2>

        <div className="grupo-campos">
          <input
            type="text"
            name="nome"
            placeholder="Nome do produto"
            value={formulario.nome}
            onChange={alterarFormulario}
          />

          <input
            type="text"
            name="preco"
            placeholder="Preço"
            value={formulario.preco}
            onChange={alterarFormulario}
          />
        </div>

        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem"
          value={formulario.imagem}
          onChange={alterarFormulario}
        />

        <textarea
          name="descricao"
          placeholder="Descrição do produto"
          value={formulario.descricao}
          onChange={alterarFormulario}
        />

        <button type="submit">Adicionar produto</button>
      </form>

      {carregando ? (
        <p className="carregando">Carregando produtos...</p>
      ) : (
        <div className="lista-produtos">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              descricao={produto.descricao}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Catalogo