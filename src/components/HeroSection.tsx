"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        leftContentRef.current?.children || [],
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        },
      ).fromTo(
        rightImageRef.current,
        {
          opacity: 0,
          x: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.7",
      );

      gsap.to(".hero-wave", {
        rotate: 4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-background min-h-screen flex items-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={leftContentRef}
            className="flex flex-col items-start justify-center"
          >
            <h1 className="text-[35px] sm:text-[50px] lg:text-[60px] leading-[1] font-extrabold tracking-[-2px] text-foreground max-w-[700px]">
              UK Based Expert Amazon Consultants
            </h1>

            <p className="mt-8 text-[18px] sm:text-[20px] leading-[1.8] text-muted-foreground max-w-[720px]">
              Boost your online store with customized strategies for Amazon,
              Shopify, eBay, Walmart, and more. Drive sales, improve visibility,
              and achieve lasting growth with expert guidance tailored to your
              brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto">
              <button className="bg-primary hover:bg-primary/90 transition-all duration-300 text-primary-foreground font-bold text-[18px] px-10 py-5 rounded-full min-w-[280px] shadow-lg shadow-primary/20">
                Boost Your Amazon Sales
              </button>

              <button className="bg-secondary hover:bg-secondary/80 transition-all duration-300 text-secondary-foreground font-bold text-[18px] px-10 py-5 rounded-full min-w-[280px] border border-foreground/10">
                Fix Your Amazon Issues
              </button>
            </div>

            <p className="mt-14 text-[20px] text-muted-foreground leading-relaxed">
              Unsure where to begin? Claim your
              <span className="text-primary font-bold">
                {" "}
                FREE listing audit
              </span>{" "}
              today.
            </p>

            {/* Engagement Card */}
            <div className="mt-10 glass-dark rounded-full px-5 py-3 shadow-sm flex items-center gap-4 flex-wrap max-w-fit">
              <div className="flex -space-x-3">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="client"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-background"
                />
                <Image
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="client"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-background"
                />
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="client"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-background"
                />
              </div>

              <div>
                <h4 className="text-[20px] font-bold text-foreground leading-none">
                  275+ Client Engagements
                </h4>

                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-[13px] text-muted-foreground font-medium">
                    & Outcome Delivered
                  </span>

                  <span className="text-[13px] text-primary font-medium">
                    4.9 Rating ⭐⭐⭐⭐⭐
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={rightImageRef}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Yellow Wave - Updated to primary color */}
            <svg
              className="hero-wave absolute inset-0 w-full h-full scale-[1.25] opacity-60"
              viewBox="0 0 600 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M470 10C560 40 530 120 430 170C300 235 180 300 180 390C180 480 320 500 430 510C550 520 610 590 560 670"
                stroke="hsl(47.9 95.8% 53.1%)"
                strokeWidth="38"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="Amazon Consultant"
                width={620}
                height={780}
                priority
                className="object-contain max-h-[780px] w-full brightness-110 contrast-105"
              />

              {/* <div className="absolute top-[18%] right-0 bg-transparent text-right">
                <p className="text-[18px] text-muted-foreground uppercase leading-none">
                  ASH CEO
                </p>

                <h3 className="text-[34px] font-bold text-foreground leading-tight mt-1">
                  UK Expert Amazon
                </h3>

                <div className="w-full h-[2px] bg-primary mt-3" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
