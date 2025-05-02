
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
  interval?: number; // Time in ms to show each image
  transitionDuration?: number; // Transition duration in ms
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 5000, // Default 5 seconds per image
  transitionDuration = 2000, // Default 2 seconds for transition
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // Only start the interval if we have more than one image
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setTransitioning(true);
      
      // Wait for transition to complete before changing the active index
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % images.length);
        setTransitioning(false);
      }, transitionDuration);
      
    }, interval + transitionDuration); // Total time = display time + transition time

    return () => clearInterval(timer);
  }, [images.length, interval, transitionDuration]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity bg-cover bg-center w-full h-full",
            {
              "opacity-100": activeIndex === index && !transitioning,
              "opacity-0": activeIndex !== index || transitioning,
              "animate-ken-burns": activeIndex === index,
            }
          )}
          style={{
            backgroundImage: `url(${image.src})`,
            transitionDuration: `${transitionDuration}ms`,
          }}
          aria-hidden={activeIndex !== index}
          role="img"
          aria-label={image.alt}
        />
      ))}
      <div className="absolute inset-0 bg-luxury-navy/60"></div>
    </div>
  );
};

export default ImageCarousel;
