import React from 'react';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Main from "./Components/Main"
import Footer from "./Components/Footer"


import './App.css';

function App() {
  return (
    <div className="App">
        <div >
         <Nav/>
         <Home/>
        </div>
        <Main/>
    <Footer/>
    </div>
  );
}

export default App;
