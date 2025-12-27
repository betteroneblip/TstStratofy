import { Play, Pause } from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";

export const MiniPlayer = () => {
  const { currentSong, isPlaying, isPlayerOpen, pauseSong, resumeSong, openPlayer } =
    usePlayer();

  if (!currentSong || isPlayerOpen) return null;

  return (
    <div
      onClick={openPlayer}
      className="fixed bottom-20 left-4 right-4 z-30 glass rounded-2xl p-3 flex items-center gap-3 cursor-pointer animate-slide-up hover-glow transition-all"
    >
      <img
        src={currentSong.cover}
        alt={currentSong.title}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground truncate text-sm">
          {currentSong.title}
        </h4>
        <p className="text-xs text-muted-foreground truncate">{currentSong.artist}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          isPlaying ? pauseSong() : resumeSong();
        }}
        className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
      >
        {isPlaying ? (
          <Pause size={20} className="text-primary-foreground fill-primary-foreground" />
        ) : (
          <Play size={20} className="text-primary-foreground fill-primary-foreground ml-0.5" />
        )}
      </button>
    </div>
  );
};
