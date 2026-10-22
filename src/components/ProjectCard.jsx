import React from "react";

function ProjectCard({img,weblink}) {
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center overflow-hidden bg-grey-500 py-10">
      <div className="group h-[30vh] sm:h-[40vh] w-[80vw] md:w-[60vw] lg:w-[40vw] [prespective:100px]">
        <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src={img}
              className="h-full w-full rounded-xl object-cover shadow-lg "
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-500">
            <div className="flex justify-center items-center gap-10 mt-40">
              <a className="relative" href={weblink}>
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-red-700"></span>
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-white bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                  Visit Website
                </span>
              </a>
              <a href="#" class="relative">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-sky-600 px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                  More Details
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
