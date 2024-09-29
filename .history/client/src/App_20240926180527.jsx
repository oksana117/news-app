
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import {NavbarBootstrap} from './components/Navbar.jsx'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path='/register' element={<Register />}></Route>
       
        <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>

   
     
        </Routes>
      
    </BrowserRouter>
    
    
  )
}

export default App
