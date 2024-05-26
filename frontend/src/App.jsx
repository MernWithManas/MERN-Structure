import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense} from 'react';


import Loading from "../Components/Loading/Loading.jsx"



const SignUp = lazy(()  => import("../Pages/Signup.jsx"))
const Home = lazy(() => import("../Pages/Home.jsx"))



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
    <Routes>
      

      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />


    </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;