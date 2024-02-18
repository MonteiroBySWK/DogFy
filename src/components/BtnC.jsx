import { Pause, Left, Right, More, Mute, Play, Profile, Volume, Next, Heart, Random, Replay, Last, Home, Search } from "./Icons.jsx"

export default function BtnC(props) {
  return (
    <div className="transition duration-200 hover:bg-[#121212] rounded-lg p-2 cursor-pointer" onClick={props.Click}>
      {props.value == 1 ? <Pause /> : null}
      {props.value == 2 ? <Left /> : null}
      {props.value == 3 ? <Right /> : null}
      {props.value == 4 ? <More /> : null}
      {props.value == 5 ? <Mute /> : null}
      {props.value == 6 ? <Play /> : null}
      {props.value == 7 ? <Profile /> : null}
      {props.value == 8 ? <Volume /> : null}
      {props.value == 9 ? <Next /> : null}
      {props.value == 10 ? <Heart color={props.color} /> : null}
      {props.value == 11 ? <Random /> : null}
      {props.value == 12 ? <Replay /> : null}
      {props.value == 13 ? <Last /> : null}
      {props.value == 14 ? <Home /> : null}
      {props.value == 15 ? <Search /> : null}

    </div>)
}
