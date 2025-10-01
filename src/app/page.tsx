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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        delectus quod earum, explicabo id distinctio ratione, veritatis pariatur
        possimus blanditiis mollitia molestias nesciunt quam impedit quidem
        eveniet rem, dolore alias? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Nisi aperiam porro omnis facilis maiores, voluptates
        delectus obcaecati aspernatur quas incidunt eligendi pariatur possimus
        nulla nihil doloremque distinctio debitis voluptatem at?
      </p>
    </div>
  );
}
