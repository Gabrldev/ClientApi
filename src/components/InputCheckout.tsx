function InputCheckout ({ name, placeholder, space = '1', type = 'text' }: { name: string, placeholder: string, space?: string, type?: string }) {
  return (
    <div className={`w-full col-span-${space}`}>
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className="border border-black/30 outline-none rounded-md px-4 py-1 w-full"
      />
    </div>
  )
}
export default InputCheckout
