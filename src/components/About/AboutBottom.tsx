import botGif from "@/../public/images/bot.gif";
import founder from "@/../public/images/founder.jpg";
import Image from "next/image";

const AboutBottom = () => {
  return (
    <div className=" pt-18 lg:pt-28 pb-16 px-2 lg:px-4">
      <div className=" flex items-center justify-center mb-8">
        <Image
          src={botGif}
          alt="bot"
          className=" w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] object-cover"
        />
        <h1 className=" text-white text-3xl lg:text-7xl">
          A word from the founder
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2">
            <Image
              alt="founder"
              src={founder}
              className="rounded-lg object-cover object-center h-full"
            />
          </div>

          <div className="py-16 px-4 gap-4 rounded-lg bg-white text-black  flex flex-col justify-between lg:w-1/2 h-auto">
            <p className=" text-xl lg:text-2xl">
              At VIDA Medicals, our mission is to harness the power of
              artificial intelligence to support earlier and more accurate
              disease detection. By combining medical expertise with advanced
              technology, we aim to assist healthcare professionals in making
              better-informed decisions and improving patient outcomes.
              <br />
              <br /> This platform was created with a strong belief that
              innovation in healthcare should be responsible, transparent, and
              human-centered. We are committed to developing AI solutions that
              complement clinical judgment and contribute meaningfully to modern
              medicine.
            </p>
            <span>
              Dr. Komeilipoor
              <br />
              <br />
              Founder & CEO, VIDA Medicals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
