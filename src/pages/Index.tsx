import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LivePlayer } from '@/components/LivePlayer';
import { Playlist } from '@/components/Playlist';
import { News } from '@/components/News';
import { Team } from '@/components/Team';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <div id="hero">
          <Hero />
        </div>
        
        <div id="playlist">
          <Playlist />
        </div>
        
        <div id="news">
          <News />
        </div>
        
        <div id="team">
          <Team />
        </div>
      </main>
      
      <Footer />
      <LivePlayer />
    </div>
  );
};

export default Index;