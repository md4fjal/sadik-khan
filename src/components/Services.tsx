"use client";

import {
  Store,
  LayoutDashboard,
  Image,
  Package,
  Megaphone,
  TrendingUp,
  Search,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "E-commerce Account Setup & Registration",
    description:
      "Launch your online store with a seamless setup process tailored for leading marketplaces and platforms. From registration to verification, we ensure your business is ready to sell without delays.",
    icon: <Store className="w-6 h-6" />,
    points: [
      "Marketplace account creation",
      "GST & business detail setup",
      "Store verification assistance",
      "Payment & shipping configuration",
    ],
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Account Management",
    description:
      "Keep your e-commerce business running smoothly with professional account handling and performance monitoring. We help maintain healthy seller metrics and consistent growth.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    points: [
      "Daily account monitoring",
      "Performance & policy management",
      "Customer query handling",
      "Sales and growth reporting",
    ],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Image Designing",
    description:
      "Attractive product visuals that capture attention and improve conversions across e-commerce platforms. We create clean, professional, and marketplace-ready designs for your brand.",
    icon: <Image className="w-6 h-6" />,
    points: [
      "Product image editing",
      "Infographics & banners",
      "Lifestyle and promotional creatives",
      "Platform-compliant image formats",
    ],
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Order Management",
    description:
      "Efficient order processing solutions to help you deliver a smooth customer experience from purchase to delivery. Stay organized and reduce operational delays.",
    icon: <Package className="w-6 h-6" />,
    points: [
      "Order processing & tracking",
      "Return & cancellation handling",
      "Inventory coordination",
      "Shipping status updates",
    ],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "PPC & Promotions",
    description:
      "Boost visibility and drive more sales with targeted advertising and promotional strategies. We optimize campaigns to maximize ROI and brand reach.",
    icon: <Megaphone className="w-6 h-6" />,
    points: [
      "Sponsored ad campaigns",
      "Keyword targeting & bidding",
      "Discount & coupon planning",
      "Performance optimization reports",
    ],
    color: "text-yellow-300",
    bg: "bg-yellow-300/10",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Product Listing Creation & Optimization",
    description:
      "Create compelling product listings that improve visibility, rankings, and conversions across online marketplaces. Optimized content designed to attract and convert buyers.",
    icon: <Search className="w-6 h-6" />,
    points: [
      "SEO-friendly product titles",
      "High-converting descriptions",
      "Backend keyword optimization",
      "Listing enhancement & updates",
    ],
    color: "text-amber-300",
    bg: "bg-amber-300/10",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Product Research",
    description:
      "Discover winning products and market opportunities backed by data-driven research. We help identify profitable niches and trending products for long-term growth.",
    icon: <TrendingUp className="w-6 h-6" />,
    points: [
      "Trending product analysis",
      "Competitor research",
      "Demand & pricing insights",
      "Niche and category evaluation",
    ],
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div id="services" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          What I <span className="text-gradient">Deliver</span>
        </h2>

        <p className="text-center md:text-left text-lg max-w-2xl text-muted-foreground">
          Comprehensive digital solutions tailored to meet modern business needs
          and user expectations.
        </p>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div className="glass-dark border border-foreground/10 rounded-[40px] overflow-hidden p-6 md:p-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* LEFT CONTENT */}
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-5">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      {service.points.map((point, index) => (
                        <div className="flex gap-3" key={index}>
                          <span className="text-yellow-400">✓</span>
                          <p className="text-muted-foreground">{point}</p>
                        </div>
                      ))}
                      <div className="flex gap-3">
                        <span className="text-yellow-400">✓</span>
                        <p className="text-muted-foreground">
                          Clean scalable architecture and optimized codebase.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center">
                    <div className="bg-background border border-foreground/10 rounded-[30px] p-4 w-full max-w-[600px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[260px] md:h-[380px] object-cover rounded-[20px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slider-container .slick-slide {
          padding-bottom: 50px;
        }
      `}</style>
    </div>
  );
}
