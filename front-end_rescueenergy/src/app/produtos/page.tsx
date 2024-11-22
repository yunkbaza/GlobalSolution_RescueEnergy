"use client";

export default function ProdutosPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Nossos produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold">Piso de Eletricidade</h2>
          <p className="text-gray-600">R$ 500,00</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
            Adicionar ao Carrinho
          </button>
        </div>
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold">Esteira Geradora</h2>
          <p className="text-gray-600">R$ 1.200,00</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
            Adicionar ao Carrinho
          </button>
        </div>
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold">Bicicleta Geradora</h2>
          <p className="text-gray-600">R$ 2.500,00</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}