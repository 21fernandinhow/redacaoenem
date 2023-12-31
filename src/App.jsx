import { useState } from 'react'
import Data from './themes.json'
import './App.css'

function App() {

  const [theme, setTheme] = useState("Aqui aparecerá o tema de sua redação")

  return (
    <>
      <main>

        <h1>Gerador de temas de redação para o Enem</h1>
        <p>Clique em "Sortear tema" para ter um tema de redação.</p>
        <div id="theme-div">
          <span id="theme"><strong>Seu tema é: </strong>{theme}</span>
        </div>
        <button onClick={()=>setTheme(Data.themes[Math.floor(Math.random() * 90)])}>Sortear tema</button>
        <p>Desenvolvido com carinho por <a href="https://fernandocarvalhodev.com" target="_blank" rel="noopener noreferrer">Fernando Carvalho</a>.</p>

      </main>
    </>
  )
}

export default App
