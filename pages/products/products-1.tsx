export default function ProductsOne() {
    return (
      <div className="flex flex-col h-screen lg:ml-64 px-2 py-20">
        <div className="w-full border-b-2 border-gray-300 mb-5">
          <span className="text-2xl font-medium">Product 1</span>
        </div>
        <section className="w-full">
          <div className="px-2 py-2 bg-blue-500 rounded">
            <span className="font-semibold text-lg font-mono text-gray-100">
              This page for Product 1!
            </span>
          </div>
        </section>
      </div>
    );
  }
  