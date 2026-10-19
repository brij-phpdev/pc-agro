import React, { useState } from 'react';
import { ZoomIn, Maximize2, Download, ShieldCheck } from 'lucide-react';

interface TechnicalDrawingProps {
  imageSrc: string;
  productName: string;
  sku: string;
  datasheetUrl?: string;
}

export const TechnicalDrawing: React.FC<TechnicalDrawingProps> = ({
  imageSrc,
  productName,
  sku,
  datasheetUrl
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-main-200 p-6 shadow-soft space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-main-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-main-500">
            Cotas & Diagrama Dimensional
          </span>
          <h4 className="text-base font-bold text-main-900 mt-0.5">
            Esquema Técnico de Instalação — {sku}
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-main-200 text-xs font-semibold text-main-700 hover:bg-main-50 transition-colors"
          >
            <ZoomIn size={14} />
            {isZoomed ? 'Reduzir' : 'Ampliar Imagem'}
          </button>

          {datasheetUrl && (
            <a
              href={datasheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-main text-white text-xs font-semibold hover:bg-main-900 transition-colors"
            >
              <Download size={14} />
              Descarregar Ficha Completa
            </a>
          )}
        </div>
      </div>

      {/* Schematic Container */}
      <div
        className={`relative bg-main-50/50 rounded-xl p-4 flex items-center justify-center border border-main-100 transition-all duration-300 ${
          isZoomed ? 'min-h-[500px]' : 'min-h-[300px]'
        }`}
      >
        <img
          src={imageSrc}
          alt={`Esquema técnico e cotas de ${productName}`}
          className={`max-w-full object-contain transition-all duration-300 ${
            isZoomed ? 'scale-125' : 'scale-100'
          }`}
        />
        <div className="absolute bottom-3 right-3 text-[10px] text-main-400 font-mono bg-white/80 px-2 py-0.5 rounded border border-main-200">
          Dimensões em mm • Tolerância ±1mm
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-main-600">
        <div className="flex items-center gap-2 bg-main-50 p-3 rounded-lg border border-main-100">
          <ShieldCheck size={16} className="text-emerald-700 flex-shrink-0" />
          <span>Homologado para ensaio de fio incandescente 850°C</span>
        </div>
        <div className="flex items-center gap-2 bg-main-50 p-3 rounded-lg border border-main-100">
          <ShieldCheck size={16} className="text-emerald-700 flex-shrink-0" />
          <span>Isolamento elétrico Classe I / Classe II</span>
        </div>
        <div className="flex items-center gap-2 bg-main-50 p-3 rounded-lg border border-main-100">
          <ShieldCheck size={16} className="text-emerald-700 flex-shrink-0" />
          <span>Ficheiros fotométricos IES disponíveis</span>
        </div>
      </div>
    </div>
  );
};
