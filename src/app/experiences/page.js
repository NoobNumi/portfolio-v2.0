"use client";
import Navbar from "@/components/navbar";
import Hr from "@/components/hr";
import { motion } from "motion/react";
import { BriefcaseBusiness } from "lucide-react";
import { db } from "../../lib/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

 const fetchExperiences = async () => {
  const experiencesCollection = collection(db, "experiences");
  const experiencesSnapshot = await getDocs(experiencesCollection);
  const experiencesList = experiencesSnapshot.docs.map((doc) => doc.data());

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
      <div className="pt-24 w-full mx-auto flex flex-col relative items-center justify-center h-full my-5">
        <main className="max-w-full">
          <div data-aos="fade-up">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-dark text-center">
              EXPERIENCES
              <Hr className="w-1/2 mx-auto" />
            </h1>
          </div>

          <section className="mt-12 max-w-3xl mx-auto space-y-6">
            {/* Experience Card */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 md:px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4 items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">
                      {exp.position}
                    </h3>
                    <h2 className="text-md font-medium text-dark mb-1">
                      {exp.company_name}
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-sm text-gray-500">
                        {exp.job_timeline}
                      </p>
                      <span className="inline-block bg-white border border-[var(--primary)] text-dark text-xs font-semibold px-3 py-1 rounded-full">
                        {exp.work_type}
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary p-3 rounded-full flex items-center justify-center">
                    <BriefcaseBusiness className="w-8 h-8 sm:w-7 sm:h-7 text-dark" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm text-justify">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
