"use client";

import Image from "next/image";

export default function ProdutosPage() {
  return (
    
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Nossos Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Produto 1 */}
        <div className="border rounded-lg p-4 text-center">
          <Image
            src="/PisoEletricidade.png"
            alt="Piso de Eletricidade"
            width={300}
            height={200}
            className="rounded mb-4 mx-auto"
          />
          <h2 className="text-lg font-semibold mb-2">Piso de Eletricidade</h2>
          <p className="text-gray-600 mb-4">R$ 500,00</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Adicionar ao Carrinho
          </button>
        </div>
        {/* Produto 2 */}
        <div className="border rounded-lg p-4 text-center">
          <Image
            src="/EsteiraEnergetica.png"
            alt="Esteira Geradora"
            width={300}
            height={200}
            className="rounded mb-4 mx-auto"
          />
          <h2 className="text-lg font-semibold mb-2">Esteira Geradora</h2>
          <p className="text-gray-600 mb-4">R$ 1.200,00</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Adicionar ao Carrinho
          </button>
        </div>
        {/* Produto 3 */}
        <div className="border rounded-lg p-4 text-center">
          <Image
            src="/BicicletaEnergetica.png"
            alt="Bicicleta Geradora"
            width={300}
            height={200}
            className="rounded mb-4 mx-auto"
          />
          <h2 className="text-lg font-semibold mb-2">Bicicleta Geradora</h2>
          <p className="text-gray-600 mb-4">R$ 2.500,00</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
