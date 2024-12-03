import About from "./components/About";
import DownloadAppSection from "./components/DownloadAppSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <DownloadAppSection />
      <About />
    </div>
  );
}
