import { motion } from "framer-motion";
import { useState } from "react";
import { 
  User, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Heart, 
  Target,
  Users,
  Menu,
  X
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
  { id: "curiosidades", label: "Curiosidades", icon: Sparkles },
  { id: "desafios", label: "Desafios", icon: Target },
  { id: "sonhos", label: "Sonhos", icon: Heart },  
  { id: "inspira", label: "Quem Me Inspira", icon: Users },
];

const Sidebar = ({ activeSection, visitedSections, onNavigate }: SidebarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-[hsl(var(--sidebar-background))] border border-[hsl(var(--sidebar-border))] rounded-lg"
      >
        <Menu className="w-5 h-5 text-[hsl(var(--sidebar-primary))]" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen w-64 bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))] flex flex-col z-50
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
        {/* Close button for mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 md:hidden"
        >
          <X className="w-5 h-5 text-[hsl(var(--sidebar-foreground))]" />
        </button>

        <div className="p-6 border-b border-[hsl(var(--sidebar-border))]">
          <h1 className="font-display text-xl md:text-2xl font-bold text-[hsl(var(--sidebar-primary))]">
             🚀 Bora lá!
          </h1>
          <p className="text-xs md:text-sm text-[hsl(var(--sidebar-foreground))] mt-1">
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
                onClick={() => handleNavigate(item.id)}
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
    </>
  );
};

export default Sidebar;
