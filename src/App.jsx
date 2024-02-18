import Aside from "./components/Aside"
import Principal from "./components/Principal"
import Player from "./components/Player"

export default function App() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-2 p-2 h-screen bg-black">
      <Aside />
      <Principal />
      <Player />
    </div>
  )
}
