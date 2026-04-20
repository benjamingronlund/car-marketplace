import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Listings",
  description: "Search used cars from independent Nordic dealers.",
};

export default function ListingsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Car listings
      </h1>
      <p className="mt-4 text-gray-600">Listings will appear here.</p>
    </main>
  );
}
