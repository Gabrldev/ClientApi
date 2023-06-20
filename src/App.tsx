import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './components/Cart'
import ProducDetail from './pages/ProducDetail'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/products/:productId" element={<ProducDetail />} />
        <Route path="/products" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
