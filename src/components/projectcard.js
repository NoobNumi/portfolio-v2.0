"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "plyr/dist/plyr.css";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null); // wrapper for Plyr
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let Plyr; // declare here

    const init = async () => {
      const module = await import("plyr"); // ⬅️ lazy import only on client
      Plyr = module.default;
      if (containerRef.current) {
        playerRef.current = new Plyr(
          containerRef.current.querySelector("video"),
          {
            autoplay: false,
            muted: true,
            loop: { active: true },
            controls: [],
          }
        );

        playerRef.current.on("ready", () => {
          console.log("Plyr ready");
          setReady(true);
        });
      }
    };

    init();

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (playerRef.current && ready) {
      if (hovered) {
        playerRef.current.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
      } else {
        playerRef.current.pause();
      }
    }
  }, [hovered, ready]);

  return (
    <div className="card bg-white p-4 rounded-xl w-full max-w-7xl mx-auto mb-6">
      <div
        className="relative aspect-video overflow-hidden rounded-lg group cursor-zoom-in"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Thumbnail */}
        <Image
          loading="eager"
          src={project.static_image}
          fetchPriority="high"
          alt="Static"
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          priority
        />

        <div
          ref={containerRef}
          className={`plyr absolute inset-0 transition-opacity duration-300 cursor-play  ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <video playsInline muted loop preload="metadata">
            <source src={project.autoPlayVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="mt-5">
        <span className="text-[12px] tracking-widest mb-2 font-semibold text-gray-400 block uppercase">
          {project.project_type}
        </span>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-dark mb-3">
          {project.name}
        </h1>

        <p className="text-sm sm:text-base leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 w-full">
          {Array.isArray(project.technologies) &&
            project.technologies.map((tech, idx) => {
              const nameMatch = tech.match(/name:\s*"(.*?)"/);
              const logoMatch = tech.match(/logo:\s*"(.*?)"/);
              const name = nameMatch ? nameMatch[1] : "";
              const logo = logoMatch ? logoMatch[1] : "";
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer relative border border-gray-200"
                >
                  <Image
                    src={logo}
                    alt={name}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {name}
                  </span>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-5 w-full gap-2 sm:gap-3">
          {project.site_link && (
            <Link
              href={project.site_link}
              target="_blank"
              className="group flex items-center justify-center relative overflow-hidden rounded-full font-semibold px-4 sm:px-5 md:px-7 py-2 bg-primary text-dark transition-colors duration-300 before:content-[''] before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 border-2 border-transparent hover:border-2 text-xs sm:text-sm md:text-base"
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Visit site
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Visit site
                </p>
              </div>
            </Link>
          )}

          {project.figma_link && (
            <Link
              href={project.figma_link}
              target="_blank"
              className="group flex items-center justify-center relative overflow-hidden rounded-full font-semibold px-4 sm:px-5 md:px-7 py-2 bg-white text-dark transition-colors duration-300 before:content-[''] before:absolute before:inset-0 before:bg-[#dbd34c] before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 border-2 border-[#dbd34c] hover:border-2 hover:bg-[#dbd34c] text-xs sm:text-sm md:text-base"
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  View Figma Link
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  View Figma Link
                </p>
              </div>
            </Link>
          )}

          {project.github_repo && (
            <Link
              href={project.github_repo}
              target="_blank"
              className="group flex items-center justify-center relative overflow-hidden rounded-full font-semibold px-4 sm:px-5 md:px-7 py-2 bg-white text-dark transition-colors duration-300 before:content-[''] before:absolute before:inset-0 before:bg-[#dbd34c] before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 border-2 border-[#dbd34c] hover:border-2 hover:bg-[#dbd34c] text-xs sm:text-sm md:text-base"
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  View GitHub Repository
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  View GitHub Repository
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
