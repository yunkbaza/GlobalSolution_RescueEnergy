"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-gray-900 bg-gray-100">
      {/* Cabeçalho */}
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
        {/* Botão de menu */}
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
      </header>

      {/* Barra Divisória */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-300"></div>

      {/* Conteúdo Principal */}
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl bg-white rounded-lg shadow-lg p-8">
          <div className="flex-1 text-left -mt-4">
            <h2 className="text-3xl lg:text-4xl text-blue-600 mb-4">
              Transformando o seu dia-a-dia em energia elétrica.
            </h2>
            <p className="text-lg text-gray-600">
              RescueEnergy, transformando o seu movimento em energia elétrica
              para um futuro sustentável.
            </p>
          </div>
          <div className="flex-1 text-right">
            <Image
              src="/PisoGeradorDeEnergia.png"
              alt="Piso gerador de energia"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>

      {/* Rodapé */}
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

      {/* Barra lateral */}
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
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Login/Criar conta
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Nossos produtos
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Quem somos nós
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Sobre o Projeto
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Carrinho
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
