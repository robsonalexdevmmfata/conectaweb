import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12" aria-label="Rodapé Info Tech Ltda">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Coluna 1 — Marca e CNPJ */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold text-portfolio-blue mb-2 inline-block">
              Info <span className="text-portfolio-accent">Tech</span>
            </a>
            <p className="text-gray-600 mb-1 text-sm font-medium">Agência de Tecnologia EPP</p>
            <p className="text-gray-500 text-xs mb-4">Andradina — São Paulo — Brasil</p>

            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/robsonalexdevmmfata" target="_blank" rel="noopener noreferrer" aria-label="GitHub Info Tech" className="text-gray-600 hover:text-portfolio-violet transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Info Tech" className="text-gray-600 hover:text-portfolio-violet transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                </svg>
              </a>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                CNPJ: <strong>69.355.023/0001-15</strong><br />
                EPP — Info Tech Ltda
              </p>
            </div>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <h3 className="text-sm font-bold text-portfolio-blue mb-4 uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Sobre a Agência</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Projetos</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Tecnologias</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Coluna 3 — Serviços (SEO keywords) */}
          <div>
            <h3 className="text-sm font-bold text-portfolio-blue mb-4 uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Criação de Sites</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Loja Virtual e E-commerce</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Aplicativos Mobile e Delivery</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Sistema PDV e Caixa</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Controle de Estoque e ERP</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Sistemas para Restaurantes e Clínicas</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Automação com IA e n8n</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Agentes de IA e Chatbot WhatsApp</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">SaaS e Plataformas</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">MVPs para Startups</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">Landing Pages</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-portfolio-violet transition-colors text-sm">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Coluna 4 — Contato e cidades atendidas */}
          <div>
            <h3 className="text-sm font-bold text-portfolio-blue mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-portfolio-indigo mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-600 text-sm">Andradina, SP — Brasil</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-portfolio-indigo mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:agenciainfotechltdammfata@gmail.com" className="text-gray-600 text-sm hover:text-portfolio-violet transition-colors break-all">
                  agenciainfotechltdammfata@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-portfolio-indigo mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="https://wa.me/5518981011186" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-portfolio-violet transition-colors">
                  +55 (18) 98101-1186 (WhatsApp)
                </a>
              </li>
            </ul>

            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Cidades Atendidas</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Andradina · Araçatuba · Birigui · Penápolis · Guararapes · Mirandópolis · Ilha Solteira · Pereira Barreto · Valparaíso · Castilho · Promissão · Lavínia · Guaraçaí · Sud Mennucci · Buritama · Avanhandava · Coroados · Piacatu · Bilac · Clementina · Santo Antônio do Aracanguá · e todo o Brasil
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} <strong>Info Tech Ltda</strong> — CNPJ: 69.355.023/0001-15 — EPP. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs text-center">
            Agência de tecnologia em Andradina-SP · Desenvolvimento Web, Mobile e Sistemas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
