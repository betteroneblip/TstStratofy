import { Play } from "lucide-react";
import { Playlist, getSongById } from "@/data/musicData";
import { usePlayer } from "@/contexts/PlayerContext";

interface PlaylistCardProps {
  playlist: Playlist;
}

export const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const { playSong, setQueue } = usePlayer();

  const handlePlay = () => {
    if (playlist.songs.length > 0) {
      setQueue(playlist.songs);
      playSong(playlist.songs[0]);
    }
  };

  return (
    <div
      onClick={handlePlay}
      className="group relative bg-gradient-to-b from-card to-card/50 p-4 rounded-2xl hover-scale hover-glow cursor-pointer transition-all duration-300 animate-fade-in"
    >
      <div className="relative mb-4">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-full aspect-square rounded-xl object-cover shadow-lg"
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 glow-primary">
          <Play size={24} className="text-primary-foreground fill-primary-foreground ml-1" />
        </button>
      </div>
      <h3 className="font-semibold text-foreground truncate">{playlist.name}</h3>
      <p className="text-sm text-muted-foreground">
        {playlist.songs.length} músicas • {playlist.playCount.toLocaleString()} plays
      </p>
    </div>
  );
};
