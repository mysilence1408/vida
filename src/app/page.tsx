import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Benefits from "@/components/Home/Benifits";
import Video from "@/components/Home/Video";
import WhyChoose from "@/components/Home/WhyChoose";
import WhoCanUse from "@/components/Home/WhoCanUse";
import TextScroll from "@/components/Home/TextScroll";
import PreLoader from "@/components/Home/PreLoader";

export default function Home() {
  return (
    <div>
      <PreLoader />
      <Hero />
      <TextScroll />
      <Video />
      <Features />
      <WhyChoose />
      <Benefits />
      <WhoCanUse />
    </div>
  );
}
