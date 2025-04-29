import { Suspense } from 'react';


import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Loading from '@/components/ui/Loading';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/sections/Hero';

// Data fetching happens server-side
import { personalInfo } from '@/data/personal';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { education } from "@/data/education"
import { experiences } from "@/data/experience"
import { skills } from "@/data/skills"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0c10] text-gray-100">
        <section id="home">
          <Hero personalInfo={personalInfo} />
        </section>
        <section id="services">
          <Services services={services} />
        </section>
        <Suspense fallback={<Loading />}>
          <section id="projects">
            <Projects projects={projects} />
          </section>
        </Suspense>
        <section id="experience">
          <Experience experiences={experiences} />
        </section>
        <section id="skills">
          <Skills skills={skills} />
        </section>
        <section id="education">
          <Education education={education} />
        </section>
      </main>
    </>
  );
}
