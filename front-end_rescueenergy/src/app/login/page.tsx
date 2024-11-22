"use client";

export default function LoginPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Seja bem-vindo à RescueEnergy!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Criar minha conta:</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Digite o seu e-mail"
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Confirme o seu e-mail"
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Digite a sua senha"
              className="w-full border p-2 rounded"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Cadastrar
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Entrar na minha conta:</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Digite o seu e-mail"
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Digite a sua senha"
              className="w-full border p-2 rounded"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
