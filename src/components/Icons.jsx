export {
  Pause, Left, Right, More, Mute, Play, Profile,
  Volume, Next, Heart, Random, Replay, Last, Home, Search
}

function Left() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title />
      <g id="Complete">
        <g id="F-Chevron">
          <polyline fill="none" id="Left" points="15.5 5 8.5 12 15.5 19" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </g>
    </svg>)
}

function Right() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title />
      <g id="Complete">
        <g id="F-Chevron">
          <polyline fill="none" id="Right" points="8.5 5 15.5 12 8.5 19" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </g>
    </svg>)
}

function Pause() {
  return (
    <svg
      width="20px"
      height="20px"
      fill="blue"
      viewBox="-1 0 8 8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>pause [#1006]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="white">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]"></path>
          </g>
        </g>
      </g>
    </svg>)
}

function More() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title />
      <g id="Complete">
        <g data-name="add" id="add-2">
          <g>
            <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5" />
            <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12" />
          </g>
        </g>
      </g>
    </svg>
  )
}

function Mute() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title />
      <g id="Complete">
        <g id="volume-off">
          <g>
            <line fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="3" y2="21" />
            <polyline fill="none" points="9.9 5.5 12 3 12 21 7 16 2 16 2 9 3 9 7 9 8 9" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" />
            <path d="M21.4,16a8.5,8.5,0,0,0,1.1-4.2c0-4.3-3.1-7.8-7-7.8" fill="none" stroke="#ffffff" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" />
            <path d="M15.5,20.5a5.2,5.2,0,0,0,3-1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            <path d="M18.3,13a2.7,2.7,0,0,0,.2-1.1,2.9,2.9,0,0,0-3-2.9" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </g>
        </g>
      </g>
    </svg>
  )
}

function Next() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 -2 12 12"
      version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>next [#998]</title>
      <desc>Created with Sketch.</desc>
      <defs>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-144.000000, -3805.000000)" fill="#ffffff">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353" id="next-[#998]"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

function Play() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="-0.5 0 7 7"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>play [#1003]</title>
      <desc>Created with Sketch.</desc>
      <defs>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#ffffff">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

function Profile() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>profile [#1341]</title>
      <desc>Created with Sketch.</desc>
      <defs>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -2159.000000)" fill="#ffffff">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298" id="profile-[#1341]"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

function Volume() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title />
      <g id="Complete">
        <g id="volume-up">
          <polygon fill="none" points="2.9 9 6.9 9 11.9 3 11.9 21 6.9 16 1.9 16 1.9 9 2.9 9" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.5,19.5a7.3,7.3,0,0,0,7-7.5,7.3,7.3,0,0,0-7-7.5" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.5,15a3,3,0,0,0,0-6" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </g>
    </svg>
  )
}

function Heart(props) {
  return (
    <svg
      fill={props.color}
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"></path>
    </svg>
  )
}

function Replay() {
  return (
    <svg
      fill="#ffffff"
      height="20px"
      width="20px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 490.89 490.89" xmlSpace="preserve">
      <g id="XMLID_231_">
        <path id="XMLID_233_" d="M97.38,292.692V181.229c0-24.324,19.792-44.125,44.134-44.125h170.733v19.506
		c0,5.525,3.065,10.59,7.941,13.162c4.884,2.59,10.786,2.229,15.343-0.885l100.888-69.057c3.607-2.475,5.771-6.557,5.788-10.934
		c0.015-4.377-2.124-8.49-5.722-10.965L335.63,7.956c-4.548-3.146-10.483-3.508-15.383-0.949c-4.91,2.557-7.975,7.653-7.975,13.178
		v19.539H141.515C63.483,39.724,0,103.208,0,181.229v111.463c0,26.881,21.801,48.684,48.689,48.684
		C75.58,341.376,97.38,319.573,97.38,292.692z"/>
        <path id="XMLID_232_" d="M442.199,149.513c-26.891,0-48.691,21.801-48.691,48.701V309.64c0,24.342-19.793,44.143-44.134,44.143
		H178.641v-19.506c0-5.523-3.065-10.588-7.941-13.162c-4.884-2.572-10.786-2.23-15.343,0.887L54.468,391.056
		c-3.606,2.477-5.771,6.572-5.786,10.951c-0.017,4.359,2.122,8.475,5.72,10.965l100.856,69.961
		c4.548,3.147,10.482,3.504,15.384,0.965c4.908-2.572,7.974-7.654,7.974-13.195v-19.539h170.756
		c78.031,0,141.516-63.498,141.516-141.523V198.214C490.89,171.313,469.088,149.513,442.199,149.513z"/>
      </g>
    </svg>
  )
}

function Random() {
  return (
    <svg
      fill="#ffffff"
      width="20px"
      height="20px"
      viewBox="0 -4 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m24.983 8.539v-2.485h-4.902l-3.672 5.945-2.099 3.414-3.24 5.256c-.326.51-.889.844-1.53.845h-9.54v-3.568h8.538l3.673-5.946 2.099-3.414 3.24-5.256c.325-.509.886-.843 1.525-.845h5.904v-2.485l7.417 4.27-7.417 4.27z" /><path d="m12.902 6.316-.63 1.022-1.468 2.39-2.265-3.675h-8.538v-3.568h9.54c.641.001 1.204.335 1.526.838l.004.007 1.836 2.985z" /><path d="m24.983 24v-2.485h-5.904c-.639-.002-1.201-.336-1.521-.838l-.004-.007-1.836-2.985.63-1.022 1.468-2.39 2.264 3.675h4.902v-2.485l7.417 4.27-7.417 4.27z" />
    </svg>
  )
}

function Last() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 -2 12 12"
      version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      transform="rotate(180)"
    >
      <title>next [#998]</title>
      <desc>Created with Sketch.</desc>
      <defs>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-144.000000, -3805.000000)" fill="#ffffff">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353" id="next-[#998]"></path>
          </g>
        </g>
      </g>
    </svg>

  )
}

function Home() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M20 19V10.5C20 10.1852 19.8518 9.88885 19.6 9.7L12.6 4.45C12.2444 4.18333 11.7556 4.18333 11.4 4.45L4.4 9.7C4.14819 9.88885 4 10.1852 4 10.5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19Z" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
    </svg>
  )
}

function Search() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
