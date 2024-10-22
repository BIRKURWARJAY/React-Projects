import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  let [pass, setPass] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const passRef = useRef(null);

  const copyBtn = useRef(null);

  const passGenerator = useCallback(() => {
    let charAcc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) charAcc += "0123456789";
    if (charAllowed) charAcc += "!@#$%^&*()_+|}{';:?/.><";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pass = "";

    for (let i = 0; i < length; i++) {
      pass += charAcc.charAt(Math.floor(Math.random() * charAcc.length));
    }
    setPass(pass)

  }, [numAllowed, charAllowed, length]);


  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
    copyBtn.current.innerText = "Copied";
  }, [pass])

  useEffect(() => {
    passGenerator();
    copyBtn.current.innerText = "Copy"
  }, [length, numAllowed, charAllowed, passGenerator]);

  return (
    <>
      <div className='parDiv'>
        <div className="inputDiv">
          <input type="text" value={pass} className='textInput' ref={passRef} readOnly/>
          <button type='button' className='copyBtn' onClick={ copyToClipboard  } ref={copyBtn}>Copy</button>
        </div>
        <div className='utilitiesDiv'>
          <div className='rangeDiv'>
            <input type="range" value={length} min={6} max={20} id='range' onChange={ (e) => { setLength(e.target.value) } } />
            <label htmlFor="range">Length {length}</label>
          </div>
          <div className='numDiv'>
            <input type="checkbox" id={"num"} onClick={() => setNumAllowed((prev) => !prev)} />
            <label htmlFor="num">numberAllowed</label>
          </div>
          <div className='charDiv'>
            <input type="checkbox" id={"char"} onClick={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="char">charAllowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
