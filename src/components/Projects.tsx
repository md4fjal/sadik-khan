"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  ShoppingCart,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Skeleton } from "boneyard-js/react";

const projects = [
  {
    title: "Janisramone",
    description:
      "Managed Amazon UK storefront operations including product listings, SEO optimization, catalog management, and brand visibility improvements for fashion and lifestyle products.",

    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    gradient: "from-yellow-500/20 to-amber-500/20",
    links: {
      live: "https://www.amazon.co.uk/stores/Janisramone/page/38E3831B-566C-4C9F-9469-94D600034797?lp_asin=B0DWLGJMFC&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto",
    },
  },
  {
    title: "Hamishkane",
    description:
      "Handled Amazon marketplace management with a focus on listing optimization, storefront organization, product uploads, and performance enhancement strategies to improve customer engagement and conversions.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    gradient: "from-amber-500/20 to-yellow-600/20",
    links: {
      live: "https://www.amazon.co.uk/stores/Hamishkane/page/1FA569F3-C436-4841-BFF1-DFC71FF10B8A?lp_asin=B0DWTCX57W&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto",
    },
  },
  {
    title: "Brit Amber Fashion",
    description:
      "Worked on Amazon UK seller account management for fashion products, including catalog handling, keyword-rich listings, product content optimization, and account growth support.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    gradient: "from-yellow-500/20 to-amber-600/20",
    links: {
      live: "https://www.amazon.co.uk/s?me=A2YPMFNDI9FH2D&marketplaceID=A1F83G8C2ARO7P",
    },
  },
  {
    title: "Brit Diamond",
    description:
      "Supported pet-category marketplace operations through optimized product listings, backend keyword management, inventory coordination, and marketplace performance improvements.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    gradient: "from-amber-500/20 to-yellow-400/20",
    links: {
      live: "https://www.amazon.co.uk/s?k=BRIT+DIAMOND&i=pets&search-type=ss&ref=bl_dp_s_web_0",
    },
  },
  {
    title: "Adimilan",
    description:
      "Managed Amazon India brand presence by creating optimized listings, improving storefront structure, handling product variations, and enhancing overall marketplace visibility.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    gradient: "from-amber-500/20 to-yellow-400/20",
    links: {
      live: "https://www.amazon.in/stores/adimilan/page/1AED4FE9-27C7-4786-9C2C-C1FF6B5582A5?lp_asin=B0FL25LXJ9&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto&bl_grd_status=override",
    },
  },
  {
    title: "Divyanshi",
    description:
      "Provided end-to-end Amazon account support including listing management, content optimization, catalog updates, and marketplace operations for fashion and lifestyle products.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    gradient: "from-amber-500/20 to-yellow-400/20",
    links: {
      live: "https://www.amazon.in/stores/DIVAYANSHI/page/55D85722-006E-48C8-80C0-76B40A1AF1F5?lp_asin=B0GRV3JDXW&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto&bl_grd_status=override",
    },
  },
  {
    title: "Rumia Fashion",
    description:
      "Handled Amazon US marketplace activities including product publishing, SEO-focused listing optimization, storefront management, and customer-focused product presentation strategies.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    gradient: "from-amber-500/20 to-yellow-400/20",
    links: {
      live: "https://www.amazon.com/s?me=A35E76IX7KB3CK&marketplaceID=ATVPDKIKX0DER",
    },
  },
];

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for skeleton demonstration
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="projects" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Brands </span> I&apos;ve Worked With
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          A selection of my favorite works, blending technical excellence with
          thoughtful design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Skeleton
            key={index}
            name={`project-card-${index}`}
            loading={isLoading}
            fixture={
              <div className="h-[400px] w-full glass-dark rounded-3xl" />
            }
          >
            <div className="group relative flex flex-col h-full glass-dark rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative p-8 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 glass rounded-2xl">{project.icon}</div>
                  <div className="flex gap-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        className="p-2 glass rounded-full hover:bg-foreground/10 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-foreground/5">
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                  >
                    Visit Store
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
}
