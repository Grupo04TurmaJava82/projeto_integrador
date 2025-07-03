import React from "react";
import { Play, Calendar, TrendingUp, Users, Star } from "lucide-react";
import logo from "../../assets/gm.svg";

const features = [
  { icon: <Play size={24} />, title: 'Início Imediato', description: 'Comece seus treinos a qualquer momento.' },
  { icon: <Calendar size={24} />, title: 'Agenda Personalizada', description: 'Monte seu cronograma de treinos.' },
  { icon: <TrendingUp size={24} />, title: 'Resultados Visíveis', description: 'Monitore seu progresso com clareza.' },
  { icon: <Users size={24} />, title: 'Comunidade Ativa', description: 'Interaja com outros usuários.' },
  { icon: <Star size={24} />, title: 'Recompensas Exclusivas', description: 'Ganhe pontos e troque por benefícios.' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d8e1e7] text-[#2a231f]">
      {/* Header */}
      <header className="bg-[#00335F] text-white py-12 px-6 text-center shadow-md flex flex-col items-center gap-4">
        {/* Logo */}
        <img src={logo} alt="Logo Gymbro" className="h-100" />
        <p className="text-lg">Seu parceiro ideal para treinar com disciplina, foco e motivação.</p>
      </header>

      {/* Seção de Destaques */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all border border-[#00478f]/10">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff5d00] text-white mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-[#2a231f]/70">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Chamada para ação */}
      <section className="bg-[#00335F] text-white text-center py-20 px-6 mt-12">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua rotina?</h2>
        <p className="mb-6">Cadastre-se agora e junte-se a milhares de pessoas focadas em alcançar seus objetivos.</p>
        <button className="bg-[#ff5d00] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e65300] transition">
          Começar Agora
        </button>
      </section>
    </main>
  );
}
