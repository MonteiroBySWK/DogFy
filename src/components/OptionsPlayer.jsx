import { useState } from "react"
import BtnC from "./BtnC.jsx"

export default function OptionsPlayer() {
  const [mute, setMute] = useState(0)

  function handleMute() {
    if (mute == 0) { setMute(1) }
    if (mute == 1) { setMute(0) }
  }

  return (
    <div className="hidden md:flex w-1/3 text-white items-center justify-end gap-4">
      <div>T</div>
      <div>L</div>
      <div>F</div>
      <div>C</div>
      <div className="flex flex-row items-center w-1/4 gap-2">
        {mute == 0 ? <BtnC value={8} Click={handleMute} /> : <BtnC value={5} Click={handleMute} />}
        <div className="border border-white rounded-lg w-full"></div>
      </div>
      <div>E</div>
    </div>
  )
}
