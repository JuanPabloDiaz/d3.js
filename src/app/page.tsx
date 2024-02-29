export default function Home() {
  return (
    <>
      <div className="space-y-6 text-lg">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-gray-700">
          This is a simple Next.js app that uses D3.js to render multiple
          components.
        </p>
        <p className="text-gray-700">
          The app is a work in progress and is intended to be a learning
          experience for me.
        </p>
        <p className="text-gray-700">
          That being said, I will be developing and testing new component ideas
          and features as I learn more about D3.js.
        </p>
        <p className="text-gray-700">
          Currently, I am working on multiple components. The components will
          include a world map, a country chart, a word cloud and much more.
        </p>
        <p className="text-gray-700">
          To learn more about D3.js and my learning process, please visit the
          <a
            href="https://d3js.org/"
            className="text-blue-500 hover:underline hover:text-blue-300 p-1"
          >
            D3.js
          </a>
          website and the
          <a
            href="https://nextjs.org/"
            className="text-blue-500 hover:underline hover:text-blue-300 p-1"
          >
            Next.js
          </a>
          website.
        </p>
      </div>
    </>
  );
}
