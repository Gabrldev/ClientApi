import { useCartStore } from '../store/store'
import { Product } from '../types/item'
function ProductsCart ({ item }: { item: Product }) {
  const { aumtQuantity, decrenebtQuantity } = useCartStore()
  return (
    <div
      className="flex flex-col items-center justify-center bg-slate-300 p-2 rounded-md drop-shadow"
      key={item.id}
    >
      <img src={item.image} alt="" className="w-60 h-60 object-cover" />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <div className="flex gap-4">
        <button
          className="bg-white px-4 shadow-md rounded-md"
          onClick={() => aumtQuantity(item)}
        >
          +
        </button>
        <p className="font-extrabold">{item.quantity}</p>
        <button
          disabled={(item.quantity ?? 0) <= 0}
          className="bg-white px-4 shadow-md rounded-md"
          onClick={() => decrenebtQuantity(item)}
        >
          -
        </button>
      </div>
    </div>
  )
}
export default ProductsCart
