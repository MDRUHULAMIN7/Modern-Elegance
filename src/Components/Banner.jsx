import { useEffect, useState } from "react";

const Banner = () => {
  const images = [
    "https://res.cloudinary.com/dpomtzref/image/upload/v1731513962/banner_laochr.png",
    "https://res.cloudinary.com/dpomtzref/image/upload/v1731516118/g_ikxl7a.webp",
    "https://res.cloudinary.com/dpomtzref/image/upload/v1731516435/banner_with_black_overlay_zwlhhn.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom(1.05);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setZoom(1);
      }, 600);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const changeSlide = (index) => {
    setZoom(1.05);
    setTimeout(() => {
      setCurrentIndex(index);
      setZoom(1);
    }, 600);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[50vh] md:h-[70vh] lg:h-[640px] object-cover transition-transform duration-700 ease-in-out"
              style={{
                transform: `scale(${zoom})`,
                filter: zoom === 1.05 ? "blur(2px)" : "blur(0)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
            <div className="absolute top-1/2 md:top-1/2 lg:top-72 left-8 md:left-16 lg:left-32 transform -translate-y-1/2 text-white space-y-4">
              <h1 className="font-medium text-2xl md:text-3xl lg:text-[46px] leading-[30px] md:leading-[40px] lg:leading-[60px] mb-4 uppercase">
                Modern elegance
              </h1>
              <p className="text-sm md:text-base mb-6">
                Our most popular bifold. Perfect for thermal efficiency.
              </p>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#EA4715] text-white text-xs md:text-sm rounded-sm transition">
                Our Services
              </button>

              <div className="mt-8 md:mt-10 lg:mt-14 transform flex space-x-2 md:space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                      currentIndex === index ? "bg-white" : "bg-gray-400"
                    } hover:bg-gray-500`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
