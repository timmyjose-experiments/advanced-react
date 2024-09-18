import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"
import { useOnlineStatus } from "../hooks/useOnlineStatus"

const CustomHookDemo = () => {
  const navigate = useNavigate()
  
  const isOnline = useOnlineStatus()

  return (
    <div style={globalStyles.container}>
      <h1>Custom Hook Demo</h1>
      <p>Online ? {isOnline ? '\u2705' : '\u274c'}</p>
      <button onClick={() => navigate('/')}
        >Home
      </button>
    </div>
  )
}

export default CustomHookDemo