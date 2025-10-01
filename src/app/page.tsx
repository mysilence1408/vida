import Hero from "@/components/Home/Hero";
import Video from "@/components/Home/Video";
import Whoarewe from "@/components/Home/Whoarewe";

export default function Home() {
  return (
    <div>
      <Hero />
      <Video />
      <Whoarewe />
      <p className=" text-9xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        voluptas aliquid ipsum voluptates, ipsam officia? Accusamus quisquam
        beatae porro perferendis aliquid assumenda, eum at? Ullam iure explicabo
        voluptates distinctio maiores? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Perspiciatis voluptas aliquid ipsum voluptates, ipsam
        officia? Accusamus quisquam beatae porro perferendis aliquid assumenda,
        eum at? Ullam iure explicabo voluptates distinctio maiores?
      </p>
    </div>
  );
}
