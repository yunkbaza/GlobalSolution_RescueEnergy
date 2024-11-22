import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-100">
      {/* Cabeçalho */}
      <header className="bg-white flex justify-between items-center p-4 shadow-md sticky top-0 z-50">
        <div className="logo">
          {/* Logo da empresa */}
          <Image
            src="/logo.png"
            alt="Logo da RescueEnergy"
            width={60}
            height={60}
            className="rounded-full border border-gray-300"
          />
        </div>
        {/* Botão de menu */}
        <button className="w-10 h-8 flex flex-col justify-between bg-none border-none cursor-pointer">
          <span className="block w-full h-1 bg-gray-800 rounded"></span>
          <span className="block w-full h-1 bg-gray-800 rounded"></span>
          <span className="block w-full h-1 bg-gray-800 rounded"></span>
        </button>
      </header>

      {/* Barra Divisória */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-300"></div>

      {/* Conteúdo Principal */}
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl bg-white rounded-lg shadow-lg p-8">
          {/* Texto principal à esquerda */}
          <div className="flex-1 text-left -mt-4">
            <h2 className="text-3xl lg:text-4xl text-blue-600 mb-4">
              Transformando o seu dia-a-dia em energia elétrica.
            </h2>
            <p className="text-lg text-gray-600">
              RescueEnergy, transformando o seu movimento em energia elétrica
              para um futuro sustentável.
            </p>
          </div>
          {/* Imagem principal à direita */}
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
    </div>
  );
}
