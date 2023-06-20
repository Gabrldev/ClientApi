import { useCartStore, useCart } from '../store/store'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { Product } from '../types/item'
import ProductsCart from './ProductsCart'

function Cart () {
  const { itemsCart } = useCartStore()
  const { isOpen, closeCart } = useCart()

  const total = itemsCart.reduce((acc, item) => {
    return acc + item.price * (item.quantity ?? 0)
  }, 0)

  return (
    <>
      {isOpen && (
        <aside className="fixed flex flex-col right-0 top-0 w-80 h-screen bg-slate-100 transition-all duration-500 ease-in py-12 drop-shadow-2xl z-50 overflow-y-auto">
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={closeCart}
          >
            <AiOutlineClose className="text-lg hover:text-gray-400 transition-colors duration-300" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center">
              SHOPPING CART
            </h2>
            <span>{total}</span>
            {itemsCart.length === 0
              ? (
              <div className="flex flex-col items-center justify-center mt-20">
                <BsFillCartFill className="text-9xl text-gray-400" />
                <p className="text-gray-400">Your cart is empty</p>
              </div>
                )
              : (
              <div className="flex flex-col items-center justify-center">
                {itemsCart.map((item: Product, i) => {
                  return <ProductsCart item={item} key={i} />
                })}
              </div>
                )}
          </div>
        </aside>
      )}
    </>
  )
}

export default Cart
