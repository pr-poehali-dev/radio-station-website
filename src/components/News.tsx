import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const news = [
  {
    id: 1,
    title: 'The Weeknd анонсировал новый альбом на 2025 год',
    excerpt: 'Певец поделился планами на предстоящий релиз и рассказал о творческом процессе создания новых треков.',
    date: '2 часа назад',
    category: 'Новости'
  },
  {
    id: 2,
    title: 'Топ-10 треков недели: что слушают сейчас',
    excerpt: 'Подборка самых горячих треков этой недели от редакции нашей радиостанции.',
    date: '5 часов назад',
    category: 'Чарты'
  },
  {
    id: 3,
    title: 'Интервью с Dua Lipa: о новом туре и планах',
    excerpt: 'Эксклюзивное интервью с поп-звездой о предстоящем мировом турне и новой музыке.',
    date: '1 день назад',
    category: 'Интервью'
  }
];

export const News = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Новости и статьи</h2>
          <p className="text-muted-foreground">Всё о музыкальной индустрии</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Icon name="Music2" size={64} className="text-primary/40" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    • {item.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                
                <Button variant="ghost" className="gap-2 p-0 h-auto font-medium">
                  Читать далее
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            Все новости
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
