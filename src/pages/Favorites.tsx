import { Heart } from "lucide-react";
import { songs } from "@/data/musicData";
import { SongCard } from "@/components/SongCard";
import { usePlayer } from "@/contexts/PlayerContext";

const Favorites = () => {
  const { favorites } = usePlayer();
  const favoriteSongs = songs.filter((song) => favorites.includes(song.id));

  return (
    <div className="min-h-screen pb-36">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
            <Heart size={24} className="text-primary-foreground fill-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Favoritas</h1>
            <p className="text-sm text-muted-foreground">
              {favoriteSongs.length} {favoriteSongs.length === 1 ? "música" : "músicas"}
            </p>
          </div>
        </div>
      </div>

      {/* Songs List */}
      <div className="px-6">
        {favoriteSongs.length > 0 ? (
          <div className="space-y-2">
            {favoriteSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart size={64} className="text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Nenhuma música favorita
            </h3>
            <p className="text-muted-foreground text-sm">
              Toque no coração para adicionar músicas aqui
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
