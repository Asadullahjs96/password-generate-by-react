import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';



function App() {
  const [password, setPassword] = useState('');
  const [length, setLenght] = useState(8);
  const [uperCase, setuperCase] = useState(false);
  const [lowerCase, setlowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  useEffect(() => {
    generatPassword()
  }, [number, symbol, length, uperCase, lowerCase])

  function copyText() {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopyMessageVisible(true);
        setTimeout(() => {
          setCopyMessageVisible(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };


  function includeNumber(e) {
    setNumber(e.target.checked);
  }
  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }
  function includeuperCase(e) {
    setuperCase(e.target.checked);
  }
  function includelowerCase(e) {
    setlowerCase(e.target.checked);
  }

  function generatPassword() {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyz'
    if (number) {
      str += '1234567890'
    }
    if (symbol) {
      str += '/*-+{}[]=_()&^%$#@!~`?><,.;'
    }
    if (uperCase) {
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let char = str.charAt(randomNumber);
      pass += char;
    }
    setPassword(pass);
  }

  return (

    <>
      <div className="text-center text-3xl font-bold mb-12 mt-12">
        <p className="text-[#0ef]">
          <span className="text-black">Password</span>Generator
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-5/6 md:w-5/6 lg:w-1/2 py-8 px-12 shadow-2xl mx-auto bg-white rounded-t-3xl border-b-8 border-green-600">
        <div>
          <h2 className="text-2xl font-semibold font-sans text-[#0075ff] break-before-column">{password}</h2>
        </div>
        <div className="flex items-center justify-center gap-10 mt-4 md:mt-0">
          <button onClick={copyText} className="relative">
            {copyMessageVisible ? (
              <p className="font-medium text-lg"><i class="fa-solid fa-copy"></i>
                Copied<span className="font-extrabold text-xl">!</span>
              </p>
            ) : (
              <i className="far fa-copy text-3xl"></i>
            )}
          </button>
          <button onClick={generatPassword}>
            <i className="fas fa-redo-alt text-3xl"></i>
          </button>
        </div>
      </div>

      <div className="bg-white w-5/6 md:w-5/6 lg:w-1/2 rounded-3xl mx-auto shadow-2xl mt-8">
        <div className="flex items-center">
          <p className="bg-white text-xl font-extrabold py-4 pl-12 rounded-t-3xl">Customize your password</p>
        </div>
        <hr className="border-b-2 w-5/6 md:w-5/6 mx-auto" />

        <div className="bg-white flex flex-col md:flex-row items-center justify-between py-2 px-2 rounded-b-3xl">
          <div className="p-6">
            <p className="pb-4 text-lg font-semibold">Password Length</p>
            <label htmlFor="length" className="border border-gray-400 px-4 mr-4 py-1 rounded-md text-xl font-bold">{length}</label>
            <input type="range" id="length" min={6} max={15} onChange={(e) => setLenght(e.target.value)} value={length} />
          </div>

          <div className="flex flex-col md:flex-col mt-4 md:mt-0">
            <div className="mr-6">
              <input className="mr-2" type="checkbox" id="number" onChange={includeuperCase} />
              <label htmlFor="number" className="text-md font-semibold pb-1">Uppercase</label>
            </div>
            <div className="mr-6">
              <input className="mr-2" type="checkbox" id="number" onChange={includelowerCase} />
              <label htmlFor="number" className="text-md font-semibold pb-1">Lowercase</label>
            </div>
            <div className="mr-6">
              <input className="mr-2" type="checkbox" id="number" onChange={includeNumber} />
              <label htmlFor="number" className="text-md font-semibold pb-1">Number</label>
            </div>
            <div>
              <input className="mr-2" type="checkbox" id="symbol" onChange={includeSymbol} />
              <label htmlFor="symbol" className="text-md font-semibold pb-1">Symbols</label>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}

      <div class="text-center text-xs w-full sm:w-full sm:bg-[#a3f1f7] sm:text-lg  mx-auto sm:p-4 p-4 font-mono font-medium tracking-tight fixed bottom-0">
        <p class="developed-text">Developed with love by <span class='text-[#318187] font-sans'>Asad Ullah</span> @2023</p>
      </div>


    </>

  )
}

export default App;