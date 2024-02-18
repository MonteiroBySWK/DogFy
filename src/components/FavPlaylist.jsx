import IconMusic from "./IconMusic"

const styles = {
  flex: "1 1 calc(33.3333333333% - 8px)"
}

const list = ["Mix1", "Mix2", "Mix3", "Mix4", "Mix5", "Mix6"]
const listEl = list.map(element => (
  <div style={styles} className="bg-[#2a2a2a]/30 flex items-center gap-4 rounded-md">
    <IconMusic size={2} />
    <span className="px-4 text-xs md:pr-4 font-medium sm:text-sm">{element}</span>
  </div>
)
)

export default function FavPlaylist() {
  return (<div className="flex flex-wrap gap-2 px-4 justify-center my-8">{listEl} </div>)
}
