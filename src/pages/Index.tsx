import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeServices from '@/components/HomeServices';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SeoHead from '@/components/seo/SeoHead';
import { faqJsonLd, organizationJsonLd } from '@/data/services';
import { company } from '@/lib/company';

const homeFaqs = [
  {
    q: 'A Info Tech cria sistema para minha empresa em Andradina?',
    a: 'Sim. Criamos programas personalizados para organizar clientes, vendas, estoque, pedidos e rotina — com linguagem simples e orçamento sob consulta.',
  },
  {
    q: 'Quanto custa desenvolver um sistema?',
    a: 'Depende do tamanho do problema. Um controle simples custa menos que um sistema completo. Conversamos no WhatsApp, entendemos a rotina e montamos uma proposta clara.',
  },
  {
    q: 'Como solicitar um orçamento?',
    a: `Pelo WhatsApp ${company.whatsappDisplay} ou pelo formulário de contato. Conte o que está bagunçado na empresa — não precisa usar termo técnico.`,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <SeoHead
        title="Info Tech Ltda — Agência de Tecnologia"
        description="Cansado de planilhas? A Info Tech cria sistema personalizado para organizar clientes, vendas e estoque em Andradina-SP. Solicite um orçamento."
        path="/"
        jsonLd={[
          organizationJsonLd,
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${company.url}/#website`,
            url: company.url,
            name: `${company.legalName} — Sistema para empresas em Andradina SP`,
            description:
              'Criação de sistema personalizado para organizar empresa, vendas, estoque e atendimento em Andradina-SP.',
            inLanguage: 'pt-BR',
            publisher: { '@id': `${company.url}/#organization` },
          },
          faqJsonLd(homeFaqs),
        ]}
      />
      <Navbar />
      <Hero />
      <HomeServices />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
