import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const tracks = [
  {
    id: 1,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    time: '3:20',
    status: 'playing'
  },
  {
    id: 2,
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    time: '3:23',
    status: 'next'
  },
  {
    id: 3,
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    time: '3:35',
    status: 'queued'
  },
  {
    id: 4,
    title: 'positions',
    artist: 'Ariana Grande',
    album: 'Positions',
    time: '2:52',
    status: 'queued'
  },
  {
    id: 5,
    title: 'Therefore I Am',
    artist: 'Billie Eilish',
    album: 'Single',
    time: '2:53',
    status: 'queued'
  }
];

export const Playlist = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Сейчас в эфире</h2>
            <p className="text-muted-foreground">Последние треки радиостанции</p>
          </div>
          <Badge variant="secondary" className="gap-2">
            <Icon name="Radio" size={16} />
            Live
          </Badge>
        </div>
        
        <Card className="overflow-hidden">
          <div className="divide-y divide-border">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className={`p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors ${
                  track.status === 'playing' ? 'bg-accent/30' : ''
                }`}
              >
                <div className="w-8 text-center text-muted-foreground font-medium">
                  {track.status === 'playing' ? (
                    <Icon name="Music" size={20} className="text-primary animate-pulse" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{track.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {track.artist} • {track.album}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground hidden sm:block">
                    {track.time}
                  </span>
                  {track.status === 'next' && (
                    <Badge variant="outline" className="text-xs">
                      Следующий
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
