import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"
import { useCallback, useEffect, useState } from "react"
import React from "react"

type CalculatorProps = {
  onAdd: () => Promise<number>
  onSub: () => Promise<number>
  onMul: () => Promise<number>
  onDiv: () => Promise<number>
}

const Calculator = React.memo(({ onAdd, onSub, onMul, onDiv}: CalculatorProps) => {
  const [sum, setSum] = useState<number>(0)
  const [difference, setDifference] = useState<number>(0)
  const [product, setProduct] = useState<number>(0)
  const [quotient, setQuotient] = useState<number>(0)

  useEffect(() => {
    (async () => {
    const [ sum, difference, product, quotient ] = await Promise.all([
      onAdd(),
      onSub(),
      onMul(),
      onDiv()
    ])

    setSum(sum)
    setDifference(difference)
    setProduct(product)
    setQuotient(quotient)
    })()
  }, [onAdd, onSub, onMul, onDiv])

  return (
    <div>
      <p>Sum: {sum}</p>
      <p>Difference: {difference}</p>
      <p>Product: {product}</p>
      <p>Quotient: {quotient}</p>
    </div>
  )
})

const UseCallbackDemo = () => {
  const navigate = useNavigate()

  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)

  const handleAdd = useCallback(async () => {
    return x + y
  }, [x, y])

  const handleSub = useCallback(async () => {
    return x - y
  }, [x, y])

  const handleMul = useCallback(async () => {
    return x * y
  }, [x, y])

  const handleDiv = useCallback(async () => {
    if (y === 0) {
      return 0
    }
    return x / y
  }, [x, y])

  return (
    <div style={globalStyles.container}>
      <Calculator 
        onAdd={handleAdd} 
        onSub={handleSub}
        onMul={handleMul}
        onDiv={handleDiv} />
      <input
        type='number'
        value={x} 
        onChange={evt => setX(parseFloat(evt.target.value))} />
      <input
        type='number'
        value={y} 
        onChange={evt => setY(parseFloat(evt.target.value))} />
      <button
        style={globalStyles.button}
        onClick={() => navigate('/')}>
          Home
      </button>
    </div>
  )
}

export default UseCallbackDemo
