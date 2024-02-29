import Link from "next/link";

export const Header = async () => {
  const ul_style =
    "m-auto flex font-bold list-none flex-row flex-nowrap justify-center space-x-10 p-8";
  return (
    <header>
      <nav className="bg-bg-300 dark:bg-bg-300-dark text-text-100 dark:text-text-100-dark flex justify-around">
        <ul className={ul_style}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/world-map">World Map</Link>
          </li>
          <li>
            <Link href="/country-chart">Country Chart</Link>
          </li>
          <li>
            <Link href="/page">Template Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
