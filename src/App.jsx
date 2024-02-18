import Aside from "./components/Aside.jsx"
import Principal from "./components/Principal.jsx"
import Player from "./components/Player.jsx"

export default function App() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-2 p-2 h-screen bg-black">
      <Aside />
      <Principal />
      <Player />
    </div>
  )
}
