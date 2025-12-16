import { useState, useEffect, useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const galleryImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
];

export const SimpleCleanSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden pb-0">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">Simple and Clean Solutions</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
          </p>
        </div>

        {/* Image Cluster Container - Fixed width, centered */}
        <div className="flex justify-center mb-12">
          <div 
            ref={ref}
            className="relative w-[900px] h-[500px]"
          >
            {/* Left Image */}
            <div 
              className={`absolute bottom-0 left-1/4 transform -translate-x-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <img 
                src={galleryImages[0]} 
                alt="Gallery image 1" 
                className="w-[280px] h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
            </div>
            
            {/* Center Image (Dominant) */}
            <div 
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '0s' }}
            >
              <img 
                src={galleryImages[1]} 
                alt="Gallery image 2" 
                className="w-[320px] h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
            </div>
            
            {/* Right Image */}
            <div 
              className={`absolute bottom-0 left-3/4 transform -translate-x-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <img 
                src={galleryImages[2]} 
                alt="Gallery image 3" 
                className="w-[280px] h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center font-heading text-xl lg:text-2xl italic text-muted-foreground mb-0">
          Less is definitely more.
        </p>
      </div>
    </section>
  );
};