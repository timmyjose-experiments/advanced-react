import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"
import { useRef } from "react"

const UseRefDemo = () => {
  const navigate = useNavigate()

  const counterRef = useRef<number>(0)

  return (
    <div style={globalStyles.container}>
      <div style={{ flexDirection: 'row' as 'row'}}>
        <button
          style={globalStyles.button}
          onClick={() => {
            counterRef.current += 1
            alert(`You clicked ${counterRef.current} time(s)`)
          }}>
          Click Me!
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

export default UseRefDemo
