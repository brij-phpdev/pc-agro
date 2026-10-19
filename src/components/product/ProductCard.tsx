import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Plus, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-main-200 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-[4/3] bg-main-50/70 p-4 flex items-center justify-center overflow-hidden border-b border-main-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            {product.badge && (
              <span className="px-2.5 py-0.5 rounded bg-main-900 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}
            {product.ipRating && (
              <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs text-main-800 text-[10px] font-semibold border border-main-200 shadow-2xs">
                {product.ipRating}
              </span>
            )}
          </div>

          {/* Quick Add to Quote floating button */}
          <button
            onClick={() => addToCart(product)}
            className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-main hover:text-white text-main-800 shadow-md transition-colors border border-main-200 group/btn"
            title="Adicionar à cotação"
            aria-label={`Adicionar ${product.name} à cotação`}
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Content Details */}
        <div className="p-5 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-main-500 font-medium">
            <span className="uppercase tracking-wider">{product.category}</span>
            <span className="font-mono text-main-400">Ref: {product.sku}</span>
          </div>

          <Link to={`/product/${product.slug}`}>
            <h3 className="text-base font-bold text-main-900 group-hover:text-main line-clamp-1 transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-main-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Feature Micro-Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {product.cctOptions && product.cctOptions.length > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] font-medium border border-amber-200/60">
                <Zap size={10} /> 3CCT
              </span>
            )}
            {product.dimmable && (
              <span className="px-2 py-0.5 rounded bg-main-100 text-main-700 text-[10px] font-medium">
                Dimável
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-main-100 text-main-700 text-[10px] font-medium">
              <ShieldCheck size={10} /> 5 Anos
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5 pt-3 border-t border-main-100 flex items-center justify-between bg-main-50/30">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-main-400 block font-medium">
            Preço Indicativo
          </span>
          <span className="text-sm font-bold text-main-900">
            {product.price}
          </span>
        </div>

        <Link
          to={`/product/${product.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-main hover:text-main-900 group/link"
        >
          <span>Ficha Técnica</span>
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
