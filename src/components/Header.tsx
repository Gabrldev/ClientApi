import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
import logo from '../assets/logo-normal-1.png'
import { useCartStore, useCart } from '../store/store'
import { FaUser } from 'react-icons/fa'
import ModalUser from './ModalUser'

function Header () {
  const { itemsCart } = useCartStore()
  const { openCart } = useCart()
  const [modalIsActive, setModalIsActive] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-md py-6">
      <nav className="px-40 flex items-center justify-between">
        <div className="flex items-center">
          <AiOutlineSearch />
        </div>
        <img src={logo} />
        <div className="flex gap-3">
          <div
            className="relative bg-slate-300 p-2 rounded-md flex gap-3"
            onClick={openCart}
          >
            <span className="absolute -top-2 -right-2 cursor-default bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-xs font-semibold text-white">
              {itemsCart.length}
            </span>
            <AiOutlineShoppingCart className="cursor-pointer" />
          </div>
          <div
            className="flex items-center gap-3 bg-slate-300 p-2 rounded-md cursor-pointer"
            onClick={() => setModalIsActive(!modalIsActive)}
          >
            <FaUser />
            {modalIsActive && (
              <ModalUser />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
