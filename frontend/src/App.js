import React from 'react';
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' component={Home}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
