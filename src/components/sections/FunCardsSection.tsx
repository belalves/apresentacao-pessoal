import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface FunCardItem {
  text: string;
  emoji: string;
  foto?: string;
  fotoSize?: "small" | "medium" | "large";
}

interface FunCardsSectionProps {
  title: string;
  items: FunCardItem[];
  accentColor: "accent" | "highlight" | "primary";
}

const colorMap = {
  accent: "hsl(var(--accent))",
  highlight: "hsl(var(--highlight))",
  primary: "hsl(var(--primary))",
};

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

const FunCardsSection = ({ title, items, accentColor }: FunCardsSectionProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const color = colorMap[accentColor];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-display font-bold text-foreground mb-2">
        {title}
      </h2>
      <div 
        className="w-16 h-1 rounded-full mb-8" 
        style={{ backgroundColor: color }}
      />

      <div className="mosaic-grid">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="mosaic-item bg-card border border-border rounded-xl p-6 hover:border-opacity-50 transition-all group overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: "var(--shadow-glow)" }}
            style={{
              borderColor: color,
            }}
          >
            <div className="flex flex-col items-center justify-center text-center gap-4 h-full relative">
              {item.foto ? (
                <div className="relative">
                  <img
                    src={item.foto}
                    alt={item.text}
                    className={`rounded-lg object-cover transition-transform group-hover:scale-105 cursor-pointer ${
                      item.fotoSize === "large" 
                        ? "w-20 h-20" 
                        : item.fotoSize === "medium" 
                        ? "w-16 h-16" 
                        : "w-12 h-12"
                    }`}
                    onClick={() => setSelectedPhoto({ src: item.foto!, alt: item.text })}
                  />
                  <span className="absolute -top-2 -right-2 text-2xl">
                    {item.emoji}
                  </span>
                </div>
              ) : (
                <span className="text-4xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.emoji}
                </span>
              )}
              <p className="text-sm text-foreground leading-relaxed flex-1 flex items-center">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <PhotoModal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        photoSrc={selectedPhoto?.src || ""}
        photoAlt={selectedPhoto?.alt || ""}
      />
    </motion.section>
  );
};

export default FunCardsSection;
