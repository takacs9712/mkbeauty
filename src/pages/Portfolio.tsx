import { useState } from "react";

import img1 from "../assets/facebook/1.jpg";
import img2 from "../assets/facebook/2.jpg";
import img3 from "../assets/facebook/3.jpg";
import img4 from "../assets/facebook/4.jpg";
import img5 from "../assets/facebook/5.jpg";
import img6 from "../assets/facebook/6.jpg";
import img7 from "../assets/facebook/7.jpg";
import img8 from "../assets/facebook/8.jpg";
import img9 from "../assets/facebook/9.jpg";

const ALL_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const IMAGES_PER_PAGE = 6;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const pageCount = Math.ceil(ALL_IMAGES.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = ALL_IMAGES.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > pageCount) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length
    );
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % ALL_IMAGES.length);
  };

  return (
    <section className="min-h-screen py-32 bg-gradient-to-br from-rose-50 via-pink-50/50 to-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc */}
        <div className="text-center mb-10">
          <h1 className="page-title">Munkáim</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Válogatás az elkészült sminktetoválásokból és kozmetikai munkákból.
          </p>
        </div>

        {/* Képkártyák – szellősebb, egységes rács */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentImages.map((src, index) => {
            const globalIndex = startIndex + index;
            return (
              <button
                key={globalIndex}
                type="button"
                onClick={() => openLightbox(globalIndex)}
                className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[5/5] w-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Galéria kép ${globalIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium text-white">
                    Galéria kép {globalIndex + 1}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/80 text-rose-700 font-semibold">
                    Megnyitás
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Paginátor */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm rounded-lg border border-rose-200 bg-white text-rose-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rose-50 transition"
          >
            Előző
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-9 h-9 text-sm rounded-lg border transition ${
                page === currentPage
                  ? "bg-rose-600 text-white border-rose-600"
                  : "bg-white text-rose-700 border-rose-200 hover:bg-rose-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="px-3 py-2 text-sm rounded-lg border border-rose-200 bg-white text-rose-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rose-50 transition"
          >
            Következő
          </button>
        </div>
      </div>

      {/* Lightbox / modál */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={ALL_IMAGES[lightboxIndex]}
              alt={`Nagyított kép ${lightboxIndex + 1}`}
              className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl bg-black"
            />

            {/* Navigációs gombok */}
            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              ›
            </button>

            {/* Bezárás */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
