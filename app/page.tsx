import About from "./components/About";
import DownloadAppSection from "./components/DownloadAppSection";
import Hero from "./components/Hero";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <DownloadAppSection />
      <About />
      <Team />
    </div>
  );
}
