

import { ReactLenis } from "lenis/react";
import { Meteors } from "@/components/ui/meteors";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import About from "@/components/About";


import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="max-w-full min-h-screen">
      <ReactLenis root>
       {/* Meteors Background */}
<Meteors number={40} />

{/* Hero Section */}
<section 
  id="hero" 
  className="hero w-full h-screen flex justify-start items-center overflow-hidden"
>
  <Hero />
</section>

{/* Background Image Section */}
<section  
  className="followUp max-w-full h-[400px] flex justify-center items-center bg-no-repeat bg-center bg-contain overflow-hidden"
>
</section>

{/* Projects Section */}
<section 
  id="projects" 
  className="Projects w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-16"
>
  <Projects />
</section>

{/* Tech Stack Section */}
<section 
  id="skills" 
  className="Projects w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-16"
>
  <Skills />
</section>

{/* About Section */}
<section 
  id="about"  
  className="about w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-16"
>
  <About />
</section>

{/* Footer Section */}
<footer 
  className="footer w-full border-t flex justify-center items-center h-auto md:h-[300px] px-4 md:px-16"
> 
  <Footer /> 
</footer>

      </ReactLenis>
    </div>
  );
}
