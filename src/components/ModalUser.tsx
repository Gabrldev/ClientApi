import { AiFillCreditCard } from 'react-icons/ai'
import { BiMap, BiLogOut } from 'react-icons/bi'
import { BsBoxSeam, BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaUserCheck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function ModalUser () {
  const navigate = useNavigate()
  return (
    <div className="fixed top-20 right-32 bg-slate-300 backdrop-blur-md rounded-md p-4 w-44 flex flex-col gap-3">
      <p className="text-sm w-full ">
        Hola, <span className="font-semibold">Gabriel</span>
      </p>
      <p className="items-center text-xs w-full bg-slate-100 py-1 px-2 rounded-md shadow hover:bg-slate-400 hover:text-white transition duration-200 flex gap-1"
      onClick={() => navigate('/orders')}
      >
        <BsBoxSeam className="text-xs" />
        Mis Pedidos
      </p>
      <p className="items-center text-xs w-full bg-slate-100 py-1 px-2 rounded-md shadow hover:bg-slate-400 hover:text-white transition duration-200 flex gap-1">
        <FaUserCheck className="text-xs" />
        Mis Datos
      </p>
      <p className="items-center text-xs w-full bg-slate-100 py-1 px-2 rounded-md shadow hover:bg-slate-400 hover:text-white transition duration-200 flex gap-1">
        <BiMap className="text-xs" />
        Mis Direcciones
      </p>
      <p className="items-center text-xs w-full bg-slate-100 py-1 px-2 rounded-md shadow hover:bg-slate-400 hover:text-white transition duration-200 flex gap-1">
        <AiFillCreditCard className="text-xs" />
        Mis Tarjetas
      </p>
      <p className="items-center text-xs w-full bg-slate-100 py-1 px-2 rounded-md shadow hover:bg-slate-400 hover:text-white transition duration-200 flex gap-1">
        <BsFillBookmarkHeartFill className="text-xs" />
        Mis Favoritos
      </p>
      <p className="items-center text-xs w-full bg-slate-100 py-1 px-2 rounded-md shadow hover:bg-slate-400 hover:text-white transition duration-200 flex gap-1">
        <BiLogOut className="text-xs" />
        Cerrar Sesion
      </p>
    </div>
  )
}
export default ModalUser
