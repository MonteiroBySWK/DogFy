import InfoMusicPLayer from "./InfoMusicPlayer"
import ControlPlayer from "./ControlPlayer"
import OptionsPlayer from "./OptionsPlayer"

export default function Player() {

  const infoMusicApi = {
    name: "Agony - Instrumental",
    author: "Scammacist, Sovara",
    duration: "4:12",
    liked: true
  }

  return (
    <div className="col-span-12 row-span-4 flex md:justify-normal sm:justify-between flex-row bg-black px-2">
      <InfoMusicPLayer name={infoMusicApi.name} author={infoMusicApi.author} liked={infoMusicApi.liked} />
      <ControlPlayer duration={infoMusicApi.duration} />
      <OptionsPlayer />
    </div>
  )
}
