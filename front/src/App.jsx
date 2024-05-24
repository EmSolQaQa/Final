import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Add from './pages/Add'
import Wishlist from './pages/Wishlist'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishlistProvider from './Context/WishlistProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WishlistProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wish" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </WishlistProvider>
    </>
  )
}

export default App
