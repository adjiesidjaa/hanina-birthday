import { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Flower from "~/components/Flower";
import "~/styles/flower.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Selamat Ulang Tahun!" },
    { name: "description", content: "Sebuah hadiah spesial ulang tahun untuk kamu ❤️" },
  ];
};

export default function Index() {
  const [showGift, setShowGift] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [isClosingLetter, setIsClosingLetter] = useState(false); // NEW
  const [showFlower, setShowFlower] = useState(true);
  const [fadeOutFlower, setFadeOutFlower] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOutFlower(true);
    }, 3500);

    const removeTimer = setTimeout(() => {
      setShowFlower(false);
    }, 4200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setShowGift(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleCloseLetter = () => {
    setIsClosingLetter(true);
    setTimeout(() => {
      setShowLetter(false);
      setIsClosingLetter(false);
    }, 500); // match duration-300
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-center relative">

      {/* 🌸 Flower Loading Screen */}
      {showFlower && (
        <div
          className={`fixed inset-0 z-[9999] bg-black flex justify-center transition-opacity duration-700 ${
            fadeOutFlower ? "opacity-0" : "opacity-100"
          }`}
        >
          <Flower />
        </div>
      )}

      {/* 🎀 Hero Section */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-pink-50 shadow-md fixed top-0 left-0 z-50">
        <div className="text-xl font-bold text-pink-700">Hanina's Birthday 🎀</div>
        <nav className="space-x-4">
          <button onClick={() => scrollToSection("home")} className="text-pink-600 hover:text-pink-800 font-medium">Home</button>
          <Link to="/coupon" className="text-pink-600 hover:text-pink-800 font-medium">Coupon</Link>
          <Link to="/gift" className="text-pink-600 hover:text-pink-800 font-medium">Photos</Link>
        </nav>
      </header>

      {/* 🏡 Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16 pt-32 bg-[#f4f0eb] relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl relative z-10">
          <div className="md:w-1/2 px-6 text-center md:text-left space-y-4 z-10">
            <p className="text-gray-700 text-sm tracking-widest uppercase">Hi Sayang,</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Happy<br />Birthday! <span className="text-4xl">&lt;3</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center px-6">
            <div className="rounded-full border-8 border-black">
              <img src="/img/hanina.jpeg" alt="hanina" className="w-64 h-64 object-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
        <div className="bg-[#e0d6d4] flex flex-col items-center justify-center p-8 text-center">
          <img src="/img/letter.png" alt="Letter" className="w-32 mb-6" />
          <h3 className="text-sm font-bold tracking-widest mb-2">LETTER</h3>
          <button onClick={() => setShowLetter(true)} className="bg-black text-white text-xs px-4 py-2 rounded">Baca Suratnya</button>
        </div>
        <div className="bg-[#fcbcc9] flex flex-col items-center justify-center p-8 text-center">
          <img src="/img/coupon.png" alt="Coupon" className="w-32 mb-6" />
          <h3 className="text-sm font-bold tracking-widest mb-2">COUPONS</h3>
          <Link className="bg-black text-white text-xs px-4 py-2 rounded" to="/coupon">CLAIM THEM</Link>
        </div>
        <div className="bg-[#ec5c71] flex flex-col items-center justify-center p-8 text-center">
          <img src="/img/gallery.png" alt="Gift" className="w-32 mb-6" />
          <h3 className="text-sm font-bold tracking-widest mb-2">Memories</h3>
          <Link to="/gift" className="bg-black text-white text-xs px-4 py-2 rounded">CLICK TO OPEN</Link>
        </div>
      </section>

      {/* Letter popup animation */}
      {showLetter && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isClosingLetter ? "opacity-0" : "opacity-100"}`}>
          <div className={`bg-white rounded-2xl p-8 shadow-2xl text-pink-800 text-lg transform transition-all duration-500 ${isClosingLetter ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
            <h2 className="text-2xl font-bold mb-4">Hello sayangku</h2>
            <p className="text-sm text-left">
              Selamat ulang tahun yang ke-20 yaa sayangku!!!<br />
              Semoga di umur barumu ini, kamu bisa mencapai semua hal yang kamu pengen. <br />
              U're twenty now, sudah kepala dua yah, pasti ga kerasa waktu yang sudah kamu laluin. <br/>
              Semoga kamu ke depannya menjadi lebih bertanggung jawab, lebih dewasa, dan lebih baik lagi.<br/>
              I wish you all the best things in the world sayang, am gonna be here with u all the time, so just do ur best, i'll support you. <br/>
              Aku cuman pengen ngingetin kalau kamu itu orang yang sangat spesial buat aku, aku ga bisa bayangin if i never met you before. <br/>
              Sekali lagi, selamat ulang tahun my love, semoga kamu selalu berbahagia yaa sayang.<br/>
              I love you so much and i always will love you
              
            </p>
            <button
              onClick={handleCloseLetter}
              className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
            >
              Tutup Surat
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
