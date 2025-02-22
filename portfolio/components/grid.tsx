
import img from "../asset/blog.jpg"


import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import Link from "next/link";
import { Globe } from "lucide-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto text-white  ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2 bg-[#efe4e42a]" : "bg-[#efe4e42a]"}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img src={img.src} alt="xyz" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl " />
);
const items = [
  {
    title: "WordfloW",
    description: "A blog web-app for writers and readers.",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"}  target="_blank"><Globe className="w-6 h-6 text-white"/></Link>,
  },
  {
    title: "Ai chatbot",
    description: "A chatbot that can help you with your queries.",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"} target="_blank"><Globe className="w-6 h-6 text-white"/></Link>,
  },
  {
    title: "Student-Result-Management",
    description: "result managment portal for students.",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"} target="_blank"><Globe className="w-6 h-6 text-white"/></Link>,
  },
  {
    title: "Payment-App",
    description:
      "Provides seemless payment experience for users. user can transfer money to other users with razorpay security .",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"} target="_blank"><Globe className="w-6 h-6 text-white"/></Link>,
  },
  {
    title: "To-do-list",
    description: "A simple to-do list app to keep track of your tasks.",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"} target="_blank"><Globe className="w-6 h-6 text-white"/></Link>,
  },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
];
