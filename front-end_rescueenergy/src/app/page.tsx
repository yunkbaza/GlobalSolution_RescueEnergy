import Image from "next/image";
 
export default function Home() {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">
          {/* Logo da empresa */}
          <Image
            src="/img/logo.png"
            alt="Logo da RescueEnergy"
            width={60}
            height={60}
          />
        </div>
        {/* Botão de menu */}
        <button className="menu-button"></button>
      </header>
 
      {/* Barra Divisória */}
      <div className="divider"></div>
 
      {/* Conteúdo Principal */}
      <main className="main">
        <section className="main-section">
          {/* Texto principal à esquerda */}
          <div className="text-content">
            <h2>Transformando o seu dia-a-dia em energia elétrica.</h2>
            <p>
              RescueEnergy, transformando o seu movimento em energia elétrica
              para um futuro sustentável.
            </p>
          </div>
          {/* Imagem principal à direita */}
          <div className="image-content">
            <Image
              src="/img/PisoGeradorDeEnergia.png"
              alt="Piso gerador de energia"
              width={800}
              height={500}
            />
          </div>
        </section>
      </main>
 
      {/* Rodapé */}
      <footer className="footer">
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/LogoWhatsapp.png"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/LogoInstagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/LogoGmail.png"
              alt="Email"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className="footer-bottom">
          © 2024 RescueEnergy. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}