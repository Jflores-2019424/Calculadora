import { useState } from 'react'
import './App.css'

function App() {
  const [operation, setOperation] = useState([])
  const [input, setInput] = useState([])

  console.log(operation)

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <div className='border border-black p-2 m-2'>
        <div className='border border-black px-1'>
          <label className='px-10' htmlFor="floatingInputValue" placeholder='0'>{input}</label>
        </div>
        <div>
          <button name='%' onClick={() => setInput((input) => (`${input}%`))}> % </button>
          <button name='√' onClick={() => setInput((input) => (`${input}√`))}> √ </button>
          <button name='/' onClick={() => setInput((input) => (`${input}/`))}> / </button>
          <button name='*' onClick={() => setInput((input) => (`${input}*`))}> * </button>
        </div>
        <div className="">
          <button name='7' value={7} onClick={() => setInput((input) => (`${input}7`))}> 7 </button>
          <button name='8' value={8} onClick={() => setInput((input) => (`${input}8`))}> 8 </button>
          <button name='9' value={9} onClick={() => setInput((input) => (`${input}9`))}> 9 </button>
        </div>
        <div className="">
          <button name='4' value={4} onClick={() => setInput((input) => (`${input}4`))}> 4 </button>
          <button name='5' value={5} onClick={() => setInput((input) => (`${input}5`))}> 5 </button>
          <button name='6' value={6} onClick={() => setInput((input) => (`${input}6`))}> 6 </button>
          <button name='-' onClick={() => setInput((input) => (`${input}-`))}> - </button>
        </div>
        <div>
          <button name='1' value={1} onClick={() => setInput((input) => (`${input}1`))}> 1 </button>
          <button name='2' value={2} onClick={() => setInput((input) => (`${input}2`))}> 2 </button>
          <button name='3' value={3} onClick={() => setInput((input) => (`${input}3`))}> 3 </button>
          <button name='+' onClick={() => setInput((input) => (`${input}+`))}> + </button> 
        </div>
        <div>
          <button name='C' onClick={() => setInput((input) => (``))}> C </button>
          <button name='0' value={0} onClick={() => setInput((input) => (`${input}0`))}> 0 </button>
          <button name='.' value={0.0} onClick={() => setInput((input) => (`${input}.`))}> . </button>
          <button name='=' onClick={() => setOperation((operation) => (input))}> = </button>
        </div>
      </div>
    </div>
  )
}

export default App
