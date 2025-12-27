import {useState} from 'react';
import Navbar from "./Components/Navbar"

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <> 
    <div> Theme is {theme} </div>
    <Navbar theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App