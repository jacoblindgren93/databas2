import { useState } from 'react'
import SideBar from './components/menu/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<SideBar/>
	   <p>Hej</p>
    </>
  )
}

export default App
