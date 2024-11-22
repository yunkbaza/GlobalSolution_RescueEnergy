"use client";

import { useRouter } from "next/navigation";

export default function PagamentoPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        router.push("/sucesso");
      } else {
        throw new Error("Erro ao finalizar compra");
      }
    } catch (error) {
      router.push("/not-found");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Entrega e Método de Pagamento</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Endereço de Entrega:</label>
          <input
            type="text"
            placeholder="Digite o seu endereço"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Forma de Pagamento:</label>
          <select className="w-full border p-2 rounded" required>
            <option value="pix">Pix</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}
