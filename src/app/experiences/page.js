"use client";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { db } from "../../lib/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);
  const lastDotRef = useRef(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  useEffect(() => {
    if (lastDotRef.current && containerRef.current) {
      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      const lastDotTop =
        lastDotRef.current.getBoundingClientRect().top + window.scrollY;
      setLineHeight(
        lastDotTop - containerTop + lastDotRef.current.offsetHeight / 2
      );
    }
  }, [experiences]);

  const fetchExperiences = async () => {
    const experiencesCollection = collection(db, "experiences");
    const experiencesSnapshot = await getDocs(experiencesCollection);

    const experiencesList = experiencesSnapshot.docs.map((doc) => {
      const data = doc.data();

      if (Array.isArray(data.skills_used)) {
        data.skills_used = data.skills_used.map((skill) => {
          if (typeof skill === "string") {
            const nameMatch = skill.match(/name:\s*"([^"]+)"/);
            const logoMatch = skill.match(/logo:\s*"([^"]+)"/);

            return {
              name: nameMatch ? nameMatch[1] : "Unknown",
              logo: logoMatch ? logoMatch[1] : "",
            };
          }
          return skill;
        });
      }

      return data;
    });

    const sortedExperiences = experiencesList.sort((a, b) => {
      const getDate = (timeline) => {
        const [start] = timeline.split(" - ");
        return new Date(start);
      };
      return getDate(b.job_timeline) - getDate(a.job_timeline);
    });

    setExperiences(sortedExperiences);
  };

  return (
    <div>
      <Navbar />
      <div className="pt-24 w-full mx-auto flex flex-col items-center justify-center my-5">
        <main className="max-w-7xl w-full px-6">
          <div data-aos="fade-up" className="text-center mb-10">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-dark">
              ABOUT
            </h1>
            <div className="flex items-center relative justify-center my-4 w-fit mx-auto">
              <span className="border-text-primary w-[50px]" />
              <span className="mx-2 animate-spin-slow text-2xl">
                <Sparkle className="text-[#f6f6f6]" fill="#dbd34c" size={50} />
              </span>
              <span className="border-text-primary w-[50px]" />
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto" ref={containerRef}>
            {/* Dynamic center line */}
            <div
              className="absolute left-1/2 top-4 -translate-x-1/2 w-1 bg-gray-200 z-0 transition-all"
              style={{ height: `${lineHeight}px` }}
            ></div>

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === experiences.length - 1;
              return (
                <motion.div
                  key={index}
                  className="relative w-full flex mb-12"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`relative md:w-1/2 w-full ${
                      isLeft
                        ? "md:pr-8 md:justify-end flex"
                        : "md:pl-8 md:justify-start flex md:ml-auto"
                    }`}
                  >
                    {/* Dot */}
                    <span
                      ref={isLast ? lastDotRef : null}
                      className={`absolute top-4 md:top-6 ${
                        isLeft
                          ? "md:right-[-15px] right-1/2 md:translate-x-0 translate-x-1/2"
                          : "md:left-[-15px] left-1/2 md:translate-x-0 -translate-x-1/2"
                      } flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-8 ring-white z-10`}
                    >
                      <BriefcaseBusiness className="w-4 h-4 text-dark" />
                    </span>

                    {/* Card */}
                    <div className="bg-white shadow-md rounded-xl w-full p-5 border border-gray-200 z-10">
                      <h3 className="text-lg text-dark font-semibold">
                        {exp.position}
                      </h3>
                      <h4 className="text-gray-700 mb-1">{exp.company_name}</h4>
                      <p className="text-sm text-gray-500 mb-3">
                        {exp.job_timeline}
                      </p>
                      <p className="text-gray-600 text-sm">{exp.description}</p>

                      {/* Skills */}
                      {exp.skills_used && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.skills_used.map((skill, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-primary hover:text-white transition"
                            >
                              {skill.logo && (
                                <Image
                                  src={skill.logo}
                                  alt={skill.name}
                                  className="w-4 h-4"
                                  width={16}
                                  height={16}
                                />
                              )}
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
