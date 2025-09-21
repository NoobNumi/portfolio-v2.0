"use client";
import Image from "next/image";
import { useMemo, useEffect, useState, use } from "react";
import Hr from "../../components/hr.js";
import Link from "next/link";
import { db } from "../../lib/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { Sparkle } from "lucide-react";

export default function Home() {
  const [logos, setLogos] = useState([]);

  const [socials, setSocials] = useState([]);

  const profile = "/profile_new.png";

  useEffect(() => {
    let unsubscribed = false;
    const fetchData = async () => {
      const skillsPromise = getDocs(collection(db, "skills"));
      const socialsPromise = getDocs(collection(db, "socials"));
      const [skillsSnap, socialsSnap] = await Promise.all([
        skillsPromise,
        socialsPromise,
      ]);
      if (!unsubscribed) {
        setLogos(skillsSnap.docs.map((doc) => doc.data()));
        setSocials(socialsSnap.docs.map((doc) => doc.data()));
      }
    };
    fetchData();
    return () => {
      unsubscribed = true;
    };
  }, []);

  return (
    <div
      className="pt-24 w-full mx-auto flex flex-col relative items-center justify-center xl:h-screen h-full my-5 md:my-0"
      data-aos="fade-up"
    >
      <main className="px-4 md:px-8 lg:px-16 xl:px-32 py-6 mt-0 md:mt-10 flex flex-col xl:flex-row items-center xl:items-start justify-center w-full gap-10 md:gap-20 xl:gap-30">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xs flex-shrink-0">
          <div className="relative flex items-center justify-center mb-10">
            <div className="relative">
              <div className="relative rounded-full w-full h-full">
                <Sparkle
                  className="text-[#f6f6f6] absolute -top-2 -left-2 md:-top-4 md:-left-4 z-20 animate-spin-slow"
                  fill="#dbd34c"
                  style={{
                    width: "clamp(2.4rem, 5vw, 4rem)",
                    height: "clamp(2.4rem, 5vw, 4rem)",
                  }}
                />
                <Sparkle
                  className="text-[#f6f6f6] absolute top-1/2 -right-3 md:-right-6 -translate-y-1/2 z-20 animate-spin-slow"
                  fill="#dbd34c"
                  style={{
                    width: "clamp(2.4rem, 5vw, 4rem)",
                    height: "clamp(2.4rem, 5vw, 4rem)",
                  }}
                />
                <div
                  style={{
                    width: "clamp(100px, 40vw, 350px)",
                    height: "clamp(100px, 40vw, 350px)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={profile}
                    alt="Profile Picture"
                    fill
                    priority
                    className="object-cover z-10 rounded-full"
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 350px"
                    fetchPriority="high"
                  />
                </div>
              </div>
              <div
                className="absolute hover:translate-y-[-2px] pointer transition-all ease-in-out bg-white px-3 py-2 rounded-full shadow-md text-[9px] md:text-sm font-medium z-9999 border-text-primary text-nowrap"
                style={{
                  right: "-10%",
                  bottom: "10%",
                }}
              >
                Open for <span className="font-semibold">Freelance/Gig</span>{" "}
                work
              </div>
            </div>
          </div>
          <div className="social-icons flex flex-wrap justify-center sm:justify-start gap-3 md:gap-5 lg:gap-8 w-full">
            {socials.map((social, i) => (
              <Link
                key={i}
                href={social.link}
                target="_blank"
                className="bg-primary pointer p-1 rounded-full group relative group hover:-translate-y-2 duration-500 ease-in-out"
              >
                <div className="bg-white p-1 rounded-full">
                  <div className="bg-primary p-2 rounded-full flex items-center justify-center">
                    <Image
                      src={social.source}
                      width={24}
                      height={24}
                      alt={social.name}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      loading="lazy"
                      fetchPriority="auto"
                    />
                  </div>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none">
                  {social.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full text-center md:text-left max-w-xl mx-auto lg:mx-0 text-dark">
          <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-2 text-dark">
            Front End Developer
          </h1>
          <Hr />
          <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-2 outlined-text">
            UI/UX Designer
          </h1>
          <div className="mt-6 sm:mt-9">
            <p className="text-base sm:text-lg lg:text-2xl">
              Hey, I’m{" "}
              <span className="bg-primary font-semibold px-1 py-1 text-dark">
                Nin
              </span>
            </p>
            <p className="mt-5 sm:mt-7 leading-6 sm:leading-7 lg:leading-8 text-sm sm:text-base lg:text-lg">
              I’m a 23-year old{" "}
              <span className="font-semibold">Web App Developer</span> focusing
              on <span className="font-semibold">Front End Development</span>{" "}
              and a{" "}
              <span className="outlined-text font-extrabold tracking-widest">
                UI / UX Designer
              </span>{" "}
              based in the Philippines. I am passionate in creating beautiful
              and functional web applications and product designs. I am always
              open for new opportunities and collaborations. Feel free to
              contact me!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-8 w-full gap-3">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ninagillianvillamin1128@gmail.com"
              target="_blank"
              className="
                group
                flex md:inline-flex items-center justify-center
                relative overflow-hidden rounded-full font-semibold
                px-4 sm:px-5 md:px-7 py-2 bg-primary text-dark
                transition-colors duration-300
                before:content-[''] before:absolute before:inset-0
                before:bg-white before:scale-x-0 before:origin-left
                before:transition-transform before:duration-500
                hover:before:scale-x-100
                border-2 border-transparent
                hover:border-2
                pointer
              "
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Send me an email
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Send me an email
                </p>
              </div>
            </Link>
            <Link
              href="https://calendly.com/ningv"
              target="_blank"
              className="
                group
                flex md:inline-flex items-center justify-center
                relative overflow-hidden rounded-full font-semibold
                px-4 sm:px-5 md:px-7 py-2 bg-white text-dark
                transition-colors duration-300
                before:content-[''] before:absolute before:inset-0
                before:bg-[#dbd34c] before:scale-x-0 before:origin-left
                before:transition-transform before:duration-500
                hover:before:scale-x-100
                border-2 border-[#dbd34c]
                hover:border-2
                hover:bg-[#dbd34c]
                pointer
              "
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Book a meeting
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Book a meeting
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <div className="relative w-full h-full overflow-hidden py-4 sm:py-6 mt-5">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 z-10"
          style={{
            background:
              "linear-gradient(to right, #f6f6f6 80%, transparent 100%)",
          }}
        />
        <div className="flex w-max animate-marquee space-x-3 sm:space-x-6">
          {logos.concat(logos).map((skill, i) => (
            <div
              key={i}
              className="skill-marquee-item flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full hover:-translate-y-2 transition-all duration-500 ease-in-out pointer relative"
            >
              <span className="skill-border-anim absolute left-0 top-0 w-full h-full rounded-full pointer-events-none"></span>
              <Image
                src={skill.logo}
                alt={skill.name}
                width={16}
                height={16}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                loading="lazy"
                fetchPriority="auto"
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 z-10"
          style={{
            background:
              "linear-gradient(to left, #f6f6f6 80%, transparent 100%)",
          }}
        />
      </div>
      <style jsx>{`
        .skill-marquee-item:hover .skill-border-anim {
          animation: border-anim 0.5s forwards;
        }
        .skill-border-anim {
          border: 2px solid #dbd34c;
          border-radius: 9999px;
          box-sizing: border-box;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
        }
        .skill-marquee-item:hover .skill-border-anim {
          opacity: 1;
        }
        @keyframes border-anim {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }
        @media (max-width: 640px) {
          .skill-marquee-item {
            font-size: 12px;
            padding: 0.5rem 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
