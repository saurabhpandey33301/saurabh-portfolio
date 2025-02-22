
"use client";
import dynamic from "next/dynamic";
import { Badge } from "./ui/badge";

const IconCloud = dynamic(() => import("../components/ui/icons"), {
  ssr: false,
});

const slugs = [
  "android",
  "androidstudio",
  "antdesign",
  "typescript",
  "vercel",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "sonarqube",
  "figma",
];

const skills = [
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "REST APIs",
  "Express.js",
  "Hono.js",
  "JWT",
  "Zod",
  "Serverless",
  "Turborepo",
  "Websockets",
  "Postgres",
  "MongoDB",
  "MySQL",
  "Prisma",
  "Firebase",
  "Git/Github",
  "CI/CD",
  "Nginx",
  "AWS/EC2/S3",
  "Docker",
  "C++",
  "Javascript",
  "Typescript",
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen p-4 md:p-10">
      {/* Sidebar Text */}
      <div className="   w-full  col-span-1 mt-6 md:mt-10 pt-10 hidden md:block">
        <div className="rotate-90 h-[1px] text-gray-500 text-4xl md:text-6xl lg:text-8xl  font-mono ">
          Tech_skills
        </div>
      </div> 

      {/* Skills Content */}
      <div className="col-span-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skills Section */}
          <div className="md:col-span-2 flex flex-col font-mono gap-4">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl">
              SKILLS:
            </h2>
            <p className="text-[18px] md:text-[25px] text-white">
              Here are my tech skills that I have used in my projects.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2 md:gap-4 mt-6">
              {skills.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))}
            </div>
          </div>

          {/* 3D Icon Cloud */}
          <div className="flex justify-center md:justify-end col-span-1 items-center  md:p-0">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </div>
  );
}
