import { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Flower from "~/components/Flower";
import "~/styles/flower.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Kupon Spesial Ulang Tahun!" },
    { name: "description", content: "Klaim kupon ulang tahun spesial dari aku untuk kamu 🎁" },
  ];
};

export default function CouponPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const coupons = [
    { id: 1, text: "∞ Uses for Free hug", img: "/img/coupon1.png" },
    { id: 2, text: "3 times Uses for Your Favorite Food", img: "/img/coupon2.png" },
    { id: 3, text: "∞ Uses for Our Movie Night", img: "/img/coupon3.png" },
    { id: 4, text: "∞ Uses for date with me, T&C Apply", img: "/img/coupon4.png" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-center relative">
        {/*Navbar Section*/}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-pink-50 shadow-md fixed top-0 left-0 z-50">
        <div className="text-xl font-bold text-pink-700">Hanina's Birthday 🎀</div>
        <nav className="space-x-4">
          <Link to="/" className="text-pink-600 hover:text-pink-800 font-medium">Home</Link>
          <Link to="/coupon" className="text-pink-600 hover:text-pink-800 font-medium">Coupon</Link>
          <Link to="/gift" className="text-pink-600 hover:text-pink-800 font-medium">Photos</Link>
        </nav>
      </header>


      {/* Content */}
      <section className="min-h-screen flex flex-col justify-center items-center pt-32 px-6">
        <div className="justify-start items-start flex flex-col px-0">
        <h1 className="text-4xl font-bold text-pink-800 mb-4 text-left">Kupon Spesial Untuk Haninaku</h1>
        <p className="text-pink-700 max-w-2xl mb-8 text-left leading-relaxed max-w-2x1">
          Berikut adalah kupon spesial yang aku buat hanya untuk kamu. Kamu bisa menggunakannya kapan saja untuk mendapatkan hadiah spesial dari aku. Selamat menikmati sayang
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="bg-pink-100 border border-pink-300 px-6 py-4 rounded-xl text-pink-700 shadow text-lg font-medium"
            >
                <img src={coupon.img} alt="icon" onClick={() => setSelectedImage(coupon.img)}/>
              {coupon.text}
            </div>
          ))}
        </div>

        {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Fullscreen coupon"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
      </section>
    </main>
  );
}
