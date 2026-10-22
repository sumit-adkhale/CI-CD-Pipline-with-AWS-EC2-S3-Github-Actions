import React, { useState, useEffect,useRef } from "react";
import { gsap } from 'gsap';


function Preloader() {
  const [loader, setLoader] = useState(0);

  useEffect(() => {
    const loading = () => {
      let progress = 0;
      const interval = setInterval(() => {
        if (progress < 100) {
          setLoader((progress += 1));
        } else {
          clearInterval(interval);
        }
      }, 10);
    };

    loading();
  }, []);

  const tl = useRef(gsap.timeline({ defaults: { ease: 'Power2.easeInOut' } }));

  useEffect(() => {
    tl.current.to('.orangeScreen', { height:"100%", duration: 2, delay:1,opacity:1});
    tl.current.to('.loaderScreen', { display:"none"});
    tl.current.to('.orangeScreen', { x:"-100%", duration: 1, delay:0.2});
    tl.current.to('.orangeScreen', { width:0, duration: 0.5});
  }, []);

  return (
    <>
    <div className="loaderScreen w-full h-[100vh] bg-black flex flex-col justify-center items-center absolute  top-0 left-0 z-40">
      <div className="w-[80%] h-3 bg-white overflow-hidden ">
        <div
          className={` h-full bg-orange-600  `}
          style={{ width: `${loader}%` }}
        ></div>
      </div>
      <h1 className="text-6xl m-5 text-white">{loader}%</h1>
    </div>
    <div className="orangeScreen h-1 w-full absolute opacity-0 top-[50%] translate-y-[-50%] left-0 bg-orange-600 z-50">
    </div>
    </>
  );
}

export default Preloader;
