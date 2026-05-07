"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  Users,
  Database,
  Code2,
  Rocket,
  Circle,
  Layout,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperience() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".exp-card");
    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <div id="experience" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          Work <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          Professional experience where I've contributed to impactful projects
          and refined my craft.
        </p>
      </div>

      <div className="relative space-y-12 md:space-y-24 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/10 before:to-transparent">
        {/* Experience 1 */}
        <div className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 bg-background group-hover:border-primary/50 transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Circle className="w-2 h-2 fill-primary text-primary" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass-dark rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Digital Marketing, SEO Specialist & Social Media Manager
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    AMSAROVENTURE
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground">
                2018 - 2021 | On Site
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Conducted keyword research and competitor analysis to optimize
                  Amazon listings, improving organic visibility by 30%.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Executed SEO strategies for multiple platforms, increasing
                  website traffic and rankings.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Rocket className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Managed social media channels, implementing content strategies
                  that boosted engagement and brand awareness.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Created data-driven marketing campaigns, leveraging analytics
                  to maximize ROI.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 bg-background group-hover:border-primary/50 transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Circle className="w-2 h-2 fill-primary text-primary" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass-dark rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl text-primary">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Amazon Account Manager</h3>
                  <p className="text-sm text-primary font-medium">
                    JANISRAMONE UK, HAMISHKANE UK
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground">
                2023 - 2024 | Remotely UK
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Layout className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Optimized Old Listings, Create New Listings, Find some best
                  Selling Products and Boost Sales.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Create Amazon PPC, Optimized PPC, Daily Analysis, Bid
                  Optimization, Performance Monitoring.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Amazon Brand Store Design and Published.</span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>A+ Content Design and Published.</span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Database className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Html Description Write with Seo friendly Keywords.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 bg-background group-hover:border-primary/50 transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Circle className="w-2 h-2 fill-primary text-primary" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass-dark rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl text-primary">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">E-commerce Manager</h3>
                  <p className="text-sm text-primary font-medium">
                    ZECTAGON TECHNOLOGIES
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground">
                2021 - Present | On Site
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Managed inventory across Amazon ensuring product availability
                  and smooth fulfillment operations.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Created and optimized compelling product listings, enhancing
                  visibility and increasing conversion rates.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Rocket className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Developed and executed Amazon PPC campaigns, reducing ACoS and
                  boosting sales.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Analyzed sales performance and marketplace metrics,
                  identifying opportunities for growth and refining strategies.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Layout className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Optimized eBay listings using SEO-rich content and compelling
                  visuals to boost visibility and sales.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Database className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Managed pricing, promotions, and customer inquiries to enhance
                  buyer experience and drive positive feedback.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Built and customized Shopify stores, integrating apps for
                  advanced functionality.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Developed and executed promotional campaigns, resulting in
                  increased site traffic and customer retention.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 4 */}
        <div className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 bg-background group-hover:border-primary/50 transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Circle className="w-2 h-2 fill-primary text-primary" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass-dark rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Amazon, eBay, Temu Account Manager
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground">
                2024 - Present | Remotely, UK
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Managed inventory across Amazon ensuring product availability
                  and smooth fulfillment operations.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Rocket className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Developed and executed Amazon PPC campaigns, reducing AcoS and
                  boosting sales.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Create Best Quality Listings On ebay with Html Product
                  Description and Ensure the Quality of image and Product.
                </span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Continuously Optimized the campaign and Creating Strategies
                  for Getting More Sales.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
