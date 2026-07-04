import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import FeatureGrid from "./components/home/FeatureGrid";
import PhotoStrip from "./components/home/PhotoStrip";
import FinalCtaBand from "./components/home/FinalCtaBand";
import CommunityCta from "./components/home/CommunityCta";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <FeatureGrid />
      <PhotoStrip />
      <FinalCtaBand />
      <CommunityCta />
      <Footer />
    </div>
  );
}
