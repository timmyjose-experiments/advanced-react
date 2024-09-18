import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"
import { useMemo, useState } from "react"

const UseMemoDemo = () => {
  const navigate = useNavigate()

  const [counter, setCounter] = useState<number>(0)

  const expensiveCalculation = useMemo(() => {
    alert('Performing expensive calculation')
    return counter * 2
  }, [counter])

  return (
    <div style={globalStyles.container}>
      <p>Result of expensive calculation: {expensiveCalculation}</p>
      <button
        style={globalStyles.button}
        onClick={() => setCounter(prev => prev + 1)}>
          Increment
      </button>
      <button
        style={globalStyles.button}
        onClick={() => navigate('/')}>
          Home
      </button>
    </div>
  )
}

export default UseMemoDemo
