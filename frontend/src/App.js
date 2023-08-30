import React from 'react';
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { About } from './pages/about/About'
import { Category } from "./components/category/Category"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Category />
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
