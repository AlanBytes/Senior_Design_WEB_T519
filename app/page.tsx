import Abstract from "@/components/Abstract";
import Deliverables from "@/components/Deliverables";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Abstract />
        <Project />
        <Sponsors />
        <Team />
        <Deliverables />
      </main>
      <Footer />
    </>
  );
}
