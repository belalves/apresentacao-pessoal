import { motion } from "framer-motion";
import mortaImg from "../../assets/morta.jpg";

const SobreSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-display font-bold text-foreground mb-2">
        Sobre Mim
      </h2>
      <div className="w-16 h-1 rounded-full bg-primary mb-8" />

      <div className="space-y-6">
        {/* Card com foto e apresentação */}
        <motion.div
          className="bg-card border border-border rounded-xl p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <img
                src={mortaImg}
                alt="Foto pessoal"
                className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-primary/20 shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                👋 Olá!!!
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sou uma dev <span className="line-through text-muted-foreground/60">cansada</span>, digo apaixonada 😄 por tecnologia e resolução de problemas.
                Com mais de 7 anos de experiência na área, tenho trabalhado principalmente
                com desenvolvimento backend utilizando C# e .NET.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sou umbandista 🌿🏹
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Amo praia 🏖️
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sou mãe de pet (Darah) 🐾
              </p>
              <p className="text-muted-foreground leading-relaxed">
                E mãe de duas plantas sobreviventes 🌱
              </p>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          className="bg-card border border-border rounded-xl p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Informações de Contato
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">São Paulo, Brasil</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:contato@exemplo.com" className="text-sm hover:text-primary transition-colors">
                contato@exemplo.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </motion.div> */}

        <motion.div
          className="bg-card border border-border rounded-xl p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Skills Principais
          </h3>
          <div className="flex flex-wrap gap-2">
            {["C#", ".NET", "Azure", "SQL Server", "DDD", "SOLID", "TDD", "Git", "REST APIs", "Microservices"].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SobreSection;
