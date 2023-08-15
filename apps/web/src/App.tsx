import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "ui"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl'>Web</h1>
      <Button>Boop</Button>
    </>
  )
}

export default App
