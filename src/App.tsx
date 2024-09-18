import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CustomHookDemo from './pages/CustomHookDemo'
import NoMatch from './pages/404'
import UseStateDemo from './pages/UseStateDemo'
import UseReducerDemo from './pages/UseReducerDemo'
import UseRefDemo from './pages/UseRefDemo'
import UseEffectDemo from './pages/UseEffectDemo'
import UseMemoDemo from './pages/UseMemo'
import UseCallbackDemo from './pages/UseCallbackDemo'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/custom-hook-demo' element={<CustomHookDemo />} />
        <Route path='/usestate-demo' element={<UseStateDemo/>} />
        <Route path='/usereducer-demo' element={<UseReducerDemo />} />
        <Route path='/useref-demo' element={<UseRefDemo />} />
        <Route path='/useeffect-demo' element={<UseEffectDemo />} />
        <Route path='/usememo-demo' element={<UseMemoDemo />} />
        <Route path='/usecallback-demo' element={<UseCallbackDemo />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App