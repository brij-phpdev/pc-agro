import React, { useState, useMemo } from 'react';
import { documentsData } from '../data/documentsData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { FileText, Download, Search, BookOpen, Layers, Filter } from 'lucide-react';

export const DocumentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'catalogo' | 'ficha-tecnica'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const filteredDocs = useMemo(() => {
    return documentsData.filter(doc => {
      if (activeTab !== 'todos' && doc.category !== activeTab) {
        return false;
      }
      if (selectedCategory !== 'todas' && doc.productCategory !== selectedCategory) {
        return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          doc.title.toLowerCase().includes(q) ||
          (doc.description && doc.description.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [activeTab, selectedCategory, searchQuery]);

  const breadcrumbs = [
    { label: 'Documentação & Downloads' }
  ];

  return (
    <div className="bg-bg min-h-screen pb-24">
      {/* Top Banner */}
      <div className="bg-white border-b border-main-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
              Área de Documentação Oficial
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-main-900 mt-3 tracking-tight">
              Catálogos & Fichas Técnicas
            </h1>
            <p className="text-sm sm:text-base text-main-600 mt-2 leading-relaxed">
              Consulte e descarregue os ficheiros oficiais atualizados para projetos luminotécnicos: brochuras completas de produtos, curvas fotométricas e especificações normativas europeias.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* Controls Bar: Tabs & Search */}
        <div className="bg-white rounded-2xl p-5 border border-main-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Main Category Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'todos'
                  ? 'bg-main text-white shadow-2xs'
                  : 'bg-main-50 text-main-700 hover:bg-main-100'
              }`}
            >
              <Layers size={14} /> Todos os Documentos
            </button>
            <button
              id="catalogos"
              onClick={() => setActiveTab('catalogo')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'catalogo'
                  ? 'bg-main text-white shadow-2xs'
                  : 'bg-main-50 text-main-700 hover:bg-main-100'
              }`}
            >
              <BookOpen size={14} /> Catálogos 2025
            </button>
            <button
              id="fichas-tecnicas"
              onClick={() => setActiveTab('ficha-tecnica')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'ficha-tecnica'
                  ? 'bg-main text-white shadow-2xs'
                  : 'bg-main-50 text-main-700 hover:bg-main-100'
              }`}
            >
              <FileText size={14} /> Fichas Técnicas
            </button>
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-main-400" />
            <input
              type="text"
              placeholder="Pesquisar por catálogo ou modelo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-main-50 border border-main-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-main focus:bg-white"
            />
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map(doc => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-main-200 p-6 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    doc.category === 'catalogo'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : 'bg-main-100 text-main-800'
                  }`}>
                    {doc.category === 'catalogo' ? 'Catálogo Geral' : 'Ficha Técnica'}
                  </span>
                  <span className="text-xs font-mono text-main-400 font-semibold">
                    {doc.format} • {doc.fileSize}
                  </span>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-main-50 border border-main-200 flex items-center justify-center text-main flex-shrink-0 group-hover:scale-105 transition-transform">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-main-900 group-hover:text-main line-clamp-2">
                      {doc.title}
                    </h3>
                    {doc.description && (
                      <p className="text-xs text-main-500 mt-1 line-clamp-2 leading-relaxed">
                        {doc.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-main-100 flex items-center justify-between mt-6">
                <span className="text-[11px] text-main-400 font-medium">
                  {doc.year ? `Edição ${doc.year}` : 'Versão Atualizada'}
                </span>

                <a
                  href={doc.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-main hover:bg-main-900 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
                >
                  <Download size={13} />
                  Descarregar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
