import botGif from "@/../public/images/bot.gif";
import founder from "@/../public/images/founder.jpg";
import Image from "next/image";

const AboutBottom = () => {
  return (
    <div className=" pt-18 lg:pt-28 pb-16 px-2 lg:px-4">
      <h1 className=" text-white text-3xl lg:text-7xl text-center mb-8">
        A word from the founder
      </h1>

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
              At VIDA Medicals, our mission is to advance mammography through
              accurate, responsible artificial intelligence. We develop AI
              models that extract meaningful insights from mammography images,
              supporting clinicians today while building the foundation for
              intelligent imaging systems that can extend across other
              anatomical regions and imaging modalities over time.
              <br />
              <br /> We believe the future of medical imaging lies in AI that is
              transparent, reliable, and designed to work alongside medical
              expertise. Our work is guided by a long-term vision of making
              advanced imaging intelligence trusted, scalable, and clinically
              meaningful.
            </p>
            <span>
              Dr. Naeem Komeilipoor
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
