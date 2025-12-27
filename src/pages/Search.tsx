import { useState, useMemo } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { songs, searchSongs } from "@/data/musicData";
import { SongCard } from "@/components/SongCard";

const Search = () => {
  const [query, setQuery] = useState("");

  const filteredSongs = useMemo(() => {
    if (!query.trim()) return songs;
    return searchSongs(query);
  }, [query]);

  return (
    <div className="min-h-screen pb-36">
      {/* Search Header */}
      <div className="sticky top-0 z-20 px-6 pt-12 pb-6 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <h1 className="text-2xl font-bold text-foreground mb-4">Buscar</h1>
        <div className="relative">
          <SearchIcon
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <input
            type="text"
            placeholder="Músicas, artistas ou álbuns..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-secondary/80 border border-border/50 rounded-2xl py-4 pl-12 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="px-6 pt-6">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredSongs.length} {filteredSongs.length === 1 ? "resultado" : "resultados"}
        </p>
        <div className="space-y-2">
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
        {filteredSongs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhuma música encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
