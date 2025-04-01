
import Link from "next/link";
import git from "../asset/git2.svg";
import x from "../asset/icons8-x (1).svg";
import lnk from "../asset/icons8-linkedin.svg";
import leet from "../asset/l.png";

export default function Connect() {
  return (
    <div className="flex flex-row gap-1 place-items-center p-2">
      <Link href="https://github.com/saurabhpandey33301" target="_blank">
        <img src={git.src} alt="GitHub" className="w-10 h-10"  />
      </Link>
      <Link href="https://www.linkedin.com/in/saurabh3301/" target="_blank">
        <img src={lnk.src} alt="LinkedIn" className="w-10 h-10" />
      </Link>
      <Link href="https://x.com/FRONTIER3301" target="_blank">
        <img src={x.src} alt="X" className="w-10 h-9" />
      </Link>
      <Link href="https://leetcode.com/u/saurabh3301/" target="_blank">
        <img src={leet.src} alt="LeetCode" className="w-[25px] h-[23px]" />
      </Link>
    </div>
  );
}
