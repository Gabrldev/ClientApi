import Filter from '../components/Filter'
import ProductsList from '../components/ProductsList'

function Home () {
  return (
    <div className='grid grid-cols-7'>
      <Filter />
      <ProductsList />
    </div>

  )
}
export default Home
