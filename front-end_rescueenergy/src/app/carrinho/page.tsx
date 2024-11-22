"use client";

import { useRouter } from "next/navigation";

export default function CarrinhoPage() {
  const router = useRouter();

  const handlePaymentRedirect = () => {
    router.push("/pagamento");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Carrinho</h1>
      <p className="text-gray-700 mb-4">Seu carrinho contém:</p>
      <ul className="list-decimal pl-6 space-y-2">
        <li>Esteira Geradora (1x)</li>
        <li>Piso de Eletricidade (2x)</li>
        <li>Bicicleta Geradora (3x)</li>
      </ul>
      <button
        onClick={handlePaymentRedirect}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Ir ao pagamento
      </button>
    </div>
  );
}
