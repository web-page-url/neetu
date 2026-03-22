"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Achievement } from "@/components/Achievement";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { SoulVision } from "@/components/SoulVision";
import { Education } from "@/components/Education";
import { Hobbies } from "@/components/Hobbies";
import { Friends } from "@/components/Friends";
import Chatbot from "@/components/chat";

export default function Home() {
  return (
    <div className="min-h-screen bg-petal-pink selection:bg-sakura/30 font-sans text-berry overflow-x-hidden">
      <FloatingDecorations />
      <Navbar />
      <Chatbot />
      <main className="relative z-10 pt-20">
        <section id="about">
          <Hero />
          <SoulVision />
        </section>

        <WorkExperience />

        <Education />
        <Skills />
        <Achievement />

        <Hobbies />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
