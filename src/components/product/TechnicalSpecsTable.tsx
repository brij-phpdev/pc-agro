import React, { useState } from 'react';
import { TechnicalAttribute } from '../../types';
import { SlidersHorizontal } from 'lucide-react';

interface TechnicalSpecsTableProps {
  specifications: TechnicalAttribute[];
}

export const TechnicalSpecsTable: React.FC<TechnicalSpecsTableProps> = ({ specifications }) => {
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Parâmetros' },
    { id: 'eletrico', label: 'Elétricos' },
    { id: 'optico', label: 'Óticos & Luz' },
    { id: 'mecanico', label: 'Mecânicos & IP' },
    { id: 'geral', label: 'Gerais & Normas' }
  ];

  const filteredSpecs = filterCategory === 'todos'
    ? specifications
    : specifications.filter(s => s.category === filterCategory);

  return (
    <div className="space-y-4">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <SlidersHorizontal size={14} className="text-main-400 flex-shrink-0 mr-1" />
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilterCategory(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              filterCategory === cat.id
                ? 'bg-main text-white shadow-2xs'
                : 'bg-white border border-main-200 text-main-600 hover:bg-main-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Specifications Table */}
      <div className="bg-white rounded-xl border border-main-200 overflow-hidden shadow-soft">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-main-50/70 border-b border-main-200 text-main-500 font-semibold uppercase text-[11px] tracking-wider">
              <th className="px-6 py-3.5 w-1/2">Parâmetro Técnico</th>
              <th className="px-6 py-3.5 w-1/2">Especificação Nominal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-main-100">
            {filteredSpecs.map((spec, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-main-50/30 hover:bg-main-50/60 transition-colors'}
              >
                <td className="px-6 py-3.5 font-medium text-main-800">
                  {spec.label}
                </td>
                <td className="px-6 py-3.5 text-main-900 font-semibold font-mono">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
