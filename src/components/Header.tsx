import { useTheme } from "../hooks/useTheme";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'reports', label: 'Project Reports' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'creativity', label: 'Creativity' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="text-foreground hover:text-muted-foreground transition-colors text-lg font-semibold"
          >
            Frdwish
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-foreground hover:bg-accent transition-colors"
          >
            {theme === "light" ? (
              <>
                <Moon size={18} /> Dark
              </>
            ) : (
              <>
                <Sun size={18} /> Light
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-1">

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-full flex items-center gap-3 py-2 px-4 rounded-lg text-foreground hover:bg-accent transition-colors"
            >
              {theme === "light" ? (
                <>
                  <Moon size={18} /> Enable Dark Mode
                </>
              ) : (
                <>
                  <Sun size={18} /> Enable Light Mode
                </>
              )}
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:bg-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
