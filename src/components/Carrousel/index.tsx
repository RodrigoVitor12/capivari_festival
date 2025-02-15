import { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image4 from "../../assets/image4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      url: image1,
    },
    {
      id: 2,
      url: image2,
    },
    {
      id: 3,
      url: image4,
    },
    {
      id: 4,
      url: image5,
    },
    {
      id: 5,
      url: image6,
    },
    {
      id: 6,
      url: image7,
    },
    {
      id: 7,
      url: image8,
    },
    {
      id: 8,
      url: image9,
    },
  ];

  const totalSlides = slides.length;

  function prevSlide() {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  }

  function nextSlide() {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-full h-full">
              <img
                src={slide.url}
                alt={`Slide ${slide.id}`}
                className="w-[400px] h-full object-cover mx-auto rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Botões de navegação */}
        <div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2  p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
            <ChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2  p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                <ChevronRight />
            </button>
        </div>
      </div>
    </div>
  );
}
