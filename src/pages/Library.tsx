import { Music, Play } from "lucide-react";
import { songs } from "@/data/musicData";
import { SongCard } from "@/components/SongCard";
import { usePlayer } from "@/contexts/PlayerContext";

const Library = () => {
  const { playSong, setQueue } = usePlayer();

  const handlePlayAll = () => {
    if (songs.length > 0) {
      const allSongIds = songs.map((s) => s.id);
      setQueue(allSongIds);
      playSong(allSongIds[0]);
    }
  };

  return (
    <div className="min-h-screen pb-36">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <Music size={24} className="text-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Biblioteca</h1>
              <p className="text-sm text-muted-foreground">
                {songs.length} {songs.length === 1 ? "música" : "músicas"}
              </p>
            </div>
          </div>
          <button
            onClick={handlePlayAll}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium hover:opacity-90 transition-opacity glow-primary"
          >
            <Play size={20} className="fill-primary-foreground" />
            Tocar tudo
          </button>
        </div>
      </div>

      {/* All Songs */}
      <div className="px-6">
        <div className="space-y-2">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
