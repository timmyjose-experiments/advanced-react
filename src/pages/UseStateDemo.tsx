import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalStyles } from '../globalStyles'

const UseStateDemo = () => {
  const navigate = useNavigate()

  const [counter, setCounter] = useState<number>(0)

  return (
    <div style={globalStyles.container}>
      <p>Current Counter: {counter}</p>
      <div style={{ flexDirection: 'row' as 'row'}}>
        <button
          style={globalStyles.button}
          onClick={() => setCounter(prev => prev + 1)}>
          Increment
        </button>
        <button
          style={globalStyles.button}
          onClick={() => setCounter(0)}>
            Reset
        </button>
        <button
          style={globalStyles.button}
          onClick={() => setCounter(prev => prev - 1)}>
            Decrement
        </button>
      </div>
      <button 
        style={globalStyles.button} 
        onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  )
}

export default UseStateDemo
