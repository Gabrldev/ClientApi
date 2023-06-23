import { useProducts } from '../store/store'
function Filter () {
  const { setCategory, setMinPrice, category, minPrice } = useProducts()
  console.log(category)

  const handleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value
    setCategory(value)
  }

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setMinPrice(+value)
  }

  return (
    <div className="flex flex-col items-center w-64 gap-2 h-80 border border-black/20 px-2 relative left-2 rounded-md py-6">
      <span>{minPrice}</span>
      <input type="range" min="0" max="3000" onChange={handleRange} />
      <button
        value="all"
        className="border border-black/30 rounded-md hover:bg-slate-50 w-full"
        onClick={handleBtn}
      >
        All
      </button>
      <button
        value="jewelery"
        className="border border-black/30 rounded-md hover:bg-slate-50 w-full"
        onClick={handleBtn}
      >
        Jewelery
      </button>
      <button
        value="electronics"
        className="border border-black/30 rounded-md hover:bg-slate-50 w-full"
        onClick={handleBtn}
      >
        Electronics
      </button>
    </div>
  )
}
export default Filter
