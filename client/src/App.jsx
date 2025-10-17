import { Routes, Route } from "react-router-dom"
import "./App.css"

// From /pages folder:
import Home from './pages/HomePage'


function App() {

  return (
    <>
     <Routes >
      <Route path='/' element={<Home />}></Route>
     </Routes>
    </>
  )
}

export default App
