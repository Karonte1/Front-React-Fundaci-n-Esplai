import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'

import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import YourBooks from "./components/YourBooks"
import YourAccount from "./components/YourAccount"
import PrivateRoutes from "./components/PrivateRoutes"
import Dashboard from "./pages/Dashboard"

function App () {
  // const pathname = window.location.pathname;
  console.log('app')



  return (
    <div>
      <Header />


      {/* //* Enrutado rudimentario
            { pathname === '/' && <Home /> }
            { pathname === '/about' && <About /> }
            { pathname === '/blog' && <Blog /> } 
        */}

      <main className="my-12 w-3/4 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* //* Rutas anidadas normales  */}
          {/* <Route path="/profile" element={<Profile />} >                    
                        <Route path="books" element={<YourBooks />}/>                    
                        <Route path="account" element={<YourAccount />}/>                    
                    </Route> */}



          {/* //* Rutas anidadas sin path -> pasaran por un componente todas las rutas y dejará pasar las que quieras  */}
          <Route element={<PrivateRoutes />}>

            <Route path="/profile" element={<Profile />} >
              <Route path="books" element={<YourBooks />} />
              <Route path="account" element={<YourAccount />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />

          </Route>


        </Routes>
      </main>



      <footer className="bg-pink-400 text-center p-4 border-t-2 border-black">Copyright &copy;</footer>

    </div>
  )
}

export default App
