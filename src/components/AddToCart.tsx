import { useCartStore } from '../store/store'
import { Product } from '../types/item'

function AddToCart ({ product: Product }: { product: Product }) {
  const { addtoCart } = useCartStore()
  return (
    <button onClick={() => addtoCart(Product)} className='bg-black'>
        Add to cart
    </button>
  )
}
export default AddToCart
