import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    // opacity: isToggled ? 1 : 0,
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
  });

  return (
    <>
      <div className="flex justify-evenly gap-4">
        <a
          href="#course-list"
          onClick={() => {
            setToggle(!isToggled);
          }}
        >
          <div className="w-20 h-20 bg-zinc-600 text-center">
            123ewq
            {/* {props.courseTitle} */}
          </div>
        </a>
      </div>
      <div className="flex justify-center" id="course-list">
        <div className="flex flex-col gap-6 p-5 w-3/4">
          <animated.div
            className="flex justify-center items-center bg-slate-500 h-10 p-5 border border-blue-600 rounded-lg"
            style={fade}
          >
            <p>Что то там бла бла бла</p>
          </animated.div>
          <animated.div
            className="flex justify-center items-center bg-slate-500 h-10 p-5 border border-blue-600 rounded-lg"
            style={fade}
          >
            <p>Что то там бла бла бла</p>
          </animated.div>
          <animated.div
            className="flex justify-center items-center bg-slate-500 h-10 p-5 border border-blue-600 rounded-lg"
            style={fade}
          >
            <p>Что то там бла бла бла</p>
          </animated.div>
          <animated.div
            className="flex justify-center items-center bg-slate-500 h-10 p-5 border border-blue-600 rounded-lg"
            style={fade}
          >
            <p>Что то там бла бла бла</p>
          </animated.div>
          {/* <Fade
              className="flex justify-center items-center bg-slate-500 h-10 p-5 border border-blue-600 rounded-lg"
              direction="top-left"
            >
              <p>Что то там бла бла бла</p>
            </Fade> */}
        </div>
      </div>
    </>
  );
};
export default Toggle;
