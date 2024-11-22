"use client";

import React, { useState } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="pt-br">
      <body className="relative flex flex-col min-h-screen font-sans text-gray-900 bg-gray-100">
        {/* Header */}
        <header className="bg-white flex justify-between items-center p-4 shadow-md sticky top-0 z-40">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="Logo da RescueEnergy"
              width={60}
              height={60}
              className="rounded-full border border-gray-300"
            />
          </div>
          <nav className="flex gap-4">
            {/* Botão de menu (só aparece quando a barra lateral está fechada) */}
            {!isSidebarOpen && (
              <button
                onClick={toggleSidebar}
                className="relative w-10 h-8 flex flex-col justify-between bg-none border-none cursor-pointer z-50"
              >
                <span className="block w-full h-1 bg-gray-800 rounded"></span>
                <span className="block w-full h-1 bg-gray-800 rounded"></span>
                <span className="block w-full h-1 bg-gray-800 rounded"></span>
              </button>
            )}
          </nav>
        </header>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white bg-opacity-75 shadow-lg transform transition-transform duration-300 z-50 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-800"
            >
              X
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSidebar}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/produtos"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSidebar}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSidebar}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/carrinho"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleSidebar}
              >
                Carrinho
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-8 mt-auto">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/LogoWhatsapp.png"
                alt="WhatsApp"
                width={30}
                height={30}
                className="filter invert hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/LogoInstagram.png"
                alt="Instagram"
                width={30}
                height={30}
                className="filter invert hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/LogoGmail.png"
                alt="Email"
                width={30}
                height={30}
                className="filter invert hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 RescueEnergy. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
