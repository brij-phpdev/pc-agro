import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, Leaf, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PinnedTab {
  id: string;
  tabTitle: string;
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
  image: string;
}

const pinnedData: PinnedTab[] = [
  {
    id: 'inovacao',
    tabTitle: 'Inovação',
    title: 'Para quem exige mais da iluminação',
    description: 'A LEDUP transforma luz em soluções inovadoras que fazem a diferença. Antecipamos necessidades e apostamos em tecnologia que resulte numa iluminação LED capaz de responder ao que precisa, e ao que ainda nem sabia que precisava. Funcionalidade, eficiência e desempenho pensados para quem exige mais.',
    bgColor: '#4f4741',
    icon: <Lightbulb size={20} />,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'qualidade',
    tabTitle: 'Qualidade',
    title: 'Para quem não abdica da excelência',
    description: 'Temos um compromisso real com a qualidade. Garantimos produtos testados, certificados e desenvolvidos com rigor, sempre com foco na durabilidade, segurança e fiabilidade. Cada detalhe é pensado para garantir um desempenho consistente, hoje e ao longo do tempo.',
    bgColor: '#554d46',
    icon: <ShieldCheck size={20} />,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eficiencia',
    tabTitle: 'Eficiência',
    title: 'Para quem valoriza cada recurso',
    description: 'Desenvolvemos soluções de iluminação LED que maximizam o desempenho energético, reduzindo consumos e custos operacionais. Apostar na eficiência é promover não só a poupança, mas também a sustentabilidade. Porque a boa utilização de recursos é uma escolha inteligente, responsável e duradoura.',
    bgColor: '#5f5751',
    icon: <BarChart2 size={20} />,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'competencia',
    tabTitle: 'Competência',
    title: 'Para quem procura soluções nas mãos certas',
    description: 'A equipa LEDUP alia conhecimento técnico, experiência e profissionalismo para entregar soluções fiáveis e consistentes. Mais do que saber fazer, sabemos como fazer. Com rigor, confiança e competência em cada etapa.',
    bgColor: '#69625c',
    icon: <CheckCircle2 size={20} />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'sustentabilidade',
    tabTitle: 'Sustentabilidade',
    title: 'Para quem faz da sustentabilidade um princípio, não uma tendência',
    description: 'Atuamos com responsabilidade, contribuindo para um futuro mais verde através de práticas e produtos que respeitam o planeta, reduzem a pegada de carbono e promovem a circularidade de matérias-primas nobres como o alumínio reciclável.',
    bgColor: '#736c67',
    icon: <Leaf size={20} />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  }
];

export const PinnedFeatures: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = pinnedData[selectedIdx];

  return (
    <section
      className="py-24 text-white transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: current.bgColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 pb-4 border-b border-white/20">
          {pinnedData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedIdx === idx
                  ? 'bg-white text-main-900 shadow-lg scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.tabTitle}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Pilar {selectedIdx + 1} de 5 — {current.tabTitle}
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {current.title}
            </h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
              {current.description}
            </p>
            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-main-900 hover:bg-main-100 rounded text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                Conhecer os Nossos Padrões <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
