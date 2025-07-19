import { useEffect, useRef, useState } from "react";

const playlist = [
  {
    title: "Sweet",
    artist: "Cigarettes After Sex",
    file: "/music/sweet.mp3",
    cover: "/img/album.jpg",
    duration: 195 // dalam detik (3:15)
  },
//   {
//     title: "Kimo",
//     artist: "Mocca",
//     file: "/music/kimo.mp3",
//     cover: "/img/album2.jpg",
//     duration: 168 // 2:48
//   }
];

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" + s : s}`;
}

export default function SpotifyPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const song = playlist[currentSong];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSong]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress(audio.currentTime);
    }
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
    setProgress(0);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-pink-50 text-white flex items-center justify-between px-4 py-2 z-50">
      {/* Left: Song Info */}
      <div className="flex items-center space-x-4">
        <img src={song.cover} alt="cover" className="w-12 h-12 object-cover rounded-md" />
        <div>
          <div className="font-semibold text-sm text-black">{song.title}</div>
          <div className="text-xs text-pink-700">{song.artist}</div>
        </div>
      </div>

      {/* Middle: Controls & Progress */}
      <div className="flex flex-col items-center w-2/5">
        <div className="flex items-center space-x-4 mb-1">
          <button onClick={handlePrev} className="text-xl">
            <img
            src="/img/backward.jpg"
            className= "bg-pink-700 w-6 h-6"></img>
          </button>
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className="w-10 h-15 flex items-center justify-center text-black"
          >
            <img
            src={isPlaying ? "/img/pause.jpg" : "/img/play.jpg"}
            alt={isPlaying ? "Pause" : "Play"}
            className="bg-pink-700 w-8 h-8"
            />

          </button>
          <button onClick={handleNext} className="text-xl">
            <img
            src = "/img/forward.jpg"
            className= "bg-pink-700 w-8 h-8"></img>
          </button>
        </div>
        <div className="flex items-center space-x-2 text-xs w-full">
          <span>{formatTime(progress)}</span>
          <div className="flex-1 h-1 bg-gray-600 rounded relative">
            <div
              className="h-1 bg-pink-500 absolute rounded"
              style={{ width: `${(progress / song.duration) * 100}%` }}
            />
          </div>
          <span>{formatTime(song.duration - progress)}</span>
        </div>
      </div>

      {/* Right: Dummy Volume & Icons */}
      <div className="hidden md:flex items-center space-x-3 text-xl">
        <span className="text-green-500">▶</span>
        <span className="text-gray-400">🎤</span>
        <span className="text-gray-400">📃</span>
        <span className="text-gray-400">🔊</span>
        <div className="w-20 h-1 bg-gray-600 rounded">
          <div className="h-1 bg-white w-2/3 rounded" />
        </div>
      </div>

      {/* Audio */}
      <audio
        ref={audioRef}
        src={song.file}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
