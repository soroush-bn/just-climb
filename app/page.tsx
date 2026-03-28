'use client'; // Required because we are using React Hooks (useState, useEffect)

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // 1. The State: Tracks which panel is currently "hovered"
  const [activePanel, setActivePanel] = useState('climbers');
  
  // 2. The Reference: Points to our Top Hero Section
  const heroRef = useRef(null);

  // 3. The Observer: Watches the scroll position to clear the URL hash
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the hero section is at least 50% visible on screen
        if (entries[0].isIntersecting) {
          // Silently remove the #solutions hash without refreshing the page
          window.history.replaceState(null, '', '/');
        }
      },
      { threshold: 0.5 } 
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Cleanup the observer when the page closes
    return () => observer.disconnect();
  }, []);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black">
      
      {/* =========================================
          SECTION 1: THE HERO 
          We attach our 'heroRef' here so the Observer can watch it!
          ========================================= */}
      <section ref={heroRef} className="relative h-screen w-full snap-start overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-h-full min-w-full object-cover"
        >
          <source src="/bg2.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute top-0 left-0 h-full w-full bg-black/70 z-0 pointer-events-none"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Elevate Your Climb.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl drop-shadow-md">
            The ultimate platform connecting climbers, coaches, route setters, and gym owners.
          </p>
          
          <Link href="/demo">
            <button className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition duration-300 text-lg shadow-xl hover:scale-105 transform">
              Request a Demo
            </button>
          </Link>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE SOLUTIONS 
          When the mouse leaves this entire section, we reset the active panel back to 'climbers'
          ========================================= */}
      <section 
        id="solutions" 
        className="relative h-screen w-full snap-start flex flex-col md:flex-row"
        onMouseLeave={() => setActivePanel('climbers')} 
      >
        
        {/* Panel 1: Climbers */}
        <Link 
          href="/solutions/climbers" 
          onMouseEnter={() => setActivePanel('climbers')}
          className="relative flex-1 cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800"
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${activePanel === 'climbers' ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: "url('/leftbg.jpg')" }}
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${activePanel === 'climbers' ? 'bg-black/40' : 'bg-black/80'}`} />
          <div className="relative h-full flex items-center justify-center p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">For the Climbers</h2>
          </div>
        </Link>

        {/* Panel 2: Gym Owners / Setters */}
        <Link 
          href="/solutions/gyms" 
          onMouseEnter={() => setActivePanel('gyms')}
          className="relative flex-1 cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800"
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${activePanel === 'gyms' ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: "url('/centerbg.jpg')" }}
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${activePanel === 'gyms' ? 'bg-black/40' : 'bg-black/80'}`} />
          <div className="relative h-full flex items-center justify-center p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">For Gym Owners &<br/>Route Setters</h2>
          </div>
        </Link>

        {/* Panel 3: Instructors */}
        <Link 
          href="/solutions/instructors" 
          onMouseEnter={() => setActivePanel('instructors')}
          className="relative flex-1 cursor-pointer overflow-hidden"
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${activePanel === 'instructors' ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: "url('/rightbg.jpg')" }}
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${activePanel === 'instructors' ? 'bg-black/40' : 'bg-black/80'}`} />
          <div className="relative h-full flex items-center justify-center p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">For Instructors</h2>
          </div>
        </Link>

      </section>
{/* =========================================
          SECTION 3: ABOUT US
          ========================================= */}
      <section 
        id="about" 
        className="relative h-screen w-full snap-start flex items-center justify-center bg-neutral-900 px-6 border-t border-neutral-800"
      >
        <div className="max-w-4xl text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
            Who We Are
          </h2>
          
          {/* A subtle decorative line to make it look premium */}
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          
          <p className="text-xl md:text-3xl text-gray-300 leading-relaxed font-light mt-8 drop-shadow-sm">
            We are a team of talented climbers, developers, AI engineers, and researchers gathered together to help climbers better send their projects.
          </p>
        </div>
      </section>
    </main>
  );
}