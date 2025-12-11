import React from 'react'

function Input() {

   function inputChanging(value){
     console.log(value);
   }

    return (
        <input onChange={function(e){
          inputChanging(e.target.value)
        }} type="text" placeholder='value nikal na shik le' />
    )
}

export default Input
