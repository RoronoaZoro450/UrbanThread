import React, { useState, useEffect } from 'react';
import './Hero.css';

const Icon = ({ path, className = 'icon' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {path}
  </svg>
);

const TruckIcon = () => <Icon path={<><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" /><path d="M14 9h4l4 4v4h-8v-8Z" /><circle cx="7.5" cy="18.5" r="2.5" /><circle cx="17.5" cy="18.5" r="2.5" /></>} />;
const PackageReturnIcon = () => <Icon path={<><path d="M12 2v2" /><path d="m14.5 4.5-2 2-2-2" /><path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6" /><path d="M16 13a4 4 0 0 0-8 0" /></>} />;
const ShieldIcon = () => <Icon path={<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .5-.87l8-4.5a1 1 0 0 1 1 0l8 4.5A1 1 0 0 1 20 6v7Z" /><path d="m9 12 2 2 4-4" /></>} />;
const StarIcon = () => <Icon path={<><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></>} />;
const HeartIcon = () => <Icon path={<><path d="m19,14 c0,5 -7,9 -7,9 s-7,-4 -7,-9 a5,5 0 0,1 10,0 c0,-3 3,-3 4,0z" /></>} />;
const SparklesIcon = () => <Icon path={<><path d="m12,3 l1.912,5.813 l6.088,1.187 l-4.5,3.986 l1.462,5.814 l-4.962,-2.8 l-4.962,2.8 l1.462,-5.814 l-4.5,-3.986 l6.088,-1.187 z" /></>} />;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      title: "Unleash Your Style",
      subtitle: "Shop the latest trends from exclusive collections. Quality and style, delivered right to your doorstep.",
      cta: "Explore Collection",
      theme: "theme-1"
    },
    {
      title: "Premium Quality",
      subtitle: "Crafted with precision and attention to detail. Experience luxury that doesn't compromise on comfort.",
      cta: "Shop Premium",
      theme: "theme-2"
    },
    {
      title: "Limited Edition",
      subtitle: "Exclusive designs available for a limited time. Get yours before they're gone forever.",
      cta: "Shop Limited",
      theme: "theme-3"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="hero-section-enhanced">
      <div className="hero-background-enhanced">
        <div className="hero-image-container">
          <div 
            className="hero-image"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`
            }}
          />
        </div>
        
        <div className={`hero-overlay ${currentSlideData.theme}`} />
        
        {/* Animated Particles */}
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content-enhanced">
        <div className={`content-wrapper ${isLoaded ? 'loaded' : ''}`}>
          {/* Floating Badge */}
          <div className="floating-badge">
            <SparklesIcon />
            <span>New Collection Available</span>
          </div>
          
          {/* Title */}
          <h1 className="hero-title-enhanced">
            <span className="title-line-1">
              {currentSlideData.title.split(' ')[0]}
            </span>
            <br />
            <span className="title-line-2">
              {currentSlideData.title.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle-enhanced">
            {currentSlideData.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="cta-primary">
              <div className="button-overlay" />
              <span className="button-content">
                {currentSlideData.cta}
                <div className="button-arrow">→</div>
              </span>
            </button>
            
            <button className="cta-secondary">
              <span className="button-content-secondary">
                <HeartIcon />
                View Wishlist
              </span>
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Feature Bar */}
      <div className="feature-bar-enhanced">
        <div className="feature-container">
          <div className="feature-item-enhanced">
            <div className="feature-icon">
              <TruckIcon />
            </div>
            <div className="feature-text">
              <div className="feature-title">Free Shipping</div>
              <div className="feature-desc">Worldwide delivery</div>
            </div>
          </div>
          
          <div className="feature-item-enhanced">
            <div className="feature-icon">
              <PackageReturnIcon />
            </div>
            <div className="feature-text">
              <div className="feature-title">Easy Returns</div>
              <div className="feature-desc">30-day policy</div>
            </div>
          </div>
          
          <div className="feature-item-enhanced">
            <div className="feature-icon">
              <ShieldIcon />
            </div>
            <div className="feature-text">
              <div className="feature-title">Secure Payment</div>
              <div className="feature-desc">100% protected</div>
            </div>
          </div>
          
          <div className="feature-item-enhanced">
            <div className="feature-icon">
              <StarIcon />
            </div>
            <div className="feature-text">
              <div className="feature-title">Premium Quality</div>
              <div className="feature-desc">5-star rated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;