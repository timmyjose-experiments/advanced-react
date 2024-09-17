import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home</h1>
      <div style={styles.container}>
        <button onClick={() => navigate('/usestate-demo')}>
          useState Demo
        </button>
        <button onClick={() => navigate('custom-hook-demo')}>
          Custom Hook Demo
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Home