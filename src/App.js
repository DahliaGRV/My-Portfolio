import React from "react";
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import Header from "./components/Header"
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App =() => {
  return (
<BrowserRouter>
    <Header/>
<Routes>
  <Route path ='/' element ={<About />}></Route>
  <Route path ='/portfolio' element ={<Portfolio />}></Route>
  <Route path ='/contact' element ={<Contact />}></Route>
  <Route path ='/resume' element ={<Resume />}></Route>
</Routes>
    <Footer />
</BrowserRouter>
  );
}

export default App;
