"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! A página que você está procurando não foi encontrada.
      </p>
      <Link href="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition">
          Voltar para a Home
        </button>
      </Link>
    </div>
  );
}
