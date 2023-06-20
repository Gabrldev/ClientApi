import { useEffect, useState } from 'react'
import { Product as ProductType } from '../types/item'
import Product from './Product'

function ProductsList () {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      setProducts(products)
    }
    void fetchProducts()
  }, [])

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => {
        return <Product product={product} key={product.id} />
      })}
    </div>
  )
}

export default ProductsList
