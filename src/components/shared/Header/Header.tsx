import Link from "next/link";

export const Header = async () => {
  const ul_style =
    "m-auto flex font-bold list-none flex-row flex-nowrap justify-center space-x-10 p-8";
  return (
    <header>
      <nav className="bg-bg-300 dark:bg-bg-300-dark text-text-100 dark:text-text-100-dark flex justify-around">
        <h1 className="text-3xl font-bold p-8 text-[#420C00] hover:text-[#FF2E00]">
          D3.js
        </h1>
        <ul className={ul_style}>
          {/* <li>
            <Link href="/">About</Link>
          </li> */}
          <li>
            <Link href="/world-map">World Map</Link>
          </li>
          <li>
            <Link href="/country-chart">Country Chart</Link>
          </li>
          <li>
            <Link href="/word-cloud">Word Cloud</Link>
          </li>
          {/* <li>
            <Link href="/page">Page</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
