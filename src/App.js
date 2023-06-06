import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main"
import Footer from './components/Footer'
import About from "./components/About"
import Blog from "./components/Blog/Blog";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      {/* <Header/>
      <Nav/>
      <Font/>
      <Sec/>
      <Thir/>
      <Fort/>
      <Fiv/>
      <Footer/> */}


      <Router>
        <Header/>
        <Nav/>
        
           <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path="/contact" element={<Contact/>}/>
           </Routes>
          
      
              <Footer/> 
      </Router>




    </div>
  );
}

export default App;
