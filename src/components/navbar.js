"use client";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow backdrop-blur" : "bg-transparent"
        } flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-6`}
        style={{ backdropFilter: "blur(8px)" }}
      >
        <Link
          href="/"
          className="logo font-semibold text-[24px] md:text-[30px]"
        >
          <span className="text-dark">Nin</span>
          <span className="text-primary">.</span>
        </Link>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 justify-center cursor-pointer font-semibold">
          <li>
            <Link href="/">
              <span className="navbar-link">Home</span>
            </Link>
          </li>

          <li>
            <Link href="/services">
              <span className="navbar-link">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="navbar-link">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/experiences">
              <span className="navbar-link">Experiences</span>
            </Link>
          </li>
        </ul>
        {/* Desktop Download CV Button */}
        <Link
          href="https://drive.google.com/file/d/1Ynitl7Hv1ecG4-p0Xk4iY5nFY106BPf3/view?usp=sharing"
          target="_blank"
          className="
            group
            hidden md:inline-flex items-center justify-center
            relative overflow-hidden rounded-full font-semibold
            px-5 md:px-7 py-2 bg-primary text-dark
            transition-colors duration-300
            before:content-[''] before:absolute before:inset-0
            before:bg-white before:scale-x-0 before:origin-left
            before:transition-transform before:duration-500
            hover:before:scale-x-100
            border-2 border-transparent
            hover:border-2
          "
        >
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Download CV
            </p>
            <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Download CV
            </p>
          </div>
        </Link>
        {/* Mobile toggle button */}
        <div
          className="md:hidden cursor-pointer open-sidemenu transition-transform duration-700 ease-in-out"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </div>
      </nav>
      {/* Mobile Navbar: always fixed and above content */}
      <div
        className={`w-[300px] block md:hidden bg-white fixed h-screen z-9999 py-6 transition-transform duration-300 ease-in-out top-0 left-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-10 mx-5 items-start">
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="logo font-semibold text-[24px]">
              <span className="text-dark">Nin</span>
              <span className="text-primary">.</span>
            </Link>
            {/* Mobile toggle button */}
            <div
              className="sm:hidden cursor-pointer open-sidemenu transition-transform duration-700 ease-in-out"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </div>
          </div>
          <ul className="flex flex-col gap-10 cursor-pointer font-semibold">
            <li>
              <Link href="/">
                <span className="navbar-link">Home</span>
              </Link>
            </li>

            <li>
              <Link href="/services">
                <span className="navbar-link">Services</span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span className="navbar-link">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/experiences">
                <span className="navbar-link">Experiences</span>
              </Link>
            </li>
          </ul>
          <Link
            href="https://drive.google.com/file/d/1Ynitl7Hv1ecG4-p0Xk4iY5nFY106BPf3/view?usp=sharing"
            target="_blank"
            className="
              group
              inline-flex items-center justify-center
              relative overflow-hidden rounded-full font-semibold
              px-5 py-2 bg-primary text-dark
              transition-colors duration-300
              before:content-[''] before:absolute before:inset-0
              before:bg-white before:scale-x-0 before:origin-left
              before:transition-transform before:duration-500
              hover:before:scale-x-100
              border-2 border-transparent
              hover:border-2
            "
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Download CV
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Download CV
              </p>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
