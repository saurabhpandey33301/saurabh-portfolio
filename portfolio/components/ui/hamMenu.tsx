"use client";
import h from "../../asset/hut.png";
import s from "../../asset/skl.png";
import m from "../../asset/me.png";
import p from "../../asset/pro.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const CornerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 flex items-end justify-end z-[100] pointer-events-auto">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 0 }}
              className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#9c9292] rounded-tl-full flex flex-col items-start justify-start p-4 origin-bottom-right shadow-xl
              backdrop-blur-lg z-[100] pointer-events-auto"
            >
              <div className="grid grid-cols-4 gap-2 h-full p-4">
                <Link href={"#about"} className="flex items-end gap-2 text-gray-300 font-mono">
                  
                  <img src={m.src} alt="" className="w-[55px] h-[55px]" />
                </Link>
                <Link href={"#skills"} className="flex items-center gap-2 text-gray-300 font-mono transform translate-y-4 -translate-x-4">
                  <img src={s.src} alt="" className="w-[50px] h-[50px]" />
                </Link>
                <Link href={"#projects"} className="flex items-center gap-2 text-gray-300 font-mono transform -translate-y-10 -translate-x-4">
                  <img src={p.src} alt="" className="w-[60px] h-[60px]" />
                </Link>
                <Link href={"#hero"} className="flex gap-2 text-gray-300 font-mono">
                  <img src={h.src} alt="" className="w-[45px] h-[45px]" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className="w-[105px] h-[103px] bottom-0 right-0 bg-[#ccc] text-white rounded-tl-full shadow-lg relative z-[200] flex items-end justify-end"
          onClick={() => setIsOpen(!isOpen)}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 text-gray-700"
          >
            {isOpen ? <X size={42} /> : <Menu size={42} />}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default CornerMenu;
