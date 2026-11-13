import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePageView from "./components/ServicePageView";
import ArticlePage from "./pages/ArticlePage";
import ProjetosPage from "./pages/ProjetosPage";
import AtuacaoRegionalPage from "./pages/AtuacaoRegionalPage";
import ConteudoIndexPage from "./pages/ConteudoIndexPage";
import { services } from "./data/services";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projetos" element={<ProjetosPage />} />
            <Route path="/atuacao-regional" element={<AtuacaoRegionalPage />} />
            <Route path="/conteudo" element={<ConteudoIndexPage />} />
            <Route path="/conteudo/:slug" element={<ArticlePage />} />
            {services.map((service) => (
              <Route
                key={service.slug}
                path={`/${service.slug}`}
                element={<ServicePageView service={service} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
