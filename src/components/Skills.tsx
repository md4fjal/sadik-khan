"use client";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiJavascript,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiReactquery,
  SiRedux,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layout,
  RefreshCcw,
  Server,
  Terminal,
  Wifi,
} from "lucide-react";
import { FaAws } from "react-icons/fa";

const skillCategories = [
  {
    title: "Account Setup & Registration",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Product Research",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Keyword Research",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Listing Creation & Optimization",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Product Image Design",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "PPC Launch & Optimized",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "EBC/A+ Content Design",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Brand Store Design",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Html Product Description",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Strategy to growth sales",
    icon: <Layout className="w-5 h-5" />,
  },
];

export default function Skills() {
  return (
    <div id="skills" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          Technical <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          Specialized eCommerce Marketplace Solutions Focused on Brand Growth,
          Product Visibility, Sales Optimization, and High-Converting Store
          Management Across Amazon and Global Marketplaces
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="skill-card stagger-item group p-8 glass-dark rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 glass rounded-2xl text-primary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
