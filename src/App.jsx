import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop'
import Footer from './Components/Footer/Footer'
import men_banner from './Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Assets/Frontend_Assets/banner_women.png'
import kids_banner from './Assets/Frontend_Assets/banner_kids.png'
const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<div><ShopCategory banner={men_banner} category="men"/> </div>}/>
        <Route path='/womens' element={<div><ShopCategory banner={women_banner} category="women"/> </div>}/>
        <Route path='/kids' element={<div><ShopCategory banner={kids_banner} category="kid"/> </div>}/>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App