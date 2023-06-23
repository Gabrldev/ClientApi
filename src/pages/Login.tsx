/* eslint-disable @typescript-eslint/no-misused-promises */
import InputCheckout from '../components/InputCheckout'
import { Login } from '../services/auth.service'
import { useState } from 'react'
import { useUser } from '../store/user'

function LoginPage () {
  const [errors, setError] = useState<{ message: string } | null>(null)
  const { setUser, setIsAuth } = useUser()
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const value = Object.fromEntries(data.entries())
    const { Email, Password } = value as { Email: string, Password: string }
    try {
      await Login(Email, Password)
      setUser(Email)
      setIsAuth(true)
    } catch (error) {
      setError(error.response.data)
      console.log(errors)
    }
  }
  return (
    <div className="pt-64 w-1/6 mx-auto">
      <form onSubmit={handleSubmit}>
        {errors !== null && (
          <div className="relative bg-red-500 text-white p-2 rounded-md"
          >
            {errors.message}
            <span className='absolute top-0 right-2 cursor-pointer' onClick={() => setError(null)}>x</span>
          </div>
        )}
        <h1 className="text-2xl font-bold">Login</h1>
        <InputCheckout name="Email" placeholder="Ingresa tu correo" />
        <InputCheckout
          name="Password"
          placeholder="Ingresa tu contraseña"
          type="password"
        />
        <button
          type="submit"
          className="bg-slate-200 px-4 py-1 mt-5 rounded-md shadow"
        >
          Login
        </button>
      </form>
    </div>
  )
}
export default LoginPage
