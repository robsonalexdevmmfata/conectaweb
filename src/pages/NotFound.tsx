import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SeoHead from "@/components/seo/SeoHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <SeoHead
        title="Página não encontrada | Info Tech"
        description="A página solicitada não existe. Volte à home da Info Tech em Andradina-SP."
        path={location.pathname}
        noindex
      />
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-serif font-bold text-portfolio-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Página não encontrada</p>
        <p className="text-gray-500 mb-8">
          O endereço pode ter mudado. Use a navegação ou volte à página inicial.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-portfolio-indigo text-white px-5 py-2.5 rounded-md hover:bg-portfolio-violet transition-colors">
            Ir para a home
          </Link>
          <Link to="/desenvolvimento-de-sistemas-andradina-sp" className="border border-portfolio-indigo text-portfolio-indigo px-5 py-2.5 rounded-md hover:bg-portfolio-indigo/5 transition-colors">
            Ver serviços
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
