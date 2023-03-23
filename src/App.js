import React from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"


function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route exact path="/" element={ <Photos /> } />
        <Route path="/cart" element={ <Cart /> } />          
      </Routes>
    </div>
  )
}

export default App;

// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
