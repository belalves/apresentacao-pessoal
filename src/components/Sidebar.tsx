import { motion } from "framer-motion";
import { 
  User, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Heart, 
  Target,
  Users
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  visitedSections: Set<string>;
  onNavigate: (id: string) => void;
}

const menuItems = [
  { id: "sobre", label: "Sobre", icon: User },
  { id: "historia", label: "História", icon: BookOpen },
  { id: "formacao", label: "Formação", icon: GraduationCap },
  { id: "carreira", label: "Carreira", icon: Briefcase },
  { id: "inspira", label: "Quem Me Inspira", icon: Users },
  { id: "curiosidades", label: "Curiosidades", icon: Sparkles },
  { id: "desafios", label: "Desafios", icon: Target },
  { id: "sonhos", label: "Sonhos", icon: Heart },  
];

const Sidebar = ({ activeSection, visitedSections, onNavigate }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))] flex flex-col">
      <div className="p-6 border-b border-[hsl(var(--sidebar-border))]">
        <h1 className="font-display text-2xl font-bold text-[hsl(var(--sidebar-primary))]">
           🚀 Bora lá!
        </h1>
        <p className="text-sm text-[hsl(var(--sidebar-foreground))] mt-1">
          (Só funciona na minha máquina)
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isVisited = visitedSections.has(item.id);

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg
                transition-all duration-200 relative group
                ${isActive 
                  ? "bg-[hsl(var(--sidebar-accent))] text-[hsl(var(--sidebar-accent-foreground))]" 
                  : "text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-accent-foreground))]"
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1 h-8 bg-[hsl(var(--sidebar-primary))] rounded-r"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <Icon className="w-5 h-5 shrink-0" />
              
              <span className="font-medium text-sm">{item.label}</span>
              
              {isVisited && !isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[hsl(var(--sidebar-primary))]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-[hsl(var(--sidebar-border))]">
        <p className="text-xs text-[hsl(var(--sidebar-foreground))] text-center">
          A sincera do rolê © 2025
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
