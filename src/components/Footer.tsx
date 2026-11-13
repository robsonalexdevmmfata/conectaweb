import React from 'react';
import { Link } from 'react-router-dom';
import { company } from '@/lib/company';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12" aria-label={`Rodapé ${company.legalName}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-portfolio-blue mb-2 inline-block">
              Info <span className="text-portfolio-accent">Tech</span>
            </Link>
            <p className="text-gray-600 mb-1 text-sm font-medium">Agência de Tecnologia EPP</p>
            <p className="text-gray-500 text-xs mb-4">{company.city} — {company.region} — {company.country}</p>

            <div className="flex space-x-4 mb-6">
              <a href={company.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Info Tech" className="text-gray-600 hover:text-portfolio-violet transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                CNPJ: <strong>{company.cnpj}</strong><br />
                EPP — {company.legalName}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-portfolio-blue mb-4 uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Home</Link></li>
              <li><Link to="/projetos" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Projetos</Link></li>
              <li><Link to="/conteudo" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Conteúdo</Link></li>
              <li><Link to="/atuacao-regional" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Atuação regional</Link></li>
              <li><a href="/#contact" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Solicitar Orçamento</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-portfolio-blue mb-4 uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/desenvolvimento-de-sistemas-andradina-sp" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Desenvolvimento de sistemas</Link></li>
              <li><Link to="/desenvolvimento-de-software-sob-medida" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Software sob medida</Link></li>
              <li><Link to="/desenvolvimento-de-erp-crm" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">ERP e CRM</Link></li>
              <li><Link to="/desenvolvimento-de-aplicativos" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Aplicativos</Link></li>
              <li><Link to="/desenvolvimento-de-ecommerce" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">E-commerce</Link></li>
              <li><Link to="/automacao-empresarial" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Automação empresarial</Link></li>
              <li><Link to="/inteligencia-artificial-empresarial" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Inteligência artificial</Link></li>
              <li><Link to="/integracao-de-sistemas-api" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Integração de APIs</Link></li>
              <li><Link to="/suporte-manutencao-sistemas-andradina" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Suporte e manutenção</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-portfolio-blue mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-600 text-sm">{company.city}, {company.region} — {company.country}</span>
              </li>
              <li>
                <a href={`mailto:${company.emailPrimary}`} className="text-gray-600 text-sm hover:text-portfolio-violet transition-colors break-all">
                  {company.emailPrimary}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${company.whatsappE164}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-portfolio-violet transition-colors">
                  {company.whatsappDisplay} (WhatsApp)
                </a>
              </li>
            </ul>

            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Área de atuação</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Cidade principal confirmada: <strong>{company.city}-SP</strong>. Cobertura em municípios vizinhos sob confirmação — veja{' '}
                <Link to="/atuacao-regional" className="text-portfolio-indigo hover:underline">atuação regional</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} <strong>{company.legalName}</strong> — CNPJ: {company.cnpj} — EPP. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs text-center">
            Desenvolvimento de sistemas sob encomenda em {company.city}-SP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
