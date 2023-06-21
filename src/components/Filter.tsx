import { useProducts } from '../store/store'

function Filter () {
  const { filterProducts, filterPrices } = useProducts()

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    filterProducts(e.currentTarget.value)
  }
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterPrices(Number(e.currentTarget.value))
  }

  return (
    <div className="flex flex-col gap-4">
      <h2>Filter</h2>
      <button value="all" className="bg-slate-300 px-4" onClick={handleFilter}>
        All
      </button>
      <span>0</span>
      <input type='range' min='100' max='3000' onChange={handlePrice} />
      <button value="jewelery" className="bg-slate-300 px-4" onClick={handleFilter}>
        Jewelery
      </button>
      <button value="electronics" className="bg-slate-300 px-4" onClick={handleFilter}>
        Electronics
      </button>
    </div>
  )
}
export default Filter
