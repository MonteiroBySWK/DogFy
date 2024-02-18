import BtnC from "./BtnC"
import IconMusic from "./IconMusic"

export default function InfoMusicPLayer(props) {

  return (
    <div className="flex items-center gap-4 w-1/3">
      <IconMusic size={1} />
      <p className="hidden sm:block">
        <p className="text-start text-slate-50 text-sm pb-0.5">{props.name}</p>
        <p className="text-start text-slate-400 text-xs">{props.author}</p>
      </p>
      {props.liked ? <BtnC value={10} color="red" /> : <BtnC value={10} color="#ffffff" />}
    </div>
  )
}
