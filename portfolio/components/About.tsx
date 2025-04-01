
import sp from "@/asset/sp.jpg";
import Connect from "../components/connect";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen p-4 md:p-10">
      {/* Sidebar Text */}
      <div className="   w-full  col-span-1 mt-6 md:mt-10 pt-10 hidden md:block">
        <div className="rotate-90 h-[1px] text-gray-500 text-4xl md:text-6xl lg:text-8xl  font-mono ">
          About
        </div>
      </div> 

      {/* About Content */}
      <div className="col-span-11 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex justify-start  md:w-1/3">
          <div>
          <img
            src={sp.src}
            alt="Profile"
            className="w-[80%] md:w-full h-auto max-w-[300px] md:max-w-[400px] rounded-lg"
          />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-base text-white font-light flex flex-col gap-4 p-2 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-mono">About me :-</h2>

          <p className="text-sm md:text-base">
            Hello! I’m Saurabh Pandey,  
            a dedicated student currently pursuing my studies at the Indian Institute of Information Technology Ranchi.  
            With a strong passion for technology and innovation,  
            I specialize in full-stack development,  
            allowing me to work on both the front-end and back-end aspects of web applications.  
          </p>

          <p className="text-sm md:text-base">
            In addition to my technical abilities,  
            I believe in the importance of teamwork and effective communication.  
            I am committed to delivering high-quality results and continuously  
            improving my knowledge in the ever-evolving tech landscape.  
            Feel free to connect with me to discuss technology, projects, or potential collaborations!
          </p>

          {/* Connect Component */}
          <div className="mt-4">
            <Connect />
          </div>
        </div>
      </div>
    </div>
  );
}
