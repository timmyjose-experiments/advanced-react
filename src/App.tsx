import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CustomHookDemo from './pages/CustomHookDemo'
import NoMatch from './pages/404'
import UseStateDemo from './pages/UseStateDemo'
import UseReducerDemo from './pages/UseReducerDemo'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/custom-hook-demo' element={<CustomHookDemo />} />
        <Route path='/usestate-demo' element={<UseStateDemo/>} />
        <Route path='/usereducer-demo' element={<UseReducerDemo />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App