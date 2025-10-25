import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export const LivePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);

  return (
    <Card className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl p-4 bg-card/95 backdrop-blur-md border-border z-50">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <img 
            src="https://cdn.poehali.dev/projects/153c7412-89ea-439a-bb6f-3d2fe14652d2/files/530de60d-c4fd-4c44-881b-d83c2105cd4f.jpg"
            alt="Now Playing"
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">The Weeknd - Blinding Lights</h3>
          <p className="text-sm text-muted-foreground truncate">After Hours • 2020</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            className="hidden sm:flex"
          >
            <Icon name="SkipBack" size={20} />
          </Button>
          
          <Button
            size="icon"
            className="w-12 h-12"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            className="hidden sm:flex"
          >
            <Icon name="SkipForward" size={20} />
          </Button>
          
          <div className="hidden md:flex items-center gap-2 ml-4">
            <Icon name="Volume2" size={20} />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
