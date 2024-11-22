"use client";

export default function SobrePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sobre o Projeto</h1>
      <p className="text-gray-700 mb-4">
        A RescueEnergy acredita que a sustentabilidade começa com cada passo.
        Transformamos o movimento humano em energia elétrica limpa para um
        futuro mais sustentável.
      </p>
      <h2 className="text-lg font-semibold">Objetivos:</h2>
      <ul className="list-disc pl-6">
        <li>Criar uma fonte de energia elétrica limpa</li>
        <li>Reduzir o uso de materiais não renováveis</li>
        <li>Utilizar materiais recicláveis</li>
      </ul>
    </div>
  );
}
