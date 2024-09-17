import { NavLink } from "react-router-dom"

const NoMatch = () => {
  return (
    <>
      <h1>404</h1>
      <NavLink to='/'>Home</NavLink>
    </>
  )
}

export default NoMatch
