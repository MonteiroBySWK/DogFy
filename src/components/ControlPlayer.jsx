import { useState, useEffect } from "react"
import BtnC from "./BtnC"

export default function ControlPlayer(props) {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [play, setPlay] = useState(0)

  function handleDuration() {
    if (seconds < 59) {
      setSeconds(seconds + 1)
    } else {
      setSeconds(s => s = 0)
      setMinutes(m => m + 1)
    }
  }

  function playMusic() {
    if (play == 0) {
      setPlay(1)
    }
    if (play == 1) { setPlay(0) }
  }

  useEffect(() => {
    if (play == 1) {
      setTimeout(handleDuration, 1000)
    }
  })

  // function nextMusic() { }
  // function lastMusic() { }
  // function repeatMusic() { }
  // function randomMusic() { }

  return (
    <div className="flex flex-col md:w-1/2 sm:w-3/4 justify-center items-center gap-1 px-4 text-white">
      <div className="hidden sm:flex rounded-lg flex-row gap-4">
        <BtnC value={11} />
        <BtnC value={13} />
        {play == 1 ? <BtnC value={1} Click={playMusic} /> : <BtnC value={6} Click={playMusic} />}
        <BtnC value={9} />
        <BtnC value={12} />
      </div>

      <div className="hidden sm:flex justify-center items-center text-slate-400 text-sm gap-2 w-full">
        {seconds < 10 ? (<span>{minutes}:0{seconds}</span>) : (<span>{minutes}:{seconds}</span>)}
        <div className="border bg-green-600 h-1 border-green-600 rounded-lg w-full relative">
          <div className="border border-purple-700"></div>
        </div>

        <span>{props.duration}</span>
      </div>
    </div>
  )
}
