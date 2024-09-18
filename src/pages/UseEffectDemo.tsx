import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"
import { useEffect, useState } from "react"

const SERVER_URL = 'https://jsonplaceholder.typicode.com/todos/'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const UseEffectDemo = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Todo[] | null>(null)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(SERVER_URL, {
          method: 'GET'
        })

        const resJson =  await res.json()
        setTodos(resJson)
      } catch (err: any) {
        setTodos(null)
        throw new Error(err)
      }
    }

    fetchTodos()
  }, [])

  return (
    <div style={globalStyles.container}>
      { !!todos ? (
        <ul>
          { todos.map(({id, userId, title, completed}) => (
            <li key={id}>id: {id}, userId: {userId}, title: {title}, completed? {completed.toString()}</li>
          )) }
        </ul>
      ): 
      (
        <div>
          <p>Loading...</p>
        </div>
      ) }
      <button
        style={globalStyles.button}
        onClick={() => navigate('/')}>
          Home
      </button>
    </div>
  )
}

export default UseEffectDemo
