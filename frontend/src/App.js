import React from 'react';
import { Header } from "./components/header/Header"
import { Regsiter } from './pages/loginRegister/Register';
import { Login } from './pages/loginRegister/Login';
import { Home } from "./pages/home/Home"
import { About } from './pages/about/About'
import { Projects } from './pages/projects/Projects'
import { Market } from './pages/market/Market'
import { Write }  from './pages/write/Write'
import { Contact } from './pages/contact/Contact'
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/register' element={<Regsiter/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
