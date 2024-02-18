import { Home } from "./Icons.jsx"

export default function Library() {

  return (
    <div className="bg-[#121212] rounded-lg h-full">
      <div className="flex flex-row  gap-5 items-center px-3 py-2">
        <div className="flex py-2 px-3 gap-5"><Home /><span className="font-medium text-slate-400 transition duration-200 hover:text-slate-50">Biblioteca</span></div>
      </div>
    </div>
  )
}
