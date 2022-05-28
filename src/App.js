import React from "react";
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import Header from "./components/Header"
// import Header from "./components/Header"
// import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App =() => {
  return (
<BrowserRouter>
    {/* <Header /> */}
    <Header/>
<Routes>
  <Route path ='/' element ={<Home />}></Route>
  <Route path ='/about' element ={<About />}></Route>
  <Route path ='/portfolio' element ={<Portfolio />}></Route>
  <Route path ='/contact' element ={<Contact />}></Route>
  <Route path ='/resume' element ={<Resume />}></Route>
</Routes>
    {/* <Footer /> */}
</BrowserRouter>
  );
}

export default App;
