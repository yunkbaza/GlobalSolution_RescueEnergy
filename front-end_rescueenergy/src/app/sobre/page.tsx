"use client";

import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Sobre a RescueEnergy
      </h1>

      {/* Primeira seção */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Texto descritivo */}
        <div>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
            A RescueEnergy acredita que a sustentabilidade começa com cada passo.
            Transformamos o movimento humano em energia elétrica limpa para um
            futuro mais sustentável.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            Nossa tecnologia permite que cada passo, corrida ou pedalada
            contribua para um mundo mais sustentável, reduzindo a dependência de
            fontes não renováveis como carvão e petróleo.
          </p>
        </div>
        {/* Imagem sobre 1 */}
        <div className="flex justify-center">
          <Image
            src="/sobre_1.png"
            alt="Imagem sobre a RescueEnergy"
            width={500}
            height={400}
            className="rounded-3xl shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Segunda seção */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagem sobre 2 */}
        <div className="flex justify-center order-2 lg:order-1">
          <Image
            src="/sobre_2.png"
            alt="Soluções sustentáveis da RescueEnergy"
            width={500}
            height={400}
            className="rounded-3xl shadow-xl object-cover"
          />
        </div>
        {/* Texto descritivo */}
        <div className="order-1 lg:order-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Objetivos da RescueEnergy:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Criar uma fonte de energia elétrica limpa.</li>
            <li>Reduzir o uso de materiais não renováveis.</li>
            <li>Utilizar materiais recicláveis.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
            Clientes da RescueEnergy:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Academias</li>
            <li>Áreas urbanas movimentadas</li>
            <li>Empresas</li>
            <li>Condomínios</li>
            <li>Instituições públicas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
