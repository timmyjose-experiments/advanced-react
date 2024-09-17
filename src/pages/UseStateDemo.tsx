import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseStateDemo = () => {
  const navigate = useNavigate()

  const [counter, setCounter] = useState<number>(0)

  return (
    <>
      <button onClick={() => navigate('/')}>
        Home
      </button>
    </>
  )
}

export default UseStateDemo
