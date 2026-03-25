import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X } from "lucide-react";
import { useState } from "react";
import hitssImg from "../../assets/hitss.jpg";
import fuiImg from "../../assets/fui.jpg";
import deuRuimImg from "../../assets/deu_ruim.jpg";

interface Cargo {
  titulo: string;
  periodo: string;
  descricao: string;
  skills?: string[];
}

interface EmpresaProps {
  nome: string;
  periodo: string;
  cargos: Cargo[];
  fotos?: string[];
}

// Componente Modal para visualização da foto
const PhotoModal = ({ 
  photo, 
  isOpen, 
  onClose 
}: { 
  photo: string | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!isOpen || !photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          className="relative max-w-4xl max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photo}
            alt="Foto ampliada"
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const EmpresaCard = ({ nome, periodo, cargos, fotos }: EmpresaProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo: string) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-foreground">{nome}</h3>
            <p className="text-xs text-muted-foreground">{periodo}</p>

            {fotos && (
              <div className="mt-4 mb-4">
                <div className="flex gap-2 flex-wrap">
                  {fotos.map((foto, i) => (
                    <img
                      key={i}
                      src={foto}
                      alt={`Foto ${i + 1} da ${nome}`}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover border border-primary/20 hover:scale-105 transition-transform cursor-pointer"
                      onClick={() => openModal(foto)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 space-y-5 border-l-2 border-border pl-4">
              {cargos.map((cargo, i) => (
                <div key={i}>
                  <h4 className="text-sm font-medium text-foreground">{cargo.titulo}</h4>
                  <p className="text-xs text-muted-foreground">{cargo.periodo}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cargo.descricao}</p>
                  {cargo.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cargo.skills.map((s, j) => (
                        <span key={j} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <PhotoModal 
        photo={selectedPhoto} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

const empresas: EmpresaProps[] = [
  {
    nome: "Icatu Seguros",
    periodo: "jun 2022 - atual · 3 anos 10 meses",
    cargos: [
      {
        titulo: "Desenvolvedora Sênior",
        periodo: "jul 2024 - atual",
        descricao: "Atuação no desenvolvimento de soluções digitais com foco em APIs e integrações de sistemas internos. Experiência com mensageria (MassTransit), telemetria com Application Insights e versionamento com Git.",
        skills: ["C#", ".NET", "Azure", "SQL Server", "SOLID", "DDD", "TDD", "XUnit"],
      },
      {
        titulo: "Desenvolvedora Pleno",
        periodo: "jun 2022 - jul 2024",
        descricao: "Criação e manutenção de sistemas do time de soluções digitais (Underwriting).",
        skills: ["C#", ".NET 7/8", "Azure", "DDD", "SOLID", "XUnit"],
      },
    ],
  },
  {
    nome: "Grupo MAG",
    periodo: "set 2019 - jun 2022 · 2 anos 10 meses",
    cargos: [
      {
        titulo: "Desenvolvedora Pleno",
        periodo: "out 2020 - jun 2022",
        descricao: "Absorvida pelo time da seguradora da MAG no time de subscrição.",
        skills: ["C#", "Groovy", ".NET Core", "Azure Functions", "Camunda", "XUnit"],
      },
      {
        titulo: "Desenvolvedora Júnior",
        periodo: "set 2019 - out 2020",
        descricao: "Desenvolvimento de toda jornada das propostas de seguro de vida, desde a entrada do cliente até a emissão da apólice, para parceria SICOOB.",
        skills: ["C#", "Groovy", ".NET Core", "Azure Functions", "XUnit"],
      },
    ],
  },
  {
    nome: "GLOBAL HITSS",
    periodo: "jun 2017 - set 2019 · 2 anos 4 meses",
    fotos: [hitssImg, fuiImg, deuRuimImg],
    cargos: [
      {
        titulo: "Analista Júnior de Sistemas",
        periodo: "set 2018 - set 2019",
        descricao: "Manutenção e melhorias de sistemas utilizando PL/SQL, HTML, CSS, JavaScript, JQuery, Ajax, VB.NET e ASP.",
        skills: ["PL/SQL", "HTML", "CSS", "JavaScript", "VB.NET"],
      },
      {
        titulo: "Trainee",
        periodo: "jun 2017 - set 2018",
        descricao: "Primeira experiência na área de tecnologia com atuação em manutenção de sistemas.",
      },
    ],
  },
];

const CarreiraSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-display font-bold text-foreground mb-2">
      Carreira
    </h2>
    <div className="w-16 h-1 rounded-full bg-primary mb-8" />

    <div className="space-y-4">
      {empresas.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <EmpresaCard {...e} />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default CarreiraSection;
