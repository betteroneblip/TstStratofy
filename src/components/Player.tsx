import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Heart,
  ChevronDown,
  ListPlus,
  Share2,
} from "lucide-react";
import { usePlayer } from "@/contexts/PlayerContext";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Player = () => {
  const {
    currentSong,
    isPlaying,
    isPlayerOpen,
    isRepeat,
    pauseSong,
    resumeSong,
    toggleFavorite,
    isFavorite,
    closePlayer,
    toggleRepeat,
    nextSong,
    previousSong,
  } = usePlayer();

  const [progress, setProgress] = useState(35); // Mock progress

  if (!currentSong || !isPlayerOpen) return null;

  const favorite = isFavorite(currentSong.id);

  return (
    <div className="fixed inset-0 z-50 bg-background animate-slide-up">
      {/* Background blur */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${currentSong.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(100px)",
        }}
      />

      <div className="relative h-full flex flex-col px-6 py-8 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={closePlayer}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ChevronDown size={28} />
          </button>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Tocando agora
          </span>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Share2 size={24} />
          </button>
        </div>

        {/* Cover Art */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="relative w-full max-w-[320px] aspect-square">
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              className={cn(
                "w-full h-full rounded-3xl object-cover shadow-2xl transition-transform duration-500",
                isPlaying && "animate-pulse-slow"
              )}
              style={{ boxShadow: "0 25px 60px -15px hsl(217 91% 60% / 0.3)" }}
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-foreground/10" />
          </div>
        </div>

        {/* Song Info */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-foreground truncate">
              {currentSong.title}
            </h1>
            <p className="text-lg text-muted-foreground">{currentSong.artist}</p>
          </div>
          <button
            onClick={() => toggleFavorite(currentSong.id)}
            className="p-3 rounded-full hover:bg-muted transition-colors"
          >
            <Heart
              size={28}
              className={cn(
                "transition-all duration-300",
                favorite
                  ? "text-primary fill-primary scale-110"
                  : "text-muted-foreground"
              )}
            />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>1:18</span>
            <span>{currentSong.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={toggleRepeat}
            className={cn(
              "p-3 rounded-full transition-colors",
              isRepeat ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Repeat size={24} />
          </button>
          <button
            onClick={previousSong}
            className="p-3 rounded-full hover:bg-muted transition-colors"
          >
            <SkipBack size={32} className="fill-foreground" />
          </button>
          <button
            onClick={() => (isPlaying ? pauseSong() : resumeSong())}
            className="w-18 h-18 bg-primary rounded-full flex items-center justify-center glow-primary transition-transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? (
              <Pause size={36} className="text-primary-foreground fill-primary-foreground" />
            ) : (
              <Play size={36} className="text-primary-foreground fill-primary-foreground ml-1" />
            )}
          </button>
          <button
            onClick={nextSong}
            className="p-3 rounded-full hover:bg-muted transition-colors"
          >
            <SkipForward size={32} className="fill-foreground" />
          </button>
          <button className="p-3 rounded-full text-muted-foreground hover:text-foreground transition-colors">
            <ListPlus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
