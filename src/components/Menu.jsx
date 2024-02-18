import { Home, Search } from "./Icons.jsx"

export default function Menu() {

  return (
    <div className="bg-[#121212] flex flex-col gap-2 rounded-lg py-3 px-3">
      <div className="flex py-2 px-3 gap-5"><Home /><span className="font-medium text-slate-400 transition duration-200 hover:text-slate-50">Inicio</span></div>
      <div className="flex py-2 px-3 gap-5"><Search /><span className="font-medium text-slate-400 transition duration-200 hover:text-slate-50">Buscar</span></div>
    </div>
  )
}
