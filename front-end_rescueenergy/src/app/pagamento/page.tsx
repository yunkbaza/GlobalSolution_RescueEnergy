"use client";

export default function PagamentoPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Entrega e Método de Pagamento</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Endereço de Entrega:</label>
          <input
            type="text"
            placeholder="Digite o seu endereço"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Forma de Pagamento:</label>
          <select className="w-full border p-2 rounded">
            <option>Pix</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}
