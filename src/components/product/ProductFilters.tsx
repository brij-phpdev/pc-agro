import React from 'react';
import { categoriesData } from '../../data/categoriesData';
import { Search, RotateCcw, Filter } from 'lucide-react';

interface ProductFiltersProps {
  selectedParentCat: string;
  selectedChildCat: string;
  selectedIp: string;
  searchQuery: string;
  onParentCatChange: (slug: string) => void;
  onChildCatChange: (slug: string) => void;
  onIpChange: (ip: string) => void;
  onSearchChange: (q: string) => void;
  onReset: () => void;
  totalResults: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedParentCat,
  selectedChildCat,
  selectedIp,
  searchQuery,
  onParentCatChange,
  onChildCatChange,
  onIpChange,
  onSearchChange,
  onReset,
  totalResults
}) => {
  const currentParent = categoriesData.find(c => c.slug === selectedParentCat);
  const ipOptions = ['Todos', 'IP20', 'IP40', 'IP44', 'IP54', 'IP65', 'IP66', 'IP67'];

  return (
    <aside className="bg-white rounded-2xl border border-main-200 p-6 shadow-soft space-y-6">
      <div className="flex items-center justify-between border-b border-main-100 pb-4">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-main" />
          <h3 className="text-base font-bold text-main-900">
            Filtros
          </h3>
        </div>
        <span className="text-xs font-semibold text-main-500 bg-main-100 px-2.5 py-0.5 rounded-full">
          {totalResults} produtos
        </span>
      </div>

      {/* Search Input */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-main-500">
          Pesquisa por Nome / Ref
        </label>
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-main-400" />
          <input
            type="text"
            placeholder="Ex: Athena, IP66, 3CCT..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main focus:bg-white"
          />
        </div>
      </div>

      {/* Parent Category Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-main-500">
          Gama de Iluminação
        </label>
        <div className="space-y-1">
          <button
            onClick={() => {
              onParentCatChange('');
              onChildCatChange('');
            }}
            className={`w-full text-left px-3 py-2 text-xs rounded-lg font-medium transition-colors ${
              !selectedParentCat
                ? 'bg-main text-white'
                : 'text-main-700 hover:bg-main-50'
            }`}
          >
            Todas as Gamas
          </button>
          {categoriesData.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                onParentCatChange(cat.slug);
                onChildCatChange('');
              }}
              className={`w-full text-left px-3 py-2 text-xs rounded-lg font-medium transition-colors ${
                selectedParentCat === cat.slug
                  ? 'bg-main text-white'
                  : 'text-main-700 hover:bg-main-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Filter (if parent selected) */}
      {currentParent && currentParent.children && currentParent.children.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-main-100">
          <label className="text-xs font-semibold uppercase tracking-wider text-main-500">
            Subcategoria em {currentParent.name}
          </label>
          <div className="space-y-1">
            <button
              onClick={() => onChildCatChange('')}
              className={`w-full text-left px-3 py-1.5 text-xs rounded-md transition-colors ${
                !selectedChildCat
                  ? 'bg-main-200 text-main-900 font-semibold'
                  : 'text-main-600 hover:bg-main-50'
              }`}
            >
              Todas as Subcategorias
            </button>
            {currentParent.children.map(sub => (
              <button
                key={sub.id}
                onClick={() => onChildCatChange(sub.slug)}
                className={`w-full text-left px-3 py-1.5 text-xs rounded-md transition-colors ${
                  selectedChildCat === sub.slug
                    ? 'bg-main-200 text-main-900 font-semibold'
                    : 'text-main-600 hover:bg-main-50'
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* IP Rating Filter */}
      <div className="space-y-2 pt-2 border-t border-main-100">
        <label className="text-xs font-semibold uppercase tracking-wider text-main-500">
          Grau de Estanqueidade (IP)
        </label>
        <div className="flex flex-wrap gap-1.5">
          {ipOptions.map(ip => (
            <button
              key={ip}
              onClick={() => onIpChange(ip === 'Todos' ? '' : ip)}
              className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                (ip === 'Todos' && !selectedIp) || selectedIp === ip
                  ? 'bg-main text-white font-bold'
                  : 'bg-main-50 text-main-700 hover:bg-main-100 border border-main-200'
              }`}
            >
              {ip}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      {(selectedParentCat || selectedChildCat || selectedIp || searchQuery) && (
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-main-600 hover:text-red-700 border border-main-200 rounded-lg hover:bg-red-50/50 transition-colors"
        >
          <RotateCcw size={13} />
          Limpar Todos os Filtros
        </button>
      )}
    </aside>
  );
};
