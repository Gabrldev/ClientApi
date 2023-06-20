// BEGIN: 3c3d4f7d5f5c
import { Product as ProductType } from '../types/item'
import AddToCart from './AddToCart'

interface Props {
  product: ProductType
}

function Product ({ product }: Props) {
  return (
    <div className='bg-slate-100 w-80 h-80 px-6 rounded-md flex justify-center flex-col items-center drop-shadow-lg' key={product.id}>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" className='w-60 h-60 object-cover' />
      <p>{product.price}</p>
      <AddToCart product={product}/>
    </div>
  )
}

export default Product
