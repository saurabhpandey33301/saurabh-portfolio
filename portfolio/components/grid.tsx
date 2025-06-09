import img from "../asset/blog.jpg";
import imgLeet from "@/asset/leetmetric.png";
import imgpay from "@/asset/qikpay.png";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import imgXyz from "@/asset/xyz.png";
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
          link={item.link}
          className={
            i === 3 || i === 6
              ? "md:col-span-2 bg-[#efe4e42a]"
              : "bg-[#efe4e42a]"
          }
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  //   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img
    src={img.src}
    alt="xyz"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ps-1 pe-1"
  />
);
const SkeletonLeet = () => (
  //   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img
    src={imgLeet.src}
    alt="xyz"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl "
  />
);
const SkeletonPay = () => (
  //   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img
    src={imgpay.src}
    alt="xyz"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl "
  />
);
const SkeletonNews = () => (
  //   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img
    src={"weather.png"}
    alt="xyz"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl "
  />
);
const SkeletonXyz = () => (
  //   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  <img
    src={"snip-ai.png"}
    alt="xyz"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl "
  />
);
const items = [
  {
    title: "WordfloW",
    description:
      "An immersive blog web app crafted for passionate writers and avid readers, fostering a seamless storytelling experience.",
    header: <Skeleton />,
    icon: (
      <Link href={"https://wordflow-woad.vercel.app/"} target="_blank">
        <Globe className="w-6 h-6 text-white hover:text-lime-400" />
      </Link>
    ),
    link: "https://wordflow-woad.vercel.app/",
  },
  {
    title: "QikPay",
    description:
      "A cutting-edge payment app designed to deliver a seamless, secure, and hassle-free transaction experience for users across all platforms.",
    header: <SkeletonPay />,
    icon: (
      <Link href={"https://qik-pay.vercel.app/"} target="_blank">
        <Globe className="w-6 h-6 text-white hover:text-lime-400" />
      </Link>
    ),
    link: "https://qik-pay.vercel.app/",
  },
  {
    title: "LEETMETRIC",
    description:
      "Unlock your LeetCode stats effortlessly—just enter your username and dive into your coding journey!",
    header: <SkeletonLeet />,
    icon: (
      <Link
        href={"https://saurabhpandey33301.github.io/LEETMETRIC/"}
        target="_blank"
      >
        <Globe className="w-6 h-6 text-white  hover:text-lime-400" />
      </Link>
    ),
    link: "https://saurabhpandey33301.github.io/LEETMETRIC/",
  },
  {
    title: "Snip-Ai",
    description:
      "Generate stunning short videos with AI-written scripts, dynamic captions, voiceovers, and images — all in one click. Perfect for creating reels, shorts, and social media content at scale.",
    header: <SkeletonXyz />,
    icon: (
      <Link href={"https://snip-ai-seven.vercel.app/"} target="_blank">
        <Globe className="w-6 h-6 text-white hover:text-lime-400" />
      </Link>
    ),
    link: "https://snip-ai-seven.vercel.app/",
  },
  {
    title: "Weather-based-suggestor",
    description:
      "A Weather-Based Activity Suggestor recommends the best activities to do based on current or forecasted weather conditions. It helps users plan their day by offering personalized ideas like hiking on sunny days or movie marathons when it rains.",
    header: <SkeletonNews />,
    icon: (
      <Link href={"https://weather-based-suggestor.vercel.app/"} target="_blank">
        <Globe className="w-6 h-6 text-white  hover:text-lime-400" />
      </Link>
    ),
    link: "https://weather-based-suggestor.vercel.app/",
  },
  
];
