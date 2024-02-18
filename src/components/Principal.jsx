import BtnC from "./BtnC"
import FavPlaylist from "./FavPlaylist"
import Playlist from "./Playlist"

export default function Principal() {

  return (
    <div className="col-span-12 overflow-hidden md:col-span-9 sticky row-span-11 bg-gradient-to-b from-purple-700/30 to-[#121212] to-45% rounded-lg text-white">
      <div className="flex justify-between px-2 py-2">
        <div className="flex gap-4 text-xl">
          <BtnC value={2} />
          <BtnC value={3} />
        </div>
        <BtnC value={7} />
      </div>

      <FavPlaylist />

      <div className="flex flex-row flex-grow justify-between pt-4 px-2 overflow-hidden flex-nowrap">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
      <div className="flex flex-row flex-grow justify-between pt-4 px-2 overflow-hidden flex-nowrap">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
      <div className="flex flex-row flex-grow justify-between pt-4 px-2 overflow-hidden flex-nowrap">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </div>
  )
}
