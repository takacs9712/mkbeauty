import { useState, useMemo, useCallback } from "react";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";

const Portfolio = () => {
  const ALL_IMAGES = useMemo(() => {
    const modules = import.meta.glob<{ default: string }>(
      "../assets/facebook/*.jpg",
      { eager: true }
    );
    return Object.values(modules).map((module) => module.default as string);
  }, []);

  const IMAGES_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const pageCount = Math.ceil(ALL_IMAGES.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = ALL_IMAGES.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > pageCount) return;
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [pageCount]
  );

  const openLightbox = useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length
    );
  }, [lightboxIndex, ALL_IMAGES.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % ALL_IMAGES.length);
  }, [lightboxIndex, ALL_IMAGES.length]);

  return (
    <section className="min-h-screen pt-32 pb-20 sm:py-28 lg:py-36 bg-gradient-to-br from-rose-50 via-pink-50/30 to-rose-100/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="page-title">Munkáim</h1>
          <p className="body-large max-w-2xl mx-auto">
            Válogatás az elkészült sminktetoválásokból és kozmetikai munkákból
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentImages.map((src, index) => {
            const globalIndex = startIndex + index;
            return (
              <motion.button
                key={globalIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                type="button"
                onClick={() => openLightbox(globalIndex)}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                aria-label={`Galéria kép ${globalIndex + 1} megnyitása`}
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Galéria kép ${globalIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-rose-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={goToPage}
        />
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center px-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Nagyított kép nézet"
        >
          <div
            className="relative max-w-5xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={ALL_IMAGES[lightboxIndex]}
              alt={`Nagyított kép ${lightboxIndex + 1}`}
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Previous button */}
            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-rose-50 text-rose-700 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
              aria-label="Előző kép"
            >
              <span className="text-2xl sm:text-3xl font-bold">‹</span>
            </button>

            {/* Next button */}
            <button
              onClick={showNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-rose-50 text-rose-700 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
              aria-label="Következő kép"
            >
              <span className="text-2xl sm:text-3xl font-bold">›</span>
            </button>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 bg-white hover:bg-rose-50 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
              aria-label="Bezárás"
            >
              <span className="text-2xl font-bold">✕</span>
            </button>

            {/* Image counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <span className="body-small font-semibold text-gray-700">
                {lightboxIndex + 1} / {ALL_IMAGES.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
