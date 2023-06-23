import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product as ProductType } from '../types/item'
import { useCartStore } from '../store/store'
import { getProduct } from '../services/product.service'
import MyLoader from '../components/Loader'
function ProducDetail () {
  const [isloading, setIsLoading] = useState(true)
  const { productId } = useParams()
  const { addtoCart } = useCartStore()
  const [product, setProduct] = useState<ProductType>()
  console.log(isloading)

  useEffect(() => {
    async function fetchProduct () {
      try {
        setIsLoading(true)
        const product = await getProduct(productId as string)
        setProduct(product)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    void fetchProduct()
  }, [productId])

  return (
    // <div className="bg">
    //   <MyLoader />
    // </div>

  <>
    {isloading
      ? (
      <div>
        <MyLoader />
      </div>
        )
      : (
      <div className="px-64 flex mt-14 justify-between ">
        <div className="w-[500px]">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="flex flex-col  w-[500px]">
          <h1 className=" text-2xl font-semibold">{product?.title}</h1>
          <span className="font-semibold text-lg">${product?.price}</span>
          <p className="w-96 text-xs">{product?.description}</p>
          <div className="flex gap-4 mt-3">
            <button className="px-6 bg-black text-white rounded-lg hover:bg-black/90 transition duration-300">
              S
            </button>
            <button className="px-6 bg-black text-white rounded-lg hover:bg-black/90 transition duration-300">
              M
            </button>
            <button className="px-6 bg-black text-white rounded-lg hover:bg-black/90 transition duration-300">
              L
            </button>
            <button className="px-6 bg-black text-white rounded-lg hover:bg-black/90 transition duration-300">
              XL
            </button>
          </div>
          <button
            className="bg-black text-white w-96 h-10 mt-4 hover:bg-black/90 transition duration-300"
            onClick={() => product != null && addtoCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
        )}
  </>
  )
}
export default ProducDetail
