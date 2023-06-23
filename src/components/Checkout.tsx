import { useNavigate } from 'react-router-dom'
function Checkout () {
  const navigate = useNavigate()
  return (
    <div className='absolute bottom-10 bg-black h-14 w-11/12 mx-auto flex justify-center rounded-md hover:bg-black/80 transition duration-300' onClick={() => navigate('/checkout')}>
    <button className='flex justify-center items-center w-full h-full'>
      <p className='text-white text-center text-lg font-semibold'>CHECKOUT</p>
    </button>
  </div>
  )
}
export default Checkout
