import { motion, AnimatePresence } from "framer-motion";
import { Heart, Quote, X } from "lucide-react";
import { useState } from "react";
import paisPhoto from "../../assets/pais.jpg";

interface Inspiracao {
  nome: string;
  descricao: string;
  frase?: string;
  emoji: string;
  foto?: string;
}

const inspiracoesData: Inspiracao[] = [
  {
    nome: "Na vida: Meus Pais",
    descricao: "Minha base <3",
    frase: "",
    emoji: "👨‍👩‍👧",
    foto: paisPhoto
  },
  {
    nome: "Na área: Paula Cristiane",
    descricao: "Na epoca em que passei pela MAG ela foi nossa arquiteta, ela era capaz de impor respeito com apenas um olhar, uma mulher incrivel e que sempre compartilhava seu conhecimento.",
    frase: "",
    emoji: "👩‍💻"
  }
];

const PhotoModal = ({ isOpen, onClose, photoSrc, photoAlt }: { 
  isOpen: boolean; 
  onClose: () => void; 
  photoSrc: string; 
  photoAlt: string;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl max-h-[80vh]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photoSrc}
            alt={photoAlt}
            className="w-full h-full object-contain rounded-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const QuemMeInspiraSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-display font-bold text-foreground mb-2">
        Quem Me Inspira
      </h2>
      <div className="w-16 h-1 rounded-full bg-primary mb-8" />

      <motion.p
        className="text-muted-foreground leading-relaxed text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Pessoas incríveis que moldaram minha jornada e continuam me inspirando todos os dias. 💫
      </motion.p>

      <div className="space-y-6">
        {inspiracoesData.map((inspiracao, i) => (
          <motion.div
            key={i}
            className="bg-card border border-border rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                {inspiracao.foto ? (
                  <img
                    src={inspiracao.foto}
                    alt={inspiracao.nome}
                    className="w-12 h-12 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedPhoto({ src: inspiracao.foto!, alt: inspiracao.nome })}
                  />
                ) : (
                  <span className="text-2xl">{inspiracao.emoji}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-semibold text-foreground">
                    {inspiracao.nome}
                  </h3>
                  <Heart className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {inspiracao.descricao}
                </p>
                {inspiracao.frase && (
                  <div className="flex items-start gap-2 mt-3 p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <Quote className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <p className="text-sm italic text-accent-foreground">
                      "{inspiracao.frase}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center">
          <h3 className="font-display font-semibold text-foreground mb-2">
            💝 Gratidão
          </h3>
          <p className="text-sm text-muted-foreground">
            Cada pessoa que cruza nosso caminho deixa um aprendizado. 
            Sou grata por todas que me inspiram a ser uma versão melhor de mim mesma todos os dias.
          </p>
        </div>
      </motion.div> */}

      <PhotoModal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        photoSrc={selectedPhoto?.src || ""}
        photoAlt={selectedPhoto?.alt || ""}
      />
    </motion.section>
  );
};

export default QuemMeInspiraSection;
