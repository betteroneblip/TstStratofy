import { getTopSongs, getTopPlaylists } from "@/data/musicData";
import { SongCard } from "@/components/SongCard";
import { PlaylistCard } from "@/components/PlaylistCard";

const Index = () => {
  const topSongs = getTopSongs(10);
  const topPlaylists = getTopPlaylists(4);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <div className="min-h-screen pb-36">
      {/* Hero Section */}
      <div className="relative px-6 pt-12 pb-8">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "var(--gradient-hero)",
          }}
        />
        <div className="relative">
          <h1 className="text-3xl font-bold text-foreground mb-1">
            {getGreeting()} 👋
          </h1>
          <p className="text-muted-foreground">
            O que você quer ouvir hoje?
          </p>
        </div>
      </div>

      {/* Top Playlists */}
      <section className="px-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Playlists em Alta</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {topPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* Top 10 Songs */}
      <section className="px-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Top 10 Músicas</h2>
          <span className="text-sm text-primary font-medium">🔥 Ranking</span>
        </div>
        <div className="space-y-2">
          {topSongs.map((song, index) => (
            <SongCard key={song.id} song={song} rank={index + 1} showPlayCount />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
