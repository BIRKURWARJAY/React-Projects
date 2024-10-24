import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("");

  const bgChanger = (e) => {
    let newColor = e.target.innerText;
    setBgColor(newColor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])
  
 

  return (
    <>
      <div className='parDiv'>
        <div className='btnDiv'>
          <button type="button" style={{color: "black", backgroundColor: "red"}} className='btn' clr="red" onClick={bgChanger}>
            red
          </button>
          <button type="button" style={{color: "black", backgroundColor: "blue"}} className='btn' clr="blue" onClick={bgChanger}>
            blue
          </button>
          <button type="button" style={{color: "black", backgroundColor: "green"}} className='btn' clr="green" onClick={bgChanger}>
            green
          </button>
          <button type="button" style={{color: "black", backgroundColor: "yellow"}} className='btn' clr="yellow" onClick={bgChanger}>
            yellow
          </button>
          <button type="button" style={{color: "white", backgroundColor: "black"}} className='btn' clr="black" onClick={bgChanger}>
            black
          </button>
          <button type="button" style={{color: "black", backgroundColor: "white"}} className='btn' clr="white" onClick={bgChanger}>
            White
          </button>
        </div>
      </div>
    </>
  )
}

export default App
