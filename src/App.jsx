import Catalogo from './pages/catalogo'

function App() {
  return (
    <main className="app">
      <header className="cabecalho">
        <div className="decoracao decoracao-um"></div>
        <div className="decoracao decoracao-dois"></div>

        <p className="etiqueta">React + Vite</p>
        <h1>Catálogo de Produtos</h1>
        <p className="subtitulo">
          Uma vitrine construída com componentes reutilizáveis.
        </p>
      </header>

      <Catalogo />
    </main>
  )
}

export default App