import { useEffect } from 'react'
import Product from './Product'
import { useProducts } from '../store/store'

function ProductsList () {
  const { products, getProducts } = useProducts()
  useEffect(() => {
    async function fetchProducts () {
      try {
        await getProducts()
      } catch (error) {
        console.error(error)
      }
    }
    void fetchProducts()
  }, [])

  return (
    <div className="col-span-6 flex flex-wrap gap-4 justify-center py-6">
      {products.map((product) => {
        return <Product product={product} key={product.id} />
      })}
    </div>
  )
}

export default ProductsList
