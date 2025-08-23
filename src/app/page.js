"use client";
import Navbar from "../components/navbar";
import Home from "./home/page";
import AOSWrapper from "../components/AOSWrapper";

export default function Page() {
  return (
    <div>
      <AOSWrapper>
        <Navbar />
        <Home />
      </AOSWrapper>
    </div>
  );
}
