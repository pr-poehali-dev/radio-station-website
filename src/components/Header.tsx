import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Radio" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">Wave FM</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('playlist')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Плейлист
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Новости
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Команда
            </button>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Search" size={20} />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('playlist')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Плейлист
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Новости
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Команда
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
