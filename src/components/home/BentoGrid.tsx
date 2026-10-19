import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Download, Store, Shield, Sparkles } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-main-500">
          Destaques
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-main-900 mt-2 tracking-tight">
          A informação certa no momento certo.
        </h2>
        <p className="text-sm sm:text-base text-main-600 mt-3 leading-relaxed">
          Acesso rápido a fichas técnicas, catálogos e novidades. Facilitamos o seu trabalho com documentação clara e organizada, permitindo decisões informadas e eficientes.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card 1: Fichas Técnicas (Large) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-main-200 shadow-soft hover:shadow-medium transition-all group flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4 relative z-10 max-w-md">
            <div className="w-12 h-12 rounded-xl bg-main-100 flex items-center justify-center text-main">
              <FileText size={24} />
            </div>
            <div>
              <span className="text-xs font-semibold text-main-500 uppercase tracking-wider">
                Documentação Oficial
              </span>
              <h3 className="text-2xl font-bold text-main-900 mt-1">
                Fichas Técnicas
              </h3>
              <p className="text-sm text-main-600 mt-2 leading-relaxed">
                Explore os nossos catálogos mais recentes, ensaios fotométricos e documentação técnica atualizada para todos os equipamentos.
              </p>
            </div>
            <Link
              to="/documents#fichas-tecnicas"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-main group-hover:text-main-900 border-b border-main pb-1 transition-all"
            >
              Consultar Fichas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          {/* Subtle background graphic */}
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-main-50 rounded-full opacity-60 pointer-events-none" />
        </div>

        {/* Card 2: ATHENA 3CCT (Product Highlight) */}
        <div className="bg-white rounded-2xl p-6 border border-main-200 shadow-soft hover:shadow-medium transition-all group flex flex-col justify-between">
          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-main-50 mb-4 border border-main-100 relative">
              <img
                src="https://cms.ledup.pt/wp-content/uploads/2026/02/Athena-950-1.jpg"
                alt="Luminária Rua ATHENA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-main-900 text-white text-[10px] font-semibold uppercase tracking-wider rounded">
                IP66 • IK08
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
              Iluminação de Rua
            </span>
            <h4 className="text-base font-bold text-main-900 mt-1">
              Luminária Rua ATHENA
            </h4>
            <div className="flex flex-col gap-1 mt-2 text-xs text-main-600">
              <span className="font-medium text-main-800">Multi Potência (60 / 80 / 100W)</span>
              <span>3CCT (2700K / 4200K / 5700K) • 150 Lm/W</span>
            </div>
          </div>
          <Link
            to="/product/athena-3cct"
            className="mt-4 pt-3 border-t border-main-100 flex items-center justify-between text-xs font-semibold text-main hover:text-main-900"
          >
            <span>Ver Ficha e Preços</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 3: 102 Lojas (Metric Counter) */}
        <div className="bg-main-900 text-white rounded-2xl p-8 flex flex-col justify-between shadow-soft hover:shadow-medium transition-all group">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
            <Store size={24} />
          </div>
          <div className="my-6">
            <span className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white block">
              102
            </span>
            <p className="text-sm font-medium text-main-200 mt-2">
              Lojas em território nacional
            </p>
            <p className="text-xs text-main-400 mt-1 leading-relaxed">
              Presença e stock imediato em todos os distritos de Portugal continental e ilhas.
            </p>
          </div>
          <Link
            to="/resellers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-white transition-colors"
          >
            Encontrar Loja Próxima <ArrowRight size={14} />
          </Link>
        </div>

        {/* Card 4: Portal de Revendedores */}
        <div className="bg-white rounded-2xl p-6 border border-main-200 shadow-soft hover:shadow-medium transition-all group flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-main-100 flex items-center justify-center text-main">
              <Shield size={20} />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-main-500">
                Parceiros Oficiais
              </span>
              <h4 className="text-lg font-bold text-main-900 mt-0.5">
                Revendedores
              </h4>
              <p className="text-xs text-main-600 mt-2 leading-relaxed">
                Tenha acesso à sua área reservada com tabelas de desconto profissional, fichas técnicas de homologação e prazos em tempo real.
              </p>
            </div>
          </div>
          <Link
            to="/resellers"
            className="mt-4 pt-3 border-t border-main-100 flex items-center justify-between text-xs font-semibold text-main hover:text-main-900"
          >
            <span>Área de Parceiro</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 5: ONYX 3CCT (Highbay Highlight) */}
        <div className="bg-white rounded-2xl p-6 border border-main-200 shadow-soft hover:shadow-medium transition-all group flex flex-col justify-between">
          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-main-50 mb-4 border border-main-100 relative">
              <img
                src="https://cms.ledup.pt/wp-content/uploads/2026/02/ONYX-200W.jpg"
                alt="Campânula ONYX 3CCT"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-amber-800 text-white text-[10px] font-semibold uppercase tracking-wider rounded">
                160 Lm/W
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
              Indústria & Naves
            </span>
            <h4 className="text-base font-bold text-main-900 mt-1">
              ONYX 3CCT Industrial
            </h4>
            <div className="flex flex-col gap-1 mt-2 text-xs text-main-600">
              <span className="font-medium text-main-800">Dimável 0-10V / PWM</span>
              <span>150~160 Lm/W • Eficiência Extrema</span>
            </div>
          </div>
          <Link
            to="/product/onyx-3cct"
            className="mt-4 pt-3 border-t border-main-100 flex items-center justify-between text-xs font-semibold text-main hover:text-main-900"
          >
            <span>Ver Especificações</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 6: Catálogo 2025 Download (Large) */}
        <div className="lg:col-span-2 bg-gradient-to-br from-main-800 to-main-900 text-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all group flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-4 max-w-sm z-10">
            <span className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-white/10">
              Download Oficial 2025
            </span>
            <h3 className="text-2xl font-bold text-white">
              Catálogo Geral 2025
            </h3>
            <p className="text-xs text-main-200 leading-relaxed">
              Explore a nossa gama completa com mais de 1.200 referências organizadas por espaço, tipologia e características técnicas.
            </p>
            <a
              href="https://cms.ledup.pt/wp-content/uploads/2025/10/ledup_catalogo_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-main-900 hover:bg-main-100 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-md"
            >
              <Download size={14} /> Descarregar PDF (48 MB)
            </a>
          </div>

          <div className="w-44 h-48 rounded-xl overflow-hidden shadow-2xl border border-white/20 flex-shrink-0 z-10 group-hover:scale-105 transition-transform duration-500">
            <img
              src="https://cms.ledup.pt/wp-content/uploads/2025/10/Catalogo-2025-Imagem-Brochura.jpg"
              alt="Capa Catálogo LEDUP 2025"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative radial gradient */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Card 7: ORBIS 3CCT */}
        <div className="bg-white rounded-2xl p-6 border border-main-200 shadow-soft hover:shadow-medium transition-all group flex flex-col justify-between">
          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-main-50 mb-4 border border-main-100 relative">
              <img
                src="https://cms.ledup.pt/wp-content/uploads/2026/02/ORBIS-18.jpg"
                alt="Painel LED ORBIS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-main-800 text-white text-[10px] font-semibold uppercase tracking-wider rounded">
                IP54
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
              Painéis & Escritórios
            </span>
            <h4 className="text-base font-bold text-main-900 mt-1">
              ORBIS 3CCT IP54
            </h4>
            <div className="flex flex-col gap-1 mt-2 text-xs text-main-600">
              <span className="font-medium text-main-800">Painel LED IP54</span>
              <span>UGR &lt; 19 • Conforto Visual</span>
            </div>
          </div>
          <Link
            to="/product/orbis-3cct"
            className="mt-4 pt-3 border-t border-main-100 flex items-center justify-between text-xs font-semibold text-main hover:text-main-900"
          >
            <span>Ver Ficha e Dimensões</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
