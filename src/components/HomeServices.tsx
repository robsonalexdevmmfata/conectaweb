import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { homeServiceCards } from '@/data/services';

export default function HomeServices() {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-portfolio-violet font-medium mb-2">Como podemos ajudar</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">
            Problemas do dia a dia que a Info Tech resolve
          </h2>
          <p className="text-gray-600">
            Você não precisa saber o nome técnico do sistema. Conte o que está bagunçado na empresa —
            a gente traduz em uma solução prática.
          </p>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServiceCards.map((card) => (
            <Link
              key={card.path}
              to={card.path.replace(/\/$/, '')}
              className="group bg-slate-50 hover:bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-portfolio-blue mb-2 group-hover:text-portfolio-violet transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{card.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-portfolio-indigo">
                Quero saber mais
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
