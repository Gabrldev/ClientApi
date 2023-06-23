import { useCartStore } from '../store/store'
import { Product } from '../types/item'
function ProductsCart ({ item }: { item: Product }) {
  const { aumtQuantity, decrenebtQuantity } = useCartStore()
  return (
    <div
      className="flex items-center justify-center rounded-md drop-shadow border border-black/20 w-10/12 px-5 py-2 gap-2"
      key={item.id}
    >
      <img src={item.image} alt="" className="w-10 h-10 object-cover" />
      <p className='text-xs'>{item.title}</p>
      <p>{item.price}</p>
      <div className="flex gap-4">
        <button
          className="bg-white h-5 px-2 shadow-md rounded-sm flex justify-center items-center font-extrabold"
          onClick={() => aumtQuantity(item)}
        >
          +
        </button>
        <p className="font-extrabold">{item.quantity}</p>
        <button
          disabled={(item.quantity ?? 0) <= 0}
          className="bg-white h-5 px-2 shadow-md rounded-sm flex justify-center items-center font-extrabold"
          onClick={() => decrenebtQuantity(item)}
        >
          -
        </button>
      </div>
    </div>
  )
}
export default ProductsCart
