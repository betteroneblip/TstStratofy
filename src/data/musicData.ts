// Dados das músicas - Adicione suas músicas aqui facilmente!
export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string;
  audioUrl?: string; // URL do arquivo de áudio
  playCount: number;
}

export interface Playlist {
  id: string;
  name: string;
  cover: string;
  songs: string[]; // IDs das músicas
  playCount: number;
}

// Músicas - Adicione novas músicas aqui
export const songs: Song[] = [
  {
    id: "1",
    title: "Midnight Dreams",
    artist: "Stratosfy",
    album: "Neon Nights",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    duration: "3:45",
    playCount: 1520,
  },
  {
    id: "2",
    title: "Electric Soul",
    artist: "Stratosfy",
    album: "Digital Waves",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    duration: "4:12",
    playCount: 2340,
  },
  {
    id: "3",
    title: "Starlight",
    artist: "Stratosfy",
    album: "Cosmic Journey",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
    duration: "3:58",
    playCount: 1890,
  },
  {
    id: "4",
    title: "Neon City",
    artist: "Stratosfy",
    album: "Urban Nights",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    duration: "4:30",
    playCount: 3100,
  },
  {
    id: "5",
    title: "Deep Blue",
    artist: "Stratosfy",
    album: "Ocean Vibes",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
    duration: "3:22",
    playCount: 980,
  },
  {
    id: "6",
    title: "Future Beats",
    artist: "Stratosfy",
    album: "Tomorrow",
    cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=400&h=400&fit=crop",
    duration: "4:05",
    playCount: 2780,
  },
  {
    id: "7",
    title: "Pulse",
    artist: "Stratosfy",
    album: "Heartbeat",
    cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=400&fit=crop",
    duration: "3:33",
    playCount: 1650,
  },
  {
    id: "8",
    title: "Gravity",
    artist: "Stratosfy",
    album: "Space Time",
    cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=400&h=400&fit=crop",
    duration: "4:18",
    playCount: 2100,
  },
  {
    id: "9",
    title: "Echoes",
    artist: "Stratosfy",
    album: "Reflections",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
    duration: "3:50",
    playCount: 1420,
  },
  {
    id: "10",
    title: "Aurora",
    artist: "Stratosfy",
    album: "Northern Lights",
    cover: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=400&fit=crop",
    duration: "4:42",
    playCount: 890,
  },
];

// Playlists - Adicione novas playlists aqui
export const playlists: Playlist[] = [
  {
    id: "pl1",
    name: "Chill Vibes",
    cover: "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?w=400&h=400&fit=crop",
    songs: ["1", "3", "5", "9"],
    playCount: 5420,
  },
  {
    id: "pl2",
    name: "Night Drive",
    cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=400&h=400&fit=crop",
    songs: ["2", "4", "6", "8"],
    playCount: 4890,
  },
  {
    id: "pl3",
    name: "Focus Mode",
    cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop",
    songs: ["1", "5", "7", "10"],
    playCount: 3200,
  },
  {
    id: "pl4",
    name: "Energy Boost",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop",
    songs: ["2", "4", "6"],
    playCount: 6100,
  },
];

// Funções auxiliares
export const getSongById = (id: string): Song | undefined => {
  return songs.find((song) => song.id === id);
};

export const getPlaylistById = (id: string): Playlist | undefined => {
  return playlists.find((playlist) => playlist.id === id);
};

export const getTopSongs = (limit: number = 10): Song[] => {
  return [...songs].sort((a, b) => b.playCount - a.playCount).slice(0, limit);
};

export const getTopPlaylists = (limit: number = 4): Playlist[] => {
  return [...playlists].sort((a, b) => b.playCount - a.playCount).slice(0, limit);
};

export const searchSongs = (query: string): Song[] => {
  const lowerQuery = query.toLowerCase();
  return songs.filter(
    (song) =>
      song.title.toLowerCase().includes(lowerQuery) ||
      song.artist.toLowerCase().includes(lowerQuery) ||
      song.album.toLowerCase().includes(lowerQuery)
  );
};
