import { useCartStore } from '../store/store'
import { Product } from '../types/item'
import { BsFillCartPlusFill } from 'react-icons/bs'

function AddToCart ({ product: Product }: { product: Product }) {
  const { addtoCart } = useCartStore()
  return (
    <button onClick={() => addtoCart(Product)} className='bg-white text-xs px-4 shadow-md py-2 hover:bg-slate-50'>
        Add to cart
        <BsFillCartPlusFill className='inline-block ml-2' />
    </button>
  )
}
export default AddToCart
