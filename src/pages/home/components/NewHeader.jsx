import React, { useState, useEffect } from 'react';
import { allCarouselData } from '../../../data/carouselDate';
import { useTranslation } from 'react-i18next';



// Reusable SVG for the chevron icons.
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 md:w-10 md:h-10 text-white transition-transform transform hover:scale-110"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 md:w-10 md:h-10 text-white transition-transform transform hover:scale-110"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const App = () => {
  // Use mock hook for demonstration
  const { i18n } = useTranslation(); 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get the current language from the i18n object (or mock object)
  const language = i18n.language; 

  // Function to move to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? allCarouselData[language].length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to move to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === allCarouselData[language].length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Autoplay functionality, now set to 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, language]); // Re-run effect when currentIndex or language changes

  // Reset index when language changes to prevent out-of-bounds error
  useEffect(() => {
      setCurrentIndex(0);
  }, [language]);


  const carouselData = allCarouselData[language];
  
  // Dynamic class for text alignment: Center on mobile, left/right on desktop
  const alignmentClasses = language === 'ar' 
    ? 'text-center md:text-right' 
    : 'text-center md:text-left';

  // Dynamic margin classes for the fixed-width paragraph (w-3/5)
  // mx-auto centers it on mobile. md:ml-auto/md:mr-auto aligns the block on desktop.
  const paragraphMarginClasses = language === 'ar' 
    ? 'mx-auto md:ml-auto md:mr-0' 
    : 'mx-auto md:mr-auto md:ml-0';


  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-primary font-sans">
       
      <div
        className="relative w-full h-full flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Map over the data to create each slide */}
        {carouselData.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Slide Content Grid - Set overall directionality for layout swapping */}
            <div className="absolute inset-0 grid md:grid-cols-2 place-items-center p-4 md:p-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              
              {/* Text Section: Mobile text is now centered, desktop alignment is dynamic */}
              <div className={`text-white space-y-6 max-w-lg ${alignmentClasses}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold ">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 font-medium" >
                  {slide.subtitle}
                </p>
                {/* Paragraph: Block is centered on mobile, then aligned on desktop */}
                <p className={`text-tiny lg:text-smaller font-light w-4/5 ${paragraphMarginClasses}`}>
                  {slide.subtitleTwo}
                </p>
                <a
                  href={slide.buttonLink}
                  className="inline-block px-8 py-3 mt-4 text-lg font-bold text-gray-900 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  {slide.buttonText}
                </a>
              </div>
              
              {/* Image Section */}
            <div className="w-full h-full relative">
                    <div className="h-[260px] w-[260px]  sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px] absolute left-1/2 -translate-x-1/2 top-1/4  md:top-1/2 -translate-y-1/2">
                      <img
                        src={slide.mainImage}
                        alt="{homeData.HeroSection.mainImageAlt}"
                        className="rounded-full object-center object-cover w-full h-full shadow-secondary shadow-2xl drop-shadow-2xl"
                      />
                      <div className="h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] lg:h-[160px] lg:w-[160px] absolute -left-[10px] sm:-left-[50px] -top-[50px] rounded-full shadow-secondary shadow-2xl drop-shadow-2xl">
                        <img
                          src={slide.secondImage}
                          alt="{homeData.HeroSection.secondImageAlt}"
                          className="rounded-full object-center object-cover w-full h-full z-30 relative"
                        />
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4 md:px-8 z-10">
        <button
          onClick={prevSlide}
          className="p-2 md:p-4 rounded-full bg-black bg-opacity-10 transition-colors duration-300 hover:bg-opacity-30"
          aria-label="Previous Slide"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 md:p-4 rounded-full bg-black bg-opacity-10 transition-colors duration-300 hover:bg-opacity-30"
          aria-label="Next Slide"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white shadow-md' : 'bg-gray-500 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
