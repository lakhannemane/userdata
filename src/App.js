import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'

export const userContext = createContext()

const App = () => {
  const [item, setitem] = useState([])
  // console.log(item)

  
  return (
    <userContext.Provider value={item}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home item={item} setitem={setitem} />} />
          <Route path='/view' element={<Cart  setitem={setitem}/>} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  )
}

export default App