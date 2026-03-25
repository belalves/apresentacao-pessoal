import { useState, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import SobreSection from "./components/sections/SobreSection.tsx";
import HistoriaSection from "./components/sections/HistoriaSection.tsx";
import FormacaoSection from "./components/sections/FormacaoSection.tsx";
import CarreiraSection from "./components/sections/CarreiraSection.tsx";
import FunCardsSection from "./components/sections/FunCardsSection.tsx";
import QuemMeInspiraSection from "./components/sections/QuemMeInspiraSection.tsx";
import { AnimatePresence } from "framer-motion";

// Importar as fotos dos assets
import afilhado1 from "./assets/afilhado1.jpg";
import afilhado2 from "./assets/afilhado2.jpg";
import darahPhoto from "./assets/darah.jpeg";

const curiosidades = [
  { text: "Sou mãe de plantas", emoji: "🌱" },
  { text: "Sou mãe de pet Darah", emoji: "🐾", foto: darahPhoto, fotoSize: "large" as const },
  { text: "Sou madrinha do Arthur e do João Gabriel", emoji: "👶", foto: afilhado1, fotoSize: "medium" as const },
  { text: "Estou vivendo um processo de apadrinhamento afetivo", emoji: "💛", foto: afilhado2, fotoSize: "small" as const },
];

const sonhos = [
  { text: "Abrir uma pousada com café da manhã 5 estrelas", emoji: "☕" },
  { text: "Ter uma velhice confortável", emoji: "🏡" },
  { text: "Tirar um ano sabático", emoji: "✈️" },
  { text: "Aprender a dançar charme", emoji: "💃" },
  { text: "Viajar pelo mundo", emoji: "🌍" },
];

const desafios = [
  { text: "Melhorar meu inglês", emoji: "🌎" },
  { text: "Manter uma rotina de exercícios (mesmo odiando academia)", emoji: "😅" },
  { text: "Vencer o cesto infinito de roupas", emoji: "👕" },
  { text: "Diminuir a fofoca", emoji: "🤭" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("sobre");
  const [visited, setVisited] = useState<Set<string>>(new Set(["sobre"]));

  const navigate = useCallback((id: string) => {
    setActiveSection(id);
    setVisited((prev) => new Set(prev).add(id));
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "sobre": return <SobreSection />;
      case "historia": return <HistoriaSection />;
      case "formacao": return <FormacaoSection />;
      case "carreira": return <CarreiraSection />;
      case "inspira": return <QuemMeInspiraSection />;
      case "curiosidades":
        return <FunCardsSection title="Curiosidades" items={curiosidades} accentColor="accent" />;
      case "sonhos":
        return <FunCardsSection title="Sonhos" items={sonhos} accentColor="highlight" />;
      case "desafios":
        return <FunCardsSection title="Desafios" items={desafios} accentColor="primary" />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeSection={activeSection}
        visitedSections={visited}
        onNavigate={navigate}
      />
      <main className="ml-64 flex-1 py-16 px-8 md:px-16 max-w-3xl">
        <AnimatePresence mode="wait">
          <div key={activeSection}>
            {renderSection()}
          </div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
