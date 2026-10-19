import React, { useState, useMemo } from 'react';
import { resellersData } from '../data/resellersData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { MapPin, Phone, Mail, Store, CheckCircle2, Search, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

export const ResellersPage: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('todos');
  const [searchCity, setSearchCity] = useState('');
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerFormSuccess, setPartnerFormSuccess] = useState(false);

  const districts = ['todos', ...Array.from(new Set(resellersData.map(r => r.district)))];

  const filteredStores = useMemo(() => {
    return resellersData.filter(store => {
      if (selectedDistrict !== 'todos' && store.district !== selectedDistrict) {
        return false;
      }
      if (searchCity) {
        const q = searchCity.toLowerCase();
        return (
          store.name.toLowerCase().includes(q) ||
          store.city.toLowerCase().includes(q) ||
          store.address.toLowerCase().includes(q) ||
          store.district.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedDistrict, searchCity]);

  const breadcrumbs = [
    { label: 'Rede de Revendedores' }
  ];

  return (
    <div className="bg-bg min-h-screen pb-24">
      {/* Top Banner */}
      <div className="bg-white border-b border-main-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
              Presença Nacional • 102 Lojas
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-main-900 mt-3 tracking-tight">
              Encontre o parceiro mais próximo de si
            </h1>
            <p className="text-sm sm:text-base text-main-600 mt-2 leading-relaxed">
              A LEDUP distribui os seus produtos através de uma rede selecionada de distribuidores e parceiros profissionais especializados em material elétrico e soluções luminotécnicas em Portugal continental e regiões autónomas.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        {/* District Filter & Search Toolbar */}
        <div className="bg-white rounded-2xl p-6 border border-main-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
          {/* District Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {districts.map(dist => (
              <button
                key={dist}
                onClick={() => setSelectedDistrict(dist)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDistrict === dist
                    ? 'bg-main text-white shadow-2xs'
                    : 'bg-main-50 text-main-700 hover:bg-main-100'
                }`}
              >
                {dist === 'todos' ? 'Todos os Distritos' : dist}
              </button>
            ))}
          </div>

          {/* Search by City */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-main-400" />
            <input
              type="text"
              placeholder="Filtrar por cidade ou loja..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-main-50 border border-main-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-main focus:bg-white"
            />
          </div>
        </div>

        {/* Resellers Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map(store => (
            <div
              key={store.id}
              className="bg-white rounded-2xl border border-main-200 p-6 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-main-100 text-main-800 text-[10px] font-bold uppercase tracking-wider">
                    {store.district}
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} /> Parceiro Autorizado
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-main-900">
                    {store.name}
                  </h3>
                  <div className="mt-3 space-y-2 text-xs text-main-600">
                    <div className="flex items-start gap-2">
                      <MapPin size={15} className="text-main-400 mt-0.5 flex-shrink-0" />
                      <span>{store.address}, {store.postalCode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-main-400 flex-shrink-0" />
                      <a href={`tel:${store.phone.replace(/\s+/g, '')}`} className="font-semibold text-main-900 hover:underline">
                        {store.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={15} className="text-main-400 flex-shrink-0" />
                      <a href={`mailto:${store.email}`} className="text-main-700 hover:underline">
                        {store.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Store Services */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-main-400 block mb-1.5">
                    Serviços Disponíveis na Loja:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {store.services.map((svc, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-main-50 text-main-700 text-[11px] border border-main-200">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-main-100 mt-6 flex items-center justify-between text-xs">
                <span className="text-main-400">Cidade: {store.city}</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} ${store.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-main hover:underline inline-flex items-center gap-1"
                >
                  Ver no Mapa <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Application Banner for New Resellers */}
        <div className="bg-gradient-to-r from-main-900 via-main-800 to-main-900 text-white rounded-3xl p-8 sm:p-12 border border-main-700 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Programa de Parcerias LEDUP
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pretende comercializar as soluções LEDUP na sua região?
            </h3>
            <p className="text-xs sm:text-sm text-main-300 leading-relaxed font-light">
              Oferecemos condições comerciais exclusivas para revendedores autorizados, apoio luminotécnico para grandes obras, mostruários de showroom e fornecimento rápido a partir dos nossos armazéns centrais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-6 py-3.5 bg-white text-main-900 hover:bg-main-100 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <UserCheck size={16} /> Candidatar Loja a Revendedor
            </button>
          </div>
        </div>
      </div>

      {/* Partner Application Modal */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-main-200 relative animate-fadeIn">
            {partnerFormSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 size={54} className="text-emerald-600 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-main-900">
                  Candidatura Submetida com Sucesso!
                </h3>
                <p className="text-xs text-main-600 leading-relaxed max-w-xs mx-auto">
                  O nosso departamento de expansão comercial irá avaliar os dados da sua empresa e entrará em contacto dentro de 48 horas úteis.
                </p>
                <button
                  onClick={() => {
                    setPartnerFormSuccess(false);
                    setIsPartnerModalOpen(false);
                  }}
                  className="px-6 py-2.5 bg-main text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700">
                      Adesão à Rede
                    </span>
                    <h3 className="text-xl font-bold text-main-900 mt-0.5">
                      Candidatura a Revendedor Oficial
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsPartnerModalOpen(false)}
                    className="p-1 text-main-400 hover:text-main-700 rounded-full"
                  >
                    ✕
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setPartnerFormSuccess(true);
                  }}
                  className="space-y-3.5 text-xs"
                >
                  <div>
                    <label className="font-semibold text-main-700 block mb-1">Nome da Empresa / Razão Social *</label>
                    <input required type="text" placeholder="Ex: Eletromateriais Lda." className="w-full px-3 py-2 bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold text-main-700 block mb-1">NIF / Número Fiscal *</label>
                      <input required type="text" placeholder="500000000" className="w-full px-3 py-2 bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main" />
                    </div>
                    <div>
                      <label className="font-semibold text-main-700 block mb-1">Distrito da Sede *</label>
                      <select className="w-full px-3 py-2 bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main font-medium">
                        {districts.filter(d => d !== 'todos').map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold text-main-700 block mb-1">Telefone de Contacto *</label>
                      <input required type="tel" placeholder="+351 900 000 000" className="w-full px-3 py-2 bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main" />
                    </div>
                    <div>
                      <label className="font-semibold text-main-700 block mb-1">Email Profissional *</label>
                      <input required type="email" placeholder="comercial@empresa.pt" className="w-full px-3 py-2 bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main" />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-main-700 block mb-1">Morada da Loja / Armazém *</label>
                    <input required type="text" placeholder="Rua, Número, Código Postal e Localidade" className="w-full px-3 py-2 bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main" />
                  </div>
                  <div>
                    <label className="font-semibold text-main-700 block mb-1">Informações Adicionais (Ano de início, gama pretendida...)</label>
                    <textarea rows={2} className="w-full px-3 py-2 bg-main-50 border border-main-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-main resize-none" placeholder="Breve nota sobre a sua atividade..." />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-main text-white hover:bg-main-900 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-md mt-2"
                  >
                    Submeter Candidatura
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
