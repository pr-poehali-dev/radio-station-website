import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/153c7412-89ea-439a-bb6f-3d2fe14652d2/files/530de60d-c4fd-4c44-881b-d83c2105cd4f.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-border">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">В эфире сейчас</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Музыка без границ
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Лучшие треки, горячие новинки и эксклюзивные миксы
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gap-2 text-lg px-8">
            <Icon name="Play" size={20} />
            Слушать прямой эфир
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
            <Icon name="ListMusic" size={20} />
            Плейлист
          </Button>
        </div>
      </div>
    </section>
  );
};
