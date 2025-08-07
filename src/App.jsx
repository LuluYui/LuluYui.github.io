import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Content() {
  
  return (
    <>
     <p class="bg-mint-500"> 哈囉 ! I am Chris </p>
     <p class=""> A passionate Software Developer based in Hong Kong. <br />I am experienced in building Web and Mobile Applications with Java/TypeScript \
      / ReactJS / NodeJS / React Native and any libraries or tools required for getting things done ! </p>
      <p> Available for freelance & collaborations. </p>
    </>
  );
  
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Content />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React </h1>
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
    </>
  )
}

export default App
