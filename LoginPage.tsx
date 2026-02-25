import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Sparkles, ArrowRight, Github, Chrome } from "lucide-react";

interface LoginPageProps {
  onLogin: (user: { name: string; email: string }) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    if (isRegister && !name) {
      setError("Preencha seu nome.");
      return;
    }

    setIsLoading(true);

    // Simula uma requisição
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Login fictício - aceita qualquer credencial
    const userName = isRegister ? name : email.split("@")[0];
    onLogin({
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email,
    });

    setIsLoading(false);
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    onLogin({
      name: `Usuário ${provider}`,
      email: `user@${provider.toLowerCase()}.com`,
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="text-2xl font-bold tracking-tight">NexusApp</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Transforme suas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
              ideias em realidade
            </span>
          </h1>
          <p className="text-lg text-indigo-100/80 max-w-md leading-relaxed">
            A plataforma completa para gerenciar projetos, colaborar com equipes e alcançar resultados extraordinários.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["bg-pink-400", "bg-yellow-400", "bg-green-400", "bg-blue-400"].map((color, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${color} border-2 border-indigo-600 flex items-center justify-center text-xs font-bold text-white`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold">+12.000 usuários</p>
              <p className="text-sm text-indigo-200/70">confiam na NexusApp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lado direito - Formulário */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden flex items-center gap-3 mb-10 justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">NexusApp</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {isRegister ? "Criar conta" : "Bem-vindo de volta"}
            </h2>
            <p className="text-gray-500 mt-2">
              {isRegister
                ? "Crie sua conta para começar a usar"
                : "Entre com suas credenciais para acessar"}
            </p>
          </div>

          {/* Social Login */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => handleSocialLogin("Google")}
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all duration-200 text-sm font-medium text-gray-700 disabled:opacity-50 cursor-pointer"
            >
              <Chrome className="w-5 h-5" />
              Google
            </button>
            <button
              onClick={() => handleSocialLogin("GitHub")}
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all duration-200 text-sm font-medium text-gray-700 disabled:opacity-50 cursor-pointer"
            >
              <Github className="w-5 h-5" />
              GitHub
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-50 px-4 text-gray-400">ou continue com email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome</label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full pl-4 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-gray-900 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isRegister && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                  />
                  <span className="text-sm text-gray-600">Lembrar-me</span>
                </label>
                <button type="button" className="text-sm text-violet-600 hover:text-violet-700 font-medium cursor-pointer">
                  Esqueci a senha
                </button>
              </div>
            )}

            {error && (
              <div className="bg-red-50 text-red-600 text-sm py-3 px-4 rounded-xl border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-violet-200 disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isRegister ? "Criar conta" : "Entrar"}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-500 text-sm">
            {isRegister ? "Já tem uma conta?" : "Não tem uma conta?"}{" "}
            <button
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
              }}
              className="text-violet-600 hover:text-violet-700 font-semibold cursor-pointer"
            >
              {isRegister ? "Entrar" : "Criar conta"}
            </button>
          </p>

          <p className="text-center mt-6 text-xs text-gray-400">
            🔓 Sistema de teste — qualquer email e senha funcionam
          </p>
        </div>
      </div>
    </div>
  );
}
