import React, { useState } from 'react'
import './Calculator.css'
import { evaluate } from 'mathjs'

const Calculator = () => {
  // State to store the current input
  const [input, setInput] = useState('')

  // Function to handle button clicks and update the input
  const handleButtonClick = (value) => {
    setInput((prev) => prev + value)
  }

  // Function to clear the input
  const handleClear = () => {
    setInput('')
  }

  // Function to evaluate the mathematical expression
  const handleEvaluate = () => {
    try {
      // Use math.js to evaluate the expression, replacing percentage signs with appropriate division
      const result = evaluate(input.replace(/%/g, '/100'))
      setInput(result.toString())
    } catch (error) {
      setInput('Error')
    }
  }

  // Function to toggle the sign of the current input
  const handleToggleSign = () => {
    setInput((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev))
  }

  return (
    <div className='calculator'>
      {/* Display the current input */}
      <div className='display'>{input || '0'}</div>
      <div className='buttons'>
        <button className='btn gray' onClick={handleClear}>
          AC
        </button>
        <button className='btn gray' onClick={handleToggleSign}>
          +/-
        </button>
        <button className='btn gray' onClick={() => handleButtonClick('%')}>
          %
        </button>
        <button className='btn orange' onClick={() => handleButtonClick('/')}>
          ÷
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className='btn orange' onClick={() => handleButtonClick('*')}>
          ×
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className='btn orange' onClick={() => handleButtonClick('-')}>
          −
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className='btn orange' onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button
          className='btn dark span-two'
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button className='btn dark' onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button className='btn orange' onClick={handleEvaluate}>
          =
        </button>
      </div>
    </div>
  )
}

export default Calculator
