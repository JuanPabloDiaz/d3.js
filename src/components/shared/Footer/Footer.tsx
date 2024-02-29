import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiBeerFill } from "react-icons/ri";

export const Footer = () => {
  const Link_icon_style = "text-accent-100 dark:text-accent-100-dark mx-5";
  const icon_style = "w-6 h-6 fill-current";
  return (
    <footer className="bg-bg-200 dark:bg-bg-200-dark text-text-100 dark:text-text-100-dark flex flex-col items-center text-center ">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <Link href="https://twitter.com/1diazdev" className={Link_icon_style}>
            <FaTwitter className={icon_style} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/1diazdev/"
            className={Link_icon_style}
          >
            <FaLinkedinIn className={icon_style} />
          </Link>
          <Link
            href="https://github.com/JuanPabloDiaz"
            className={Link_icon_style}
          >
            <FaGithub className={icon_style} />
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-around border-t p-4 text-center dark:border-cyan-700">
        <p>D3.js ・ Playground</p>
        <p className="flex gap-2 justify-center text-center">
          unofficial site
          <RiBeerFill className={`text-gray-500 size-2 ${icon_style}`} />
        </p>
        <p className="flex gap-1">
          Made with ❤︎
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://www.jpdiaz.dev/"
          >
            Juan Diaz
          </a>
        </p>
      </div>
    </footer>
  );
};
