import React, { createContext, useContext, useState, ReactNode } from "react";
import { Song, getSongById } from "@/data/musicData";

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  favorites: string[];
  isPlayerOpen: boolean;
  isRepeat: boolean;
  queue: string[];
  playSong: (songId: string) => void;
  pauseSong: () => void;
  resumeSong: () => void;
  toggleFavorite: (songId: string) => void;
  isFavorite: (songId: string) => boolean;
  openPlayer: () => void;
  closePlayer: () => void;
  toggleRepeat: () => void;
  nextSong: () => void;
  previousSong: () => void;
  setQueue: (songIds: string[]) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [queue, setQueueState] = useState<string[]>([]);

  const playSong = (songId: string) => {
    const song = getSongById(songId);
    if (song) {
      setCurrentSong(song);
      setIsPlaying(true);
      setIsPlayerOpen(true);
    }
  };

  const pauseSong = () => setIsPlaying(false);
  const resumeSong = () => setIsPlaying(true);

  const toggleFavorite = (songId: string) => {
    setFavorites((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId]
    );
  };

  const isFavorite = (songId: string) => favorites.includes(songId);

  const openPlayer = () => setIsPlayerOpen(true);
  const closePlayer = () => setIsPlayerOpen(false);

  const toggleRepeat = () => setIsRepeat((prev) => !prev);

  const nextSong = () => {
    if (!currentSong || queue.length === 0) return;
    const currentIndex = queue.indexOf(currentSong.id);
    const nextIndex = (currentIndex + 1) % queue.length;
    playSong(queue[nextIndex]);
  };

  const previousSong = () => {
    if (!currentSong || queue.length === 0) return;
    const currentIndex = queue.indexOf(currentSong.id);
    const prevIndex = currentIndex <= 0 ? queue.length - 1 : currentIndex - 1;
    playSong(queue[prevIndex]);
  };

  const setQueue = (songIds: string[]) => setQueueState(songIds);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        favorites,
        isPlayerOpen,
        isRepeat,
        queue,
        playSong,
        pauseSong,
        resumeSong,
        toggleFavorite,
        isFavorite,
        openPlayer,
        closePlayer,
        toggleRepeat,
        nextSong,
        previousSong,
        setQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};
