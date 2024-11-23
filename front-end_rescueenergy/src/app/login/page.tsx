"use client";

export default function LoginPage() {

  const handleRegister = async (e) => {
    e.preventDefault(); 

    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const dados = {
      nome, 
      email, 
      senha: password, 
    };

    try {

      const response = await fetch("http://127.0.0.1:5000/pessoas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const resultado = await response.json();

      if (response.ok) {
        alert("Conta criada com sucesso!");
        e.target.reset(); 
      } else {
        alert(`Erro ao cadastrar: ${resultado.error || "Erro desconhecido"}`);
      }
    } catch (error: unknown) {

      if (error instanceof Error) {
        alert("Erro ao conectar com a API: " + error.message);
      } else {
        alert("Erro desconhecido ao conectar com a API.");
      }
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault(); 

  
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
 
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const resultado = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso!");

      } else {
        alert(`Erro ao fazer login: ${resultado.error || "Erro desconhecido"}`);
      }
    } catch (error: unknown) {

      if (error instanceof Error) {
        alert("Erro ao conectar com a API: " + error.message);
      } else {
        alert("Erro desconhecido ao conectar com a API.");
      }
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Seja bem-vindo à RescueEnergy!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Criar Conta */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Criar minha conta:</h2>
          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              name="nome"
              placeholder="Digite o seu nome"
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Digite a sua senha"
              className="w-full border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Cadastrar
            </button>
          </form>
        </div>

        {/* Entrar na Conta */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Entrar na minha conta:</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Digite a sua senha"
              className="w-full border p-2 rounded"
              required
            />
            {/* Checkbox para lembrar do usuário */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="text-gray-700">
                Lembrar de mim
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
