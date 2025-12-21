'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function WindowAnimation() {
  const container = useRef(null);
  const frameRef = useRef(null);
  const leftSashRef = useRef(null);
  const rightSashRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, defaults: { ease: 'power2.out' } });

      // 1. "Installation": Frame segments draw in/fade in
      tl.fromTo(frameRef.current, 
        { scale: 0.8, opacity: 0, strokeDasharray: 1000, strokeDashoffset: 1000 },
        { scale: 1, opacity: 1, strokeDashoffset: 0, duration: 1.5 }
      )
      
      // 2. Sashes appear (Flying in from top/bottom)
      .from([leftSashRef.current, rightSashRef.current], {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
      }, "-=0.5")

      // 3. Glass fades in (Glazing)
      .to('.window-glass', {
        opacity: 0.6,
        duration: 0.8
      })

      // 4. "Opening": Right Sash slides open
      .to(rightSashRef.current, {
        x: -70, // Slide left
        duration: 1.5,
        ease: 'power1.inOut',
        delay: 0.5
      })
      
      // 5. Hold, then close (Reverse for loop)
      .to(rightSashRef.current, {
        x: 0,
        duration: 1.5,
        delay: 1
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="w-full h-full flex items-center justify-center p-4">
      {/* SVG Window Illustration */}
      <svg 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        // FIX: Removed fixed width/height. Added h-full w-auto to scale by height and keep aspect ratio.
        className="h-full w-auto max-w-full aspect-square drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outer Frame */}
        <rect 
          ref={frameRef}
          x="10" y="10" width="180" height="180" rx="4" 
          stroke="#4ade80" strokeWidth="4" fill="none" // Green Frame
        />

        {/* Left Sash (Fixed) */}
        <g ref={leftSashRef}>
          <rect x="15" y="15" width="82" height="170" rx="2" stroke="white" strokeWidth="2" fill="none" />
          <rect className="window-glass" x="17" y="17" width="78" height="166" fill="#a7f3d0" opacity="0" />
        </g>

        {/* Right Sash (Sliding) */}
        <g ref={rightSashRef}>
          <rect x="103" y="15" width="82" height="170" rx="2" stroke="white" strokeWidth="2" fill="none" />
          <rect className="window-glass" x="105" y="17" width="78" height="166" fill="#a7f3d0" opacity="0" />
          {/* Handle */}
          <line x1="110" y1="90" x2="110" y2="110" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}