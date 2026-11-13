import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from "lucide-react";
import logo from '../logoinfotech.png';
import { company, whatsappLink } from '@/lib/company';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: isHome ? '#home' : '/', type: isHome ? 'hash' : 'route' as const },
    { name: 'Serviços', href: isHome ? '#servicos' : '/desenvolvimento-de-sistemas-andradina-sp', type: isHome ? 'hash' : 'route' as const },
    { name: 'Projetos', href: '/projetos', type: 'route' as const },
    { name: 'Conteúdo', href: '/conteudo', type: 'route' as const },
    { name: 'Região', href: '/atuacao-regional', type: 'route' as const },
    { name: 'Contato', href: isHome ? '#contact' : '/#contact', type: isHome ? 'hash' : 'route' as const },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 navbar ${
      isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-2'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label={`${company.shortName} — início`}>
          <img src={logo} alt={`Logo ${company.shortName}`} className="h-10 w-auto logo" width={120} height={40} />
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) =>
            item.type === 'route' || item.href.startsWith('/') ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-portfolio-violet transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-portfolio-violet transition-colors"
              >
                {item.name}
              </a>
            )
          )}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-portfolio-indigo hover:bg-portfolio-violet text-white text-sm px-4 py-2 rounded-md transition-colors"
          >
            Orçamento
          </a>
        </div>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) =>
              item.type === 'route' || item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-base font-medium text-gray-700 hover:text-portfolio-violet transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-portfolio-violet transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-portfolio-indigo hover:bg-portfolio-violet text-white transition-colors w-full mt-2 px-4 py-2 rounded inline-block text-center"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
