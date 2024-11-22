"use client";

export default function SobrePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Sobre o Projeto</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <p className="text-gray-700">
          A RescueEnergy acredita que a sustentabilidade começa com cada passo.
          Transformamos o movimento humano em energia elétrica limpa para um
          futuro mais sustentável.
        </p>
        <ul className="list-disc pl-6">
          <li>Criar uma fonte de energia elétrica limpa</li>
          <li>Reduzir o uso de materiais não renováveis</li>
          <li>Utilizar materiais recicláveis</li>
        </ul>
      </div>
    </div>
  );
}
