import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Benefits from "@/components/Home/Benifits";
import Video from "@/components/Home/Video";
import Whoarewe from "@/components/Home/Whoarewe";
import WhyChoose from "@/components/Home/WhyChoose";
import WhoCanUse from "@/components/Home/WhoCanUse";

export default function Home() {
  return (
    <div>
      <Hero />
      <Video />
      <Whoarewe />
      <Features />
      <WhyChoose />
      <Benefits />
      <WhoCanUse />
    </div>
  );
}
