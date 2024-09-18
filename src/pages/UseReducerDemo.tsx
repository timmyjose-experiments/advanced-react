import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"
import { Reducer, useReducer } from "react"

type CounterState =  {
  value: number
}

const initialCounterState: CounterState = {
  value: 0
}

type CounterAction = 'increment' | 'decrement' | 'reset'

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  if (action === 'increment') {
    return {
      ...state,
      value: state.value + 1
    }
  } else if (action === 'decrement') {
    return {
      ...state,
      value: state.value - 1
    }
  } else {
    return {
      ...state,
      value: 0
    }
  }
}

const UseReducerDemo = () => {
  const navigate = useNavigate()

  const [state, dispatch] = useReducer<Reducer<CounterState, CounterAction>>(counterReducer, initialCounterState)

  return (
    <div style={globalStyles.container}>
      <p>Counter: {state.value}</p>
      <div style={{ flexDirection: 'row' as 'row'}}>
        <button
          style={globalStyles.button}
          onClick={() => dispatch('increment')}>
          Increment
        </button>
        <button
          style={globalStyles.button}
          onClick={() => dispatch('reset')}>
          Reset
        </button>
        <button
          style={globalStyles.button}
          onClick={() => dispatch('decrement')}>
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

export default UseReducerDemo
