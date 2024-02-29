export default function Home() {
  return (
    <>
      <div className="space-y-6 text-lg">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-gray-700">
          This is a simple Next.js app that uses D3.js to render multiple
          components.
        </p>
        <p className="text-gray-800 italic border p-2 rounded-lg bg-slate-200">
          I am not using images, but rather
          <span className="text-green-600 p-1">Scalable Vector Graphics</span>
          (SVGs) to render the components. It is a powerful way to render
          graphics by using DATA to create and manipulate SVGs.
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
          To learn more about D3.js, please visit the
          <a
            href="https://d3js.org/"
            className="text-blue-500 hover:underline hover:text-blue-300 p-1"
          >
            D3.js
          </a>
          website.
        </p>
      </div>
    </>
  );
}
