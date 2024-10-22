
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Search from './Search.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavbarBootstrap } from './components/Navbar.jsx'
import { useState, useEffect } from 'react';
import ArticleDetails from './ArticleDetails';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
 <BrowserRouter>
      <NavbarBootstrap isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated ? (
          <>
  
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path='/search' element={<Search />} />
            
          </>
        ) : (
          <Route path='/login' element={<Login />} />
        )}

        
      </Routes>
    </BrowserRouter>
  );
}



export default App
