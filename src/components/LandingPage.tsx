import { useState, useEffect } from "react";
import {
  Sparkles,
  LogOut,
  Menu,
  X,
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  Layers,
  Star,
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Send,
  MessageCircle,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";

interface LandingPageProps {
  user: { name: string; email: string };
  onLogout: () => void;
}

export function LandingPage({ user, onLogout }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => setContactSent(false), 3000);
    setContactForm({ name: "", email: "", message: "" });
  };

  const navLinks = ["Recursos", "Preços", "Depoimentos", "FAQ", "Contato"];

  const features = [
    { icon: Zap, title: "Ultra Rápido", desc: "Performance otimizada com carregamento instantâneo e zero latência.", color: "from-yellow-400 to-orange-500" },
    { icon: Shield, title: "Seguro", desc: "Criptografia de ponta e proteção avançada dos seus dados.", color: "from-green-400 to-emerald-500" },
    { icon: BarChart3, title: "Analytics", desc: "Dashboards inteligentes com insights em tempo real.", color: "from-blue-400 to-cyan-500" },
    { icon: Users, title: "Colaboração", desc: "Trabalhe em equipe com ferramentas de comunicação integradas.", color: "from-purple-400 to-violet-500" },
    { icon: Globe, title: "Global", desc: "Disponível em mais de 50 países com suporte multilíngue.", color: "from-pink-400 to-rose-500" },
    { icon: Layers, title: "Integrações", desc: "Conecte com +200 ferramentas que você já utiliza.", color: "from-indigo-400 to-blue-500" },
  ];

  const plans = [
    {
      name: "Starter",
      price: "Grátis",
      period: "",
      desc: "Para quem está começando",
      features: ["1 projeto", "5 membros", "1GB armazenamento", "Suporte por email"],
      popular: false,
      cta: "Começar Grátis",
    },
    {
      name: "Pro",
      price: "R$49",
      period: "/mês",
      desc: "Para equipes em crescimento",
      features: ["Projetos ilimitados", "50 membros", "100GB armazenamento", "Suporte prioritário", "Analytics avançado", "API access"],
      popular: true,
      cta: "Assinar Pro",
    },
    {
      name: "Enterprise",
      price: "R$199",
      period: "/mês",
      desc: "Para grandes empresas",
      features: ["Tudo do Pro", "Membros ilimitados", "Armazenamento ilimitado", "SLA 99.99%", "Gerente dedicado", "SSO & SAML", "Auditoria completa"],
      popular: false,
      cta: "Falar com Vendas",
    },
  ];

  const testimonials = [
    { name: "Ana Costa", role: "CEO, TechStart", text: "A NexusApp revolucionou como gerenciamos nossos projetos. Produtividade aumentou em 300%!", avatar: "A", color: "bg-pink-500" },
    { name: "Carlos Silva", role: "CTO, InnovateBR", text: "Melhor plataforma que já usei. A integração com nossas ferramentas foi perfeita.", avatar: "C", color: "bg-blue-500" },
    { name: "Marina Santos", role: "PM, DigitalCo", text: "Incrível o nível de detalhe nas análises. Conseguimos tomar decisões muito mais rápido.", avatar: "M", color: "bg-green-500" },
    { name: "Pedro Lima", role: "Founder, Nexus Labs", text: "O suporte é excepcional. Sempre que precisamos, a equipe estava pronta para ajudar.", avatar: "P", color: "bg-purple-500" },
  ];

  const stats = [
    { icon: Users, value: "12K+", label: "Usuários Ativos" },
    { icon: TrendingUp, value: "98%", label: "Satisfação" },
    { icon: Award, value: "50+", label: "Países" },
    { icon: Clock, value: "99.9%", label: "Uptime" },
  ];

  const faqs = [
    { q: "Como funciona o período de teste?", a: "Você pode testar todos os recursos do plano Pro gratuitamente por 14 dias. Não é necessário cartão de crédito." },
    { q: "Posso mudar de plano a qualquer momento?", a: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. A cobrança será proporcional." },
    { q: "Meus dados estão seguros?", a: "Absolutamente. Usamos criptografia AES-256, servidores redundantes e backups automáticos diários." },
    { q: "Vocês oferecem suporte em português?", a: "Sim! Nossa equipe de suporte é totalmente brasileira e está disponível de segunda a sexta, das 8h às 20h." },
    { q: "É possível integrar com outras ferramentas?", a: "Sim, temos mais de 200 integrações disponíveis, incluindo Slack, Jira, Trello, Google Workspace e muito mais." },
  ];

  const tabContents = [
    { title: "Gerenciamento de Projetos", desc: "Organize tarefas, defina prazos e acompanhe o progresso com quadros Kanban intuitivos e gráficos de Gantt interativos.", items: ["Quadros Kanban", "Gráficos de Gantt", "Automações", "Templates"] },
    { title: "Colaboração em Equipe", desc: "Comunique-se em tempo real com chat integrado, videoconferência e compartilhamento de arquivos sem limites.", items: ["Chat em tempo real", "Videoconferência", "Compartilhamento", "Comentários"] },
    { title: "Relatórios & Analytics", desc: "Tome decisões baseadas em dados com dashboards personalizáveis e relatórios automatizados.", items: ["Dashboards", "Exportação", "Métricas KPI", "Previsões IA"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">NexusApp</span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {user.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-600 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-gray-600 hover:text-violet-600 py-2"
                >
                  {link}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <button onClick={onLogout} className="text-sm text-red-500 font-medium cursor-pointer">
                  Sair
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-white" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Olá, {user.name}! Bem-vindo à NexusApp</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            A única plataforma que
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">
              entrega resultado
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Gerencie projetos, colabore com sua equipe e alcance metas extraordinárias com a plataforma mais completa do mercado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-violet-200 cursor-pointer">
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
              <MessageCircle className="w-5 h-5" />
              Ver Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <stat.icon className="w-6 h-6 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Recursos</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Tudo que você precisa
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Ferramentas poderosas para cada etapa do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Como funciona</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3">
              Explore nossos módulos
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Projetos", "Colaboração", "Analytics"].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === i
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {tabContents[activeTab].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {tabContents[activeTab].desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {tabContents[activeTab].items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-violet-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-3">
                    {[85, 65, 90, 45, 75].map((width, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex-shrink-0 ${
                          ["bg-violet-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"][i]
                        }`} />
                        <div className="flex-1">
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${
                                ["from-violet-400 to-violet-600", "from-blue-400 to-blue-600", "from-green-400 to-green-600", "from-yellow-400 to-yellow-600", "from-pink-400 to-pink-600"][i]
                              }`}
                              style={{ width: `${width}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-gray-500 w-8">{width}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preços" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Preços</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Planos para cada necessidade
            </h2>
            <p className="text-lg text-gray-500">Comece grátis e escale conforme crescer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-2xl shadow-violet-200 scale-105"
                    : "bg-white border border-gray-200 hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-indigo-100" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-indigo-200" : "text-violet-600"}`} />
                      <span className={`text-sm ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                    plan.popular
                      ? "bg-white text-violet-600 hover:bg-gray-50"
                      : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          {/* Carousel */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600" />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className={`w-12 h-12 ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentTestimonial ? "bg-violet-600 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* All testimonial cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Contato</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Fale conosco
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Tem alguma dúvida ou sugestão? Nossa equipe está pronta para ajudar. Envie uma mensagem e responderemos em até 24 horas.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "contato@nexusapp.com.br" },
                  { label: "Telefone", value: "+55 (11) 9999-9999" },
                  { label: "Endereço", value: "São Paulo, SP - Brasil" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center">
                      <Send className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              {contactSent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-500">Responderemos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Como podemos ajudar?"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-violet-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Pronto para começar?
              </h2>
              <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
                Junte-se a mais de 12.000 empresas que já transformaram seus resultados com a NexusApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-violet-600 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer">
                  Começar Gratuitamente
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  Agendar Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">NexusApp</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Transformando a forma como equipes trabalham e colaboram.
              </p>
            </div>
            {[
              { title: "Produto", links: ["Recursos", "Preços", "Integrações", "Changelog"] },
              { title: "Empresa", links: ["Sobre", "Blog", "Carreiras", "Parceiros"] },
              { title: "Suporte", links: ["Central de Ajuda", "API Docs", "Status", "Contato"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2024 NexusApp. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> no Brasil
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
