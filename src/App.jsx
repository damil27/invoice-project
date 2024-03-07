import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './Layout'
import Content from './components/Content'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Content />
    </Layout>
    </>
  )
}

export default App
