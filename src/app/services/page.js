"use client";
import Navbar from "../../components/navbar";
import Hr from "../../components/hr.js";
import AOSWrapper from "../../components/AOSWrapper";
import { Table2, Paintbrush, CodeXml } from "lucide-react";

export default function Services() {
  return (
    <AOSWrapper>
      <Navbar />
      <div
        className="pt-24 w-full flex-col mx-auto flex relative items-center justify-center xl:h-screen h-full"
        data-aos="fade-up"
      >
        <main className="px-4 ">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-dark text-center">
            SERVICES
            <Hr className="max-w-1/6 mx-auto" />
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl cursor-pointer">
            <div className="card bg-white p-5 rounded-xl hover:bg-[#dbd34c] transition-all group hover:-translate-y-2 duration-500 ease-in-out">
              <div className="bg-primary p-2 rounded-full w-12 h-12 flex items-center justify-center mb-2 transition-colors duration-500 group-hover:bg-[#333333]">
                <Table2 className="transition-colors duration-300 text-dark group-hover:text-[#dbd34c]" />
              </div>
              <h1 className="font-bold text-2xl text-dark my-5">
                Front End Development
              </h1>
              <p>
                I create responsive, high-performing one-page websites—both
                static and dynamic. From sleek landing pages to modern designs,
                I focus on speed, performance, and user engagement.
              </p>
            </div>
            <div className="card bg-white p-5 rounded-xl hover:bg-[#dbd34c] transition-all group hover:-translate-y-2 ease-in-out">
              <div className="bg-primary p-2 rounded-full w-12 h-12 flex items-center justify-center mb-2 transition-colors duration-500 group-hover:bg-[#333333]">
                <Paintbrush className="transition-colors duration-300 text-dark group-hover:text-[#dbd34c]" />
              </div>
              <h1 className="font-bold text-2xl text-dark my-5">
                UI/UX Design
              </h1>
              <p>
                I design clean, modern interfaces that enhance user experience
                and reflect your brand identity. My designs are visually
                appealing, user-friendly, and easy to navigate, keeping your
                audience engaged.
              </p>
            </div>
            <div className="card bg-white p-5 rounded-xl hover:bg-[#dbd34c] transition-all group hover:-translate-y-2 duration-500 ease-in-out">
              <div className="bg-primary p-2 rounded-full w-12 h-12 flex items-center justify-center mb-2 transition-colors duration-500 group-hover:bg-[#333333]">
                <CodeXml className="transition-colors duration-300 text-dark group-hover:text-[#dbd34c]" />
              </div>
              <h1 className="font-bold text-2xl text-dark my-5">
                Full Stack Development
              </h1>
              <p>
                I build scalable, efficient web applications with expertise in
                both front-end and back-end development. From interface design
                to backend integration, I deliver complete, flexible solutions.
              </p>
            </div>
          </div>
        </main>
      </div>
    </AOSWrapper>
  );
}
