import { BrowserRouter, Routes, Route } from 'react-router-dom'


import SignUp from '../Pages/Signup.jsx'
import Home from '../Pages/Home.jsx';




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;