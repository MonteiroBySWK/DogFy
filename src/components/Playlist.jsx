import IconMusic from "./IconMusic.jsx"

export default function Playlist() {

  return (
    <div className="p-4 pb-7 bg-[#181818] max-w-fit rounded-lg">
      <IconMusic size={3} />
      <p className="text-sm text-left text-slate-200 mt-4 font-bold">PlayList Tal</p>
      <p className="text-sm text-left text-slate-400 my-1 font-medium">Genero Tal</p>
    </div>
  )
}
