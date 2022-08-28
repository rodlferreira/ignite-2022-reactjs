## abaixo para estudo do count

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App


//TODO para analisar e estudar //

# o próprio APP dentro do React é um componente, nada mais é do que uma função que retorna HTML
# JSX => javascript + XML 
# o "./" na importação serve para indicar que o arquivo está na mesma pasta;
# O uso do css.module serve para escopar uma estilizaçao

# 
// Componentização, visa desacoplar um pedaço da interface que pode
// ser repetida várias vezes, inclusive com informações diferentes, 
// isso tbm torna mais fácil de dar manutenção no código.

//componente, nada mais é do que uma funcção que retorna um HTML
//A componentização permite a reutilização de trechos do código, reaproveitando toda a estilização e estrutura criada



//Named exports <Não usa o export default, fazendo com que o código não seja executado se o nome estiver escrito errado>
# 