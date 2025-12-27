import { Home, Search, Heart, Library } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { usePlayer } from "@/contexts/PlayerContext";

const navItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: Search, label: "Buscar", path: "/buscar" },
  { icon: Heart, label: "Favoritas", path: "/favoritas" },
  { icon: Library, label: "Biblioteca", path: "/biblioteca" },
];

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isPlayerOpen } = usePlayer();

  // Esconde a nav quando o player está aberto ou em páginas específicas
  const hideOnPaths = ["/buscar", "/biblioteca"];
  const shouldHide = isPlayerOpen || hideOnPaths.includes(location.pathname);

  if (shouldHide) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-border/50 animate-slide-up">
      <div className="flex items-center justify-around py-3 px-4 max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
                isActive
                  ? "text-primary glow-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon
                size={24}
                className={cn(
                  "transition-transform duration-300",
                  isActive && "scale-110"
                )}
              />
              <span className="text-xs font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
