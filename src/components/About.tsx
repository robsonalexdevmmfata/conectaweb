import React from 'react';
import Timeline from './Timeline';
import { Button } from './ui/button';
import { Download } from "lucide-react";
import minhaFotoDePerfil from '../assets/img/hero-bg.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-violet font-medium mb-2">Sobre a Nossa Agência</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">Nossa Jornada & Expertise Corporativa</h2>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto"></div>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full max-w-[800px] h-[650px] rounded-lg overflow-hidden shadow-xl mb-12">
                <img
                  src={minhaFotoDePerfil}
                  alt="Working on design"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 md:p-6">
                <div className="text-center">
                  <p className="text-portfolio-blue font-bold text-lg md:text-xl mb-1">14+ Anos</p>
                  <p className="text-gray-600 text-sm md:text-base">Experiência</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
                Agência de Tecnologia Full Stack Especializada em Soluções Corporativas.
            </h3>
            <p className="text-gray-600 mb-8">
  Com mais de 14 anos na vanguarda do desenvolvimento de software, a Info Tech Ltda. atua como agência de tecnologia EPP, oferecendo soluções corporativas de alta complexidade, orientadas a performance, escalabilidade e impacto direto no negócio. Somos especialistas em transformar requisitos estratégicos em ecossistemas digitais robustos, unindo arquitetura backend de alta confiabilidade com interfaces modernas orientadas à experiência do usuário.

  Nossa expertise abrange o ciclo completo de desenvolvimento para diversos modelos de negócio, incluindo:
<br></br>


  <span className="font-bold text-blue-600">Sistemas Críticos Corporativos:</span> Desenvolvimento de <span className="font-bold text-blue-600">ERPs</span> com alta concorrência e integridade transacional, <span className="font-bold text-blue-600">PDVs</span> de baixa latência e plataformas de gestão com alta disponibilidade e tolerância a falhas.<br></br>



  <span className="font-bold text-blue-600">Produtos Digitais e Escala:</span> Criação de <span className="font-bold text-blue-600">MVPs</span> validados em produção com foco em time-to-market e tração, além de arquiteturas <span className="font-bold text-blue-600">MVC</span> e padrões escaláveis preparados para crescimento contínuo.<br></br>



  <span className="font-bold text-blue-600">Soluções de Mercado:</span> Implementação de plataformas <span className="font-bold text-blue-600">White Label</span> altamente customizáveis e <span className="font-bold text-blue-600">SaaS</span> multi-tenant com foco em escalabilidade horizontal e recorrência.<br></br>

  <span className="font-bold text-blue-600">Performance Digital:</span> Desenvolvimento de <span className="font-bold text-blue-600">E-commerces</span> otimizados para conversão e performance sob carga, <span className="font-bold text-blue-600">Landing Pages</span> orientadas a ROI em tráfego pago e aplicações <span className="font-bold text-blue-600">Mobile</span> nativas e híbridas com alta responsividade.<br></br>
</p>

<p className="text-gray-600 mb-8">
  Nossa abordagem é orientada a resultados mensuráveis: entregamos código limpo, arquiteturas bem definidas e experiências com alta retenção. Atuamos com foco em <span className="font-bold text-blue-600">SEO estratégico</span>, <span className="font-bold text-blue-600">performance extrema</span> e otimização contínua de métricas de negócio. Mais do que desenvolver software, construímos soluções que impulsionam crescimento, aumentam eficiência operacional e sustentam escala para empresas que exigem excelência técnica.
</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Nome da Empresa:</h4>
                <p className="text-gray-600">Info Tech Ltda.</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Email Corporativo:</h4>
                <p className="text-gray-600">contato@infotech.com.br</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Localização:</h4>
                <p className="text-gray-600">São Paulo, Brazil</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Porte da Empresa:</h4>
                <p className="text-gray-600">EPP - Empresa de Pequeno Porte</p>
              </div>
            </div>


          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold inline-block">Resumo Da Nossa Experiência E Cursos</h2>
        </div>
        <Timeline
          courses={[
            { title: 'DESiGNER GRÁFiCO', period: '2012 - 2014', description: '' },
            { title: 'ANÁLISE DESENVOLVIMENTO DE SISTEMAS', period: '2014 - 2017', description: '' },
            { title: 'ENGENHARIA DE SOFTWARE', period: '2018 - 2023', description: '' },
          ]}
          experiences={[
            {
              title: 'Info Tech Ltda. EPP',
              period: '2025 Atual',
              description: 'Desenvolvendo projetos corporativos para diversos clientes, com foco em soluções Web e Mobile de alta complexidade.',
            },

             {
              title: 'NexGen Systems',
              period: '2016 - 2018',
              description: 'Participação no desenvolvimento de dashboards analíticos para grandes clientes do setor de varejo, com visualizações dinâmicas e relatórios customizáveis em tempo real.',
            },

             {
              title: 'ByteForge Technologies',
              period: '2015 - 2016',
              description: 'Desenvolvimento full stack para soluções mobile-first, utilizando React.js no frontend e Node.js no backend, garantindo responsividade e alta performance em dispositivos móveis.',
            },
            {
              title: 'WebCraft Studios',
              period: '2014 - 2015',
              description: 'Criação e manutenção de portais de conteúdo e blogs corporativos com sistemas de gerenciamento avançados, além da integração com redes sociais e ferramentas de análise de dados.',
            },
            {
              title: 'StartLab Tech',
              period: '2012 - 2013',
              description: 'Desenvolvimento ágil de MVPs e protótipos para startups, trabalhando diretamente com equipes multidisciplinares para garantir entregas rápidas e alinhadas às necessidades do mercado.',
            },
            {
              title: 'InovaDigital',
              period: '2011 - 2012',
              description: 'Implementação de plataformas SaaS customizadas para clientes do setor financeiro, com foco em segurança, compliance e performance. Atuei na automação de testes e implantação contínua (CI/CD).',
            },
            {
              title: 'TechNova Solutions',
              period: '2010 - 2011',
              description: 'Desenvolvimento de aplicações corporativas integradas, focando em APIs RESTful e arquitetura microservices. Participei da migração de sistemas legados para tecnologias modernas, aumentando a eficiência dos processos internos.',
            },
            {
              title: 'GLOBAL WEBSITES',
              period: '2009 - 2010',
              description: 'Liderança no desenvolvimento de sistemas de gerenciamento de conteúdo, plataformas de e-commerce e dashboards interativos. Otimizei a performance e escalabilidade das aplicações, garantindo alta disponibilidade e excelente experiência do usuário.',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default About;
