import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    function changeTheme () {
       setTheme('Dark')
    }

    function changeThemee () {
       setTheme('Light')
    }
  return (
    <button onClick={changeTheme} onDoubleClick={changeThemee}>
        Change {theme}
    </button>
  )
}

export default Button