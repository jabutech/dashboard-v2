import Link from "next/link";

export default function Product() {
  return (
    <div className="flex flex-col h-screen lg:ml-64 px-2 py-20">
      <div className="w-full border-b-2 border-gray-300 mb-5">
        <span className="text-2xl font-medium">Icon</span>
      </div>
      <section className="w-full">
        <div className="px-2 py-2">
          <span className="font-semibold text-lg font-mono text-gray-800">
            Access Icon With package
            <b className="text-blue-600">React Icons</b>
          </span>
          <br />
          <span>
            <span>Link: </span>
            <Link href="https://react-icons.github.io/react-icons/icons?name=fa">
              <a className="text-blue-600 hover:text-blue-800">
                Site Official React icon
              </a>
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
}
