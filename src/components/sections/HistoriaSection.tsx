import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const HistoriaSection = () => {
  const timeline = [
    {
      ano: "1991",
      titulo: "Raízes da Paixão",
      descricao: "Nasci e cresci em Padre Miguel. Meu pai sempre gostou de computador e, como eu era a caçula e vivia grudada nele, acabei tomando gosto também."
    },
    {
      ano: "2001",
      titulo: "O Primeiro Computador",
      descricao: "Meu pai comprou da nossa vizinha nosso primeiro computador: um Pentium 100 com 8 MB de RAM que demorava cerca de 15 minutos para ligar. 🖥️ Foi amor à primeira vista!"
    },
    {
      ano: "2000s",
      titulo: "Parceria Pai e Filha",
      descricao: "Montamos nosso segundo computador juntos: ele cuidava do hardware e eu ficava responsável pelo software. Uma dupla imbatível!"
    },
    {
      ano: "2007",
      titulo: "Primeira Experiência de Trabalho",
      descricao: "Comecei a trabalhar aos 16 anos como atendente em loja de material de limpeza."
    },
    {
      ano: "2007-2013",
      titulo: "Explorando o Mundo do Trabalho",
      descricao: "Trabalhei em várias áreas: vendedora de produtos para salão, cabeleireira, massagista para senhorinhas com dinheiro 💅, secretária particular e recepcionista de consultório médico."
    },
    {
      ano: "SENAC",
      titulo: "Descobrindo o Caminho",
      descricao: "Fizemos um curso no SENAC de montagem e manutenção. Foi lá que um professor me apresentou o caminho da faculdade voltada para desenvolvimento até então eu não sabia como chegar na área."
    },
    {
      ano: "2013",
      titulo: "Consegui uma bolsa de estudos (PROUNI)",
      descricao: "Fui trabalhar em uma ONG e consegui uma bolsa de estudos para cursar Análise e Desenvolvimento de Sistemas. 🎓"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-display font-bold text-foreground mb-2">
        Minha História
      </h2>
      <div className="w-16 h-1 rounded-full bg-primary mb-8" />

      <div className="space-y-6">
        <motion.p
          className="text-muted-foreground leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Uma jornada que começou com curiosidade infantil, passou por diversas experiências profissionais e se transformou em uma carreira de paixão pela tecnologia.
          (Ainda penso se eu não deveria ter virado veterinaria de cachorro de madame 😭)
        </motion.p>

        <div className="space-y-4">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-6 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                      {item.ano}
                    </span>
                    <h3 className="font-display font-semibold text-foreground">
                      {item.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HistoriaSection;
