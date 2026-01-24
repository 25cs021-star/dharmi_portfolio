"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Large Typography */}
        <div className="relative mb-8">
          
          <h2
            className={`text-[12vw] md:text-[10vw] lg:text-[8vw] font-black text-foreground leading-none tracking-tighter transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            DHARMI ITALIYA
          </h2>
        </div>

        {/* Name */}
        <p className="text-lg md:text-xl font-medium text-muted-foreground tracking-widest uppercase mb-12">
          Portfolio
        </p>

        {/* Illustration placeholder - Avatar with initials */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-black text-foreground/80">
                  DI
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2">
                  Software Developer
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-foreground rounded-full" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
