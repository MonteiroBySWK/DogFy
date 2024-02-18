export default function IconMusic(props) {
  return (
    <>
      {props.size == 1 ? <div className="size-14 bg-gray-600 rounded-md"></div> : null}
      {props.size == 2 ? <div className="size-12 bg-gray-600 rounded-md"></div> : null}
      {props.size == 3 ? <div className="size-36 bg-cyan-100 rounded"></div> : null}
    </>
  )
}
