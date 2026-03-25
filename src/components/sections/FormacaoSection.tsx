import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const FormacaoSection = () => {
  const educacao = [
    {
      tipo: "Graduação",
      curso: "Análise e Desenvolvimento de Sistemas",
      instituicao: "Faculdades Integradas Simonsen (até minha faculdade já faliu)",
      periodo: "2014 - 2017",
      icon: GraduationCap,
    },
    {
      tipo: "Pós-Graduação",
      curso: "MBA em Inteligência Artificial Generativa & LLMs ",
      instituicao: "PUC-Rio (nome do curso é lindo, porém conteúdo é de chorar)",
      periodo: "2025 - 2026",
      icon: Award,
    }
  ];

  const cursos = [
    "Clean Architecture e Domain-Driven Design",
    "Microservices com .NET",
    "Design Patterns e SOLID",
    "Test-Driven Development (TDD)",
    "Desenvolvimento Ágil com Scrum",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-display font-bold text-foreground mb-2">
        Formação
      </h2>
      <div className="w-16 h-1 rounded-full bg-primary mb-8" />

      <div className="space-y-6">
        <div className="space-y-4">
          {educacao.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                      {item.tipo}
                    </span>
                    <h3 className="font-display font-semibold text-foreground mt-2">
                      {item.curso}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.instituicao}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.periodo}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-card border border-border rounded-xl p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-foreground">
              Cursos
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {cursos.map((curso, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + (i * 0.05) }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{curso}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FormacaoSection;
