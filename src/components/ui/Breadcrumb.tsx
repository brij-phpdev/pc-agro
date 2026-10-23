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
    <nav aria-label="Breadcrumb" className="py-4 text-xs text-moss-ink/70">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link to="/" className="flex items-center gap-1.5 hover:text-moss-green text-moss-ink/80 transition-colors font-medium">
            <Home size={13} className="text-moss-green" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight size={12} className="text-mist-grey flex-shrink-0" />
              <li>
                {item.href && !isLast ? (
                  <Link to={item.href} className="hover:text-moss-green text-moss-ink/80 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-moss-ink" aria-current="page">
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
