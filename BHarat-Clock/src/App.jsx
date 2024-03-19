import { useState } from 'react'

import Heading from './components/Heading.jsx'
import Use from './components/Uses.jsx'
import Time from './components/Time.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center>
      <Heading/>
      <Use/>
      <Time/>
    </center>
  )
}

export default App
