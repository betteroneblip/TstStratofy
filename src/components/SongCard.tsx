import { Play, Heart } from "lucide-react";
import { Song } from "@/data/musicData";
import { usePlayer } from "@/contexts/PlayerContext";
import { cn } from "@/lib/utils";

interface SongCardProps {
  song: Song;
  rank?: number;
  showPlayCount?: boolean;
}

export const SongCard = ({ song, rank, showPlayCount }: SongCardProps) => {
  const { playSong, toggleFavorite, isFavorite, setQueue } = usePlayer();
  const favorite = isFavorite(song.id);

  const handlePlay = () => {
    setQueue([song.id]);
    playSong(song.id);
  };

  return (
    <div
      className="group flex items-center gap-3 p-3 rounded-xl bg-card/50 hover:bg-secondary/80 transition-all duration-300 hover-scale cursor-pointer animate-fade-in"
      onClick={handlePlay}
    >
      {rank && (
        <span className="text-2xl font-bold text-muted-foreground w-8 text-center">
          {rank}
        </span>
      )}
      <div className="relative flex-shrink-0">
        <img
          src={song.cover}
          alt={song.title}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <Play size={24} className="text-primary fill-primary" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{song.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
        {showPlayCount && (
          <p className="text-xs text-muted-foreground">
            {song.playCount.toLocaleString()} plays
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">{song.duration}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(song.id);
          }}
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <Heart
            size={20}
            className={cn(
              "transition-colors",
              favorite ? "text-primary fill-primary" : "text-muted-foreground"
            )}
          />
        </button>
      </div>
    </div>
  );
};
