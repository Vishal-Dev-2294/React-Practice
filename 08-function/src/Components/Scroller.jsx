import React from 'react'

function Scroller() {

    function pageScrolling(value) {
      if(value>0) { 
        console.log("siddha scrolling")
    } else{
        console.log("Ulta scrolling")
    }
    }

    return (
        <div onWheel={function(e){
          pageScrolling(e.deltaY)
        }}> 
            <div className="page1"></div>
            <div className="page2"></div>
            <div className="page3"></div>
        </div>
    )
}

export default Scroller
