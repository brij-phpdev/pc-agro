import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs text-main-500">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-main-900 transition-colors">
            <Home size={13} />
            <span>Início</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight size={12} className="text-main-300 flex-shrink-0" />
              <li>
                {item.href && !isLast ? (
                  <Link to={item.href} className="hover:text-main-900 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-main-900" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
