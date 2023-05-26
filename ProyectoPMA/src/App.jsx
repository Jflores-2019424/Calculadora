import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const ops = ['+','-','*','/','%','√','.']

  const actCalc = value => {
    if(
      ops.includes(value) && input === '' ||
      ops.includes(value) && ops.includes(input.slice(-1))
    ){
      return
    }
      setInput(input + value);

      if(!ops.includes(value)){
        setResult(eval(input + value).toString());
      }
  }

console.log(input)

  const calcular = () =>{
    setInput(eval(input).toString());
  }
  
  const borrar = () =>{
      if (input == ''){
        return;
      }

      const value = input.slice(0, -1);

      setInput(value)
  }

  const Raiz = value => {
      setInput(Math.sqrt(input))
  }

  const createDigits = () =>{
    const digits = [];

    for (let i=1;i<10;i++){
      digits.push(
        <button  onClick={() => actCalc(i.toString()
          )}
        key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className='position-absolute top-50 start-50 translate-middle px-9'>
      <div className='border border-black p-5 m-2'>
        <div className='border border-black px-1'>
          {input || "0"}
        </div>
        <div>
          <button onClick={() => actCalc("/")}>/</button>
          <button onClick={() => actCalc("*")}>*</button>
          <button onClick={() => actCalc("-")}>-</button>
          <button onClick={() => actCalc("+")}>+</button>
          <button onClick={() => Raiz("√")}>√</button>

          <button onClick={borrar}>C</button>
        </div>

        <div className='container'>
          {createDigits()}
          <button onClick={() => actCalc("0")}>0</button>
          <button onClick={() => actCalc(".")}>.</button>
          <button onClick={calcular}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
