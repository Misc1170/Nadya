import { useSpring, animated } from "@react-spring/web";
import React from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Toggle from "./Toggle";

export default function Courses() {
  return (
    <>
    {/* <div className="flex flex-col gap-6 p-5 w-3/4" style={fade}> */}
            {/* <Fade
              className="flex justify-center items-center bg-slate-500 h-10 p-5 border border-blue-600 rounded-lg"
              direction="top-left"
            >
              <p>Что то там бла бла бла</p>
            </Fade> */}
          {/* </div> */}
      <div className="flex flex-col mt-40">
        <div>
          <Toggle />
          <div className="flex justify-center gap-3 border-double border-4 border-amber-700">
            Здесь всплывает инфа о выбраном курсе
          </div>
        </div>
        <div className="bg-white p-7 my-10">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            facere quisquam odio alias asperiores! Esse ex nulla sapiente
            deleniti! Nam accusamus quia assumenda officia molestias quos facere
            est maxime libero.
          </span>
        </div>
      </div>
    </>
  );
}
