"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-8">
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
    </div>
  );
}
