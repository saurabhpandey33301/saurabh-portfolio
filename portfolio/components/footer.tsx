
import cpy from "../asset/copyright.png";
import h from "../asset/hut.png";
import s from "../asset/skl.png";
import m from "../asset/me.png";
import p from "../asset/pro.png";
import g from "../asset/icons8-gmail-50.png";
import c from "../asset/icons8-contact-30.png";
import Connect from "../components/connect";
import Link from "next/link";
import { DivOrigami } from "../components/ui/flip";
import MailtoButton from "./ui/mail";

export default function Footer() {
  return (
    <div className="grid grid-rows-6 w-full h-full gap-4 p-6">
      {/* Main Footer Content */}
      <div className="row-span-5 grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
        {/* Origami Section */}
        <div className="col-span-12 md:col-span-3 flex justify-center md:justify-start">
          <DivOrigami />
        </div>

        {/* Navigation Links */}
        <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <Link href="#hero" className="flex items-center gap-2 text-gray-300 font-mono">
              <img src={h.src} alt="" className="w-5 h-5" /> Scroll to top
            </Link>
            <Link href="#projects" className="flex items-center gap-2 text-gray-300 font-mono">
              <img src={p.src} alt="" className="w-5 h-5" /> My Projects
            </Link>
            <Link href="#skills" className="flex items-center gap-2 text-gray-300 font-mono">
              <img src={s.src} alt="" className="w-5 h-5" /> My Skills
            </Link>
            <Link href="#about" className="flex items-center gap-2 text-gray-300 font-mono">
              <img src={m.src} alt="" className="w-5 h-5" /> About me
            </Link>
          </div>
        </div>

        {/* Resume & Contact */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start p-4">
          <Link href="https://drive.google.com/file/d/1BhzNtImQSn5u440BGyiLgNe1XaFPrxty/view?usp=sharing" target="_blank">
            <button className="p-2 ps-4 pe-4 bg-slate-500 hover:bg-slate-300 text-sm md:text-lg font-mono text-white hover:text-black rounded-lg">
              View Resume
            </button>
          </Link>

          {/* Social Connect */}
          <div className="mt-4 md:mt-2">
            <Connect />
          </div>

          {/* Contact Info */}
          <div className="text-white flex flex-col gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <img src={g.src} alt="" className="h-5 w-5" /> <MailtoButton />
            </div>
            <div className="flex items-center gap-2">
              <img src={c.src} alt="" className="h-5 w-5" /> {`(+91) 6307982036`}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="row-span-1 text-center text-white font-mono bg-gray-600 pt-1 md:p-1 rounded-lg w-full">
        <div className="flex justify-center items-center gap-0 md:gap-2 ">
          <img src={cpy.src} alt="" className="w-5 h-5" /> Saurabh Pandey, made with passion and love
        </div>
      </div>
    </div>
  );
}
