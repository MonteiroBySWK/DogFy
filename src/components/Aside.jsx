import Menu from "./Menu"
import Library from "./Library"

export default function Aside() {

  return (
    <div className="col-span-3 row-span-11 md:flex flex-col gap-2 rounded-lg text-slate-300 hidden ">
      <Menu />
      <Library />
    </div>
  )
}
