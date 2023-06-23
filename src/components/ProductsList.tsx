import { useEffect, useState } from 'react'
import Product from './Product'
import { useFilter, useProducts } from '../store/store'
import { LoaderProducts } from './Loader'
import { data } from '../mocks/data'

function ProductsList () {
  const { filteredProducts } = useFilter()
  const [isLoading, setIsLoading] = useState(true)
  const { getProducts } = useProducts()
  useEffect(() => {
    async function fetchProducts () {
      try {
        setIsLoading(true)
        await getProducts()
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    void fetchProducts()
  }, [])

  return (
    <div className="col-span-6 flex flex-wrap gap-4 justify-center py-6" >
      {isLoading
        ? data.map((product) => <LoaderProducts key={product.id} />)
        : filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductsList
