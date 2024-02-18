import Menu from "./Menu.jsx"
import Library from "./Library.jsx"

export default function Aside() {

  return (
    <div className="col-span-3 row-span-11 md:flex flex-col gap-2 rounded-lg text-slate-300 hidden ">
      <Menu />
      <Library />
    </div>
  )
}
