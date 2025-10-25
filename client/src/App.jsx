import { Routes, Route } from "react-router-dom"
import "./App.css"

// From /pages folder:
import Home from './pages/HomePage'
import AboutUs from './pages/About'
import Craftbook from './pages/CraftBook'
import SignIn from './pages/LogIn'
import SignUp from './pages/Register'


function App() {

  return (
    <>
     <Routes >
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<AboutUs />}></Route>
      <Route path='/craftbook' element={<Craftbook />}></Route>
      <Route path='/login' element={<SignIn />}></Route>
      <Route path='/register' element={<SignUp />}></Route>
     </Routes>
    </>
  )
}

export default App
