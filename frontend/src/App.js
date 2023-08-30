import React from 'react';
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { About } from './pages/about/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
