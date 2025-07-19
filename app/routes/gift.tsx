import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import SpotifyPlayer from "../components/SpotifyPlayer";

export const meta: MetaFunction = () => {
  return [
    { title: "Selamat Ulang Tahun!" },
    {
      name: "description",
      content: "Sebuah hadiah spesial ulang tahun untuk kamu ❤️",
    },
  ];
};

export default function Gift() {
  useEffect(() => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-center relative pb-16">
      {/* Animated Floating Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <img
            key={i}
            src={`/img/foto${(i % 6) + 1}.jpeg`}
            className="absolute w-20 h-20 object-cover rounded-full opacity-30 animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
              animationDelay: `${i * 3}s`,
            }}
            alt=""
          />
        ))}
      </div>

      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-pink-50 shadow-md fixed top-0 left-0 z-50">
        <div className="text-xl font-bold text-pink-700">Hanina's Birthday 🎀</div>
        <nav className="space-x-4">
          <Link to="/" className="text-pink-600 hover:text-pink-800 font-medium">
            Home
          </Link>
          <Link
            to="/coupon"
            className="text-pink-600 hover:text-pink-800 font-medium"
          >
            Coupon
          </Link>
          <Link to="/gift" className="text-pink-600 hover:text-pink-800 font-medium">
            Photos
          </Link>
        </nav>
      </header>

    {/* Photos */}
    <section className="pt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl px-4 mx-auto mt-8 auto-rows-[300px] sm:auto-rows-[200px]">
        {/* Foto 2 */}
        <div className="relative group [perspective:1000px] row-span-2">
          <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img src="img/foto2.jpeg" className="w-full h-full object-cover rounded-[24px]" alt="Foto 2" />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[24px] flex items-center justify-center p-4">
              <p className="text-black font-semibold text-center text-sm sm:text-base">
                Ini foto yang aku ambil ketika kita sedang duduk di depan rumahmu saat setelah pulang sekolah.
              </p>
            </div>
          </div>
        </div>

        {/* Foto 5 */}
        <div className="relative group [perspective:1000px] sm:col-span-2">
          <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img src="img/foto5.jpeg" className="w-full h-full object-cover rounded-[24px]" alt="Foto 5" />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[24px] flex items-center justify-center p-4">
              <p className="text-black font-semibold text-center text-sm sm:text-base">
                Our best photo setelah kita balikan, it's my favorite one :D
              </p>
            </div>
          </div>
        </div>

        {/* Foto 6 */}
        <div className="relative group [perspective:1000px]">
          <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img src="img/foto6.jpeg" className="w-full h-full object-cover rounded-[24px]" alt="Foto 6" />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[24px] flex items-center justify-center p-4">
              <p className="text-black font-semibold text-center text-sm sm:text-base">
                Photo that u took when its our tanggal jadian. Our first date setelah officially dating.
              </p>
            </div>
          </div>
        </div>

        {/* Foto 4 */}
        <div className="relative group [perspective:1000px]">
          <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img src="img/foto4.jpeg" className="w-full h-full object-cover rounded-[24px]" alt="Foto 4" />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[24px] flex items-center justify-center p-4">
              <p className="text-black font-semibold text-center text-sm sm:text-base">
                Our first photobooth setelah officially balikan. We made a content there too xD
              </p>
            </div>
          </div>
        </div>

        {/* Foto 1 */}
        <div className="relative group [perspective:1000px]">
          <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img src="img/foto1.jpeg" className="w-full h-full object-cover rounded-[24px]" alt="Foto 1" />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[24px] flex items-center justify-center p-4">
              <p className="text-black font-semibold text-center text-sm sm:text-base">
                Foto ceweku yang cantik dengan bunga yang aku berikan. Ini bunga pertamaku ke Hanina setelah kita balikan.
              </p>
            </div>
          </div>
        </div>

        {/* Foto 3 */}
        <div className="relative group [perspective:1000px] sm:col-span-2">
          <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img src="img/foto3.jpeg" className="w-full h-full object-cover rounded-[24px]" alt="Foto 3" />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[24px] flex items-center justify-center p-4">
              <p className="text-black font-semibold text-center text-sm sm:text-base">
                Jujur aku kurang inget kenapa we took this photo, but it's one of my all time fav of our photo sayang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Music Player */}
      <SpotifyPlayer />
    </main>
  );
}
