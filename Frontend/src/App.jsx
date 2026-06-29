import {Routes , BrowserRouter, Route} from 'react-router-dom'
import { useState, useEffect } from "react";

import './App.css'
import { HeroPage } from './Pages/HeroPage'
import { Cart } from './Pages/Cart'

function App() {


  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

  useEffect(() => {
    console.log("saving cart:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

   const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id)
  
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
  
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  
  const removeFromCart = (product) => {
      //Finding the product in the cart 
      const existingProduct = cart.find((item) => item.id === product.id);
      if(existingProduct.quantity > 1 ) {
        const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    setCart(updatedCart)
    } else {
        const updatedCart = cart.filter(
        (item) => item.id !== product.id
      )
      setCart(updatedCart)
      }
  }
  
  const totalCartItems = cart.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  
  const cartInfoToCard = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if(existingProduct) {
      return existingProduct.quantity;
    } 
    else{
      return 0;
    }
  }
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroPage totalCartItems={totalCartItems} cartInfoToCard={cartInfoToCard} addToCart={addToCart} removeFromCart={removeFromCart}  cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart totalCartItems={totalCartItems} cartInfoToCard={cartInfoToCard} addToCart={addToCart} removeFromCart={removeFromCart}  cart={cart} setCart={setCart} totalPrice={totalPrice} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
