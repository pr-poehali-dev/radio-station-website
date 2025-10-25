import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const team = [
  {
    id: 1,
    name: 'Алексей Морозов',
    role: 'Главный ведущий',
    show: 'Утреннее шоу',
    time: '6:00 - 10:00',
    emoji: '🎙️'
  },
  {
    id: 2,
    name: 'Мария Волкова',
    role: 'Музыкальный редактор',
    show: 'Дневной драйв',
    time: '10:00 - 14:00',
    emoji: '🎵'
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    role: 'Диджей',
    show: 'Вечерний микс',
    time: '18:00 - 22:00',
    emoji: '🎧'
  },
  {
    id: 4,
    name: 'Анна Лебедева',
    role: 'Ведущая',
    show: 'Ночной эфир',
    time: '22:00 - 2:00',
    emoji: '✨'
  }
];

export const Team = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Наша команда</h2>
          <p className="text-muted-foreground">Голоса, которые вы слышите каждый день</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card key={member.id} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                {member.emoji}
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Radio" size={14} />
                  <span>{member.show}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Clock" size={14} />
                  <span>{member.time}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
