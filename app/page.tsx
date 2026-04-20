import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Find your next car
      </h1>
      <p className="max-w-xl text-lg text-gray-600">
        Browse thousands of vehicles from independent dealers across Denmark,
        Sweden, Norway, and Finland.
      </p>
      <div className="flex gap-4">
        <Link
          href="/listings"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Browse listings
        </Link>
        <Link
          href="/sign-in"
          className="rounded-lg px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}
