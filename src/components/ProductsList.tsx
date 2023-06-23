import { useEffect } from 'react'
import Product from './Product'
import { useFilter, useProducts } from '../store/store'

function ProductsList () {
  const { filteredProducts } = useFilter()
  const { getProducts } = useProducts()
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
      {filteredProducts.map((product) => {
        return <Product product={product} key={product.id} />
      })}
    </div>
  )
}

export default ProductsList
