import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Radio" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Wave FM</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Лучшая музыка 24/7
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#playlist" className="hover:text-primary transition-colors">Плейлист</a></li>
              <li><a href="#news" className="hover:text-primary transition-colors">Новости</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Команда</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Информация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Реклама</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Социальные сети</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Wave FM. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
