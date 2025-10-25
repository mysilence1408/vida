import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Benefits from "@/components/Home/Benifits";
import Video from "@/components/Home/Video";
import WhyChoose from "@/components/Home/WhyChoose";
import WhoCanUse from "@/components/Home/WhoCanUse";
import TextScroll from "@/components/Home/TextScroll";

export default function Home() {
  return (
    <div>
      <Hero />
      <Video />
      <TextScroll />
      <Features />
      <WhyChoose />
      <Benefits />
      <WhoCanUse />
    </div>
  );
}
