import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos FANS de RadioHead'/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: '/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App