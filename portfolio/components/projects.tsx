
import { BentoGridDemo } from "./grid";


export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen w-full" >
      {/* Sidebar Text */}
      <div className="   w-full  col-span-1 mt-6 md:mt-10 pt-20 hidden md:block">
        <div className="rotate-90 h-[58px] text-gray-500 text-4xl md:text-6xl lg:text-8xl  font-mono ">
          Projects
        </div>
      </div>  

      {/* Project Content */}
      <div className="col-span-11 flex flex-col justify-center items-center w-full p-4 md:p-10 lg:p-20">
        <div className="flex flex-col justify-center w-full h-full gap-6 md:gap-8">
          {/* Project Title */}
          <div className="font-mono text-white text-2xl md:text-3xl lg:text-4xl ">
            Here are some of my projects that I have worked on:-
          </div>

          {/* Grid Content */}
          <div className="flex w-full justify-start  ">
             <div>
             <BentoGridDemo />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
