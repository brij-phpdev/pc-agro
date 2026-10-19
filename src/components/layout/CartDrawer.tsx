import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    distrito: 'Lisboa',
    notas: ''
  });

  if (!isOpen) return null;

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingQuote(true);
    // Simulate instantaneous quote submission
    setTimeout(() => {
      setIsSubmittingQuote(false);
      setQuoteSuccess(true);
      setTimeout(() => {
        clearCart();
        setQuoteSuccess(false);
        closeCart();
      }, 2500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Scrim / Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-main-200 flex items-center justify-between bg-main-50/50">
            <div>
              <h2 className="text-lg font-semibold text-main-900">
                Lista de Cotação
              </h2>
              <p className="text-xs text-main-500">
                {items.length === 0 ? 'Sem artigos selecionados' : `${items.length} produto(s) para orçamento`}
              </p>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-main-400 hover:text-main-700 hover:bg-main-100 rounded-full transition-colors"
              aria-label="Fechar carrinho"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {quoteSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <CheckCircle2 size={56} className="text-emerald-600 animate-bounce" />
                <h3 className="text-lg font-bold text-main-900">
                  Pedido de Cotação Enviado!
                </h3>
                <p className="text-xs text-main-600 max-w-xs leading-relaxed">
                  A nossa equipa técnica e comercial irá processar o seu pedido com as melhores condições e entrará em contacto num prazo de 24 horas úteis.
                </p>
              </div>
            ) : items.length === 0 ? (
              /* Verified exact empty state from ledup.pt */
              <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-main-100 flex items-center justify-center text-main-400">
                  <ShoppingBag size={32} />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-medium text-main-800">
                    O seu carrinho está vazio.
                  </p>
                  <p className="text-xs text-main-500 max-w-xs">
                    Explore os nossos produtos e adicione os artigos que pretende orçamentar para o seu projeto.
                  </p>
                </div>
                <Link
                  to="/products-list"
                  onClick={closeCart}
                  className="mt-4 inline-flex items-center justify-center px-6 py-2.5 bg-main text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-main-900 transition-colors shadow-sm"
                >
                  Explorar Produtos
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                <ul className="divide-y divide-main-100">
                  {items.map((item, idx) => (
                    <li key={`${item.product.id}-${item.selectedVariation?.id || idx}`} className="py-4 flex gap-4">
                      <div className="w-20 h-20 bg-main-50 border border-main-200 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-semibold text-main-900 truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.selectedVariation?.id)}
                              className="text-main-400 hover:text-red-600 transition-colors p-1"
                              aria-label="Remover produto"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                          {item.selectedVariation && (
                            <p className="text-xs text-main-500 mt-0.5">
                              {Object.entries(item.selectedVariation.attributes)
                                .map(([k, v]) => `${k.toUpperCase()}: ${v}`)
                                .join(' | ')}
                            </p>
                          )}
                          <p className="text-xs font-medium text-main-700 mt-1">
                            Ref: {item.selectedVariation?.sku || item.product.sku}
                          </p>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border border-main-200 rounded bg-white">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedVariation?.id)}
                              className="p-1 text-main-500 hover:bg-main-100 transition-colors"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="px-2.5 text-xs font-semibold text-main-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedVariation?.id)}
                              className="p-1 text-main-500 hover:bg-main-100 transition-colors"
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          <span className="text-xs font-semibold text-main-800">
                            {item.selectedVariation?.price || item.product.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Direct Quotation Form Section */}
                <div className="bg-main-50 p-4 rounded-lg border border-main-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-main-700">
                    Dados para Envio do Orçamento
                  </h4>
                  <form onSubmit={handleQuoteSubmit} className="space-y-2.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Nome completo *"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-main-200 rounded focus:ring-1 focus:ring-main focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Empresa / NIF"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-main-200 rounded focus:ring-1 focus:ring-main focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Telefone *"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-main-200 rounded focus:ring-1 focus:ring-main focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email profissional *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-main-200 rounded focus:ring-1 focus:ring-main focus:outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={2}
                        placeholder="Notas adicionais sobre o projeto ou prazos..."
                        value={formData.notas}
                        onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-main-200 rounded focus:ring-1 focus:ring-main focus:outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmittingQuote}
                      className="w-full mt-2 py-2.5 px-4 bg-main hover:bg-main-900 text-white text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
                    >
                      {isSubmittingQuote ? (
                        'A Enviar Pedido...'
                      ) : (
                        <>
                          <Send size={14} />
                          Submeter Pedido de Cotação
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Footer action buttons */}
          {items.length > 0 && !quoteSuccess && (
            <div className="p-4 border-t border-main-200 bg-main-50/30 flex items-center justify-between">
              <button
                onClick={clearCart}
                className="text-xs text-main-500 hover:text-red-600 transition-colors"
              >
                Limpar Todos
              </button>
              <Link
                to="/products-list"
                onClick={closeCart}
                className="text-xs font-medium text-main hover:underline"
              >
                + Adicionar mais produtos
              </Link>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
