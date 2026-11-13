import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import minhaFotoPrincipal from '../assets/img/hero-bg.jpg';
import { company, whatsappLink } from '@/lib/company';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-portfolio-violet font-medium mb-4 animate-fade-in">
              Empresa que desenvolve sistemas em {company.city}-{company.region}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-[3.1rem] font-serif font-bold mb-4 text-portfolio-blue animate-slide-up leading-tight">
              Cansado de controlar a empresa em várias planilhas?
            </h1>
            <p className="text-lg text-gray-700 mb-4 animate-slide-up max-w-xl" style={{animationDelay: '0.1s'}}>
              Criamos um <strong>sistema personalizado</strong> para reunir informações, organizar clientes, controlar vendas e facilitar a rotina — do jeito que o seu negócio funciona.
            </p>
            <p className="text-gray-500 text-base mb-8 max-w-lg animate-slide-up" style={{animationDelay: '0.2s'}}>
              A <strong>{company.shortName}</strong> atende empresários, comerciantes e gestores em {company.city}-SP com linguagem simples e orçamento sob consulta.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a
                href={whatsappLink('Olá! Quero um sistema para organizar minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-portfolio-indigo hover:bg-portfolio-violet text-white px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Solicitar um orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                to="/projetos"
                className="border border-portfolio-indigo text-portfolio-indigo hover:bg-portfolio-indigo/5 px-8 py-4 rounded-md transition-all inline-flex items-center"
              >
                Conhecer nossos projetos
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 animate-slide-up" style={{animationDelay: '0.55s'}}>
              <span>Programa para substituir planilhas</span>
              <span>Controle de vendas e estoque</span>
              <span>Robô de atendimento no WhatsApp</span>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-portfolio-indigo to-portfolio-violet animate-float"></div>
              <img
                src={minhaFotoPrincipal}
                alt={`${company.shortName} — sistema para empresas em ${company.city}-SP`}
                width={320}
                height={320}
                className="absolute top-5 left-5 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl animate-float"
                style={{animationDelay: '0.3s'}}
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-bounce">
                <div className="bg-portfolio-indigo text-white h-14 w-14 flex items-center justify-center rounded-full">
                  <span className="font-bold">14+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
