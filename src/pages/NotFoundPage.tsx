import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sun, ArrowUpRight, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-28 bg-chalk">
      <div className="max-w-md w-full bg-white rounded-[32px] p-8 sm:p-12 border border-stone/70 shadow-soft text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest-100 text-forest flex items-center justify-center mx-auto">
          <Sun size={32} className="text-forest-700" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-extrabold text-forest tracking-tight block">
            404
          </span>
          <h1 className="text-xl font-bold text-forest">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-forest-600 leading-relaxed">
            The solar page or resource you are looking for may have been moved or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-forest hover:bg-forest-800 text-chalk text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2 shadow-soft"
          >
            <Home size={14} /> Back to Home
          </Link>
          <Link
            to="/solutions"
            className="w-full sm:w-auto px-6 py-3 bg-chalk hover:bg-stone-200 text-forest text-xs font-semibold rounded-full border border-stone transition-colors flex items-center justify-center gap-2"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
