import InputCheckout from '../components/InputCheckout'

function Checkout () {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const value = Object.fromEntries(data.entries())
    console.log(value)
  }
  return (
    <div className="w-[800px] mx-auto">
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <InputCheckout name="Nombre" placeholder="Ingresa tu nombre" />
        <InputCheckout name="Apellido" placeholder="Ingresa tu Apellido" />
        <InputCheckout
          name="Direccion"
          placeholder="Ingresa tu Direccion"
          space="2"
        />
        <InputCheckout
          name="Telefono"
          placeholder="Ingresa tu nombre"
          type="number"
        />
        <InputCheckout name="Zip" placeholder="" />
        <button type="submit">send</button>
      </form>
    </div>
  )
}
export default Checkout
