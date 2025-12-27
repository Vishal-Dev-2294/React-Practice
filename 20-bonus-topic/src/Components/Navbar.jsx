import React from 'react'

const Navbar = (props) => {
  function themeDark() {
    props.setTheme('Dark')
  }
  function themeLight() {
    props.setTheme('Light')
  }
  return (
    <button onClick={themeDark} onDoubleClick={themeLight} > Change Theme </button>
  )
}

export default Navbar