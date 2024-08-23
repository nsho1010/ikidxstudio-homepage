import Hero from "@/components/Hero";
import News from "@/components/News";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Service from "@/components/Service";
import Member from "@/components/Member";
import CompanyInfo from "@/components/CompanyInfo";
import Contact from "@/components/Contact";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 lg:gap-14">
      <Hero />
      <Problem />
      <Benefits />
      <Service />
      <Suspense fallback={<div>Loading...</div>}>
        <News />
        <Member />
      </Suspense>
      <CompanyInfo />
      <Contact />
    </main>
  );
}
