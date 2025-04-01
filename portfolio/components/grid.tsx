
import img from "../asset/blog.jpg"
import imgLeet from "@/asset/leetmetric.png"
import imgpay from "@/asset/qikpay.png"
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import Link from "next/link";
import { Globe } from "lucide-react";
import { link } from "fs";
import { url } from "inspector";

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
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-2 bg-[#efe4e42a]" : "bg-[#efe4e42a]"}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img src={img.src} alt="xyz" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ps-1 pe-1" />
);
const SkeletonLeet = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img src={imgLeet.src} alt="xyz" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl " />
);
const SkeletonPay = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img src={imgpay.src} alt="xyz" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl " />
);
const items = [
  {
    title: "WordfloW",
    description: "A blog web-app for writers and readers.",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"}  target="_blank"><Globe className="w-6 h-6 text-white hover:text-lime-400"/></Link>,
    link: "https://wordflow-woad.vercel.app/"
  },
  {
    title: "Ai chatbot",
    description: "A chatbot that can help you with your queries.",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"} target="_blank"><Globe className="w-6 h-6 text-white  hover:text-lime-400"/></Link>,
     link : "https://wordflow-woad.vercel.app/"
  },
  {
    title: "LEETMETRIC",
    description: "Find your leetcode states by using your username.",
    header: <SkeletonLeet/>,
    icon: <Link href={"https://saurabhpandey33301.github.io/LEETMETRIC/"} target="_blank"><Globe className="w-6 h-6 text-white  hover:text-lime-400"/></Link>,
     link : "https://saurabhpandey33301.github.io/LEETMETRIC/"
  },
  {
    title: "QikPay",
    description:
      "Payment-app that provides seemless payment experience for users. User can transfer money to other user and tranfer money from bank quickly.",
    header: <SkeletonPay />,
    icon: <Link href={"https://qik-pay.vercel.app/"} target="_blank"><Globe className="w-6 h-6 text-white hover:text-lime-400"/></Link>,
     link : "https://qik-pay.vercel.app/"
  },
  {
    title: "To-do-list",
    description: "A simple to-do list app to keep track of your tasks.",
    header: <Skeleton />,
    icon: <Link href={"https://wordflow-woad.vercel.app/"} target="_blank"><Globe className="w-6 h-6 text-white  hover:text-lime-400" /></Link>,
     link : "https://wordflow-woad.vercel.app/"
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
