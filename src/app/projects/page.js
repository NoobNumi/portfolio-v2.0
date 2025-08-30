"use client";
import Navbar from "../../components/navbar";
import AOSWrapper from "../../components/AOSWrapper";
import Hr from "../../components/hr";
import { useState, useEffect } from "react";
import { db } from "../../lib/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { Sparkle } from "lucide-react";
import ProjectCard from "../../components/projectcard";

export default function Projects() {
  const [projectLists, setProjectLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectLists = [];
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        projectLists.push({ id: doc.id, ...doc.data() });
      });
      setProjectLists(projectLists);
    };
    fetchData();
  }, []);

  return (
    <AOSWrapper>
      <Navbar />
      <div className="pt-24 w-full mx-auto flex flex-col relative items-center justify-center h-full my-5">
        <main className="max-w-full">
          <div data-aos="fade-up">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-dark text-center">
              PROJECTS
              <div className="flex items-center relative justify-center my-4 w-fit mx-auto">
                <span className="border-text-primary w-[80px]" />
                <span className="mx-2 animate-spin-slow text-2xl">
                  <Sparkle
                    className="text-[#f6f6f6]"
                    fill="#dbd34c"
                    size={50}
                  />
                </span>
                <span className="border-text-primary w-[80px]" />
              </div>
            </h1>
          </div>
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            {projectLists.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </AOSWrapper>
  );
}
