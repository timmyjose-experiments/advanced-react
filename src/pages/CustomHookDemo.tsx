import { useNavigate } from "react-router-dom"

const CustomHookDemo = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Custom Hook Demo</h1>
      <button onClick={() => navigate('/')}
        >Home
      </button>
    </>
  )
}

export default CustomHookDemo
