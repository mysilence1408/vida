import React from "react";

const NewsHero = () => {
  return (
    <div className="pt-30 px-4 lg:px-8 ">
      <div className=" bg-white h-auto w-full text-black flex items-center p-8 overflow-hidden rounded-3xl">
        <div className=" w-1/2 flex flex-col justify-between h-[400px] gap-4">
          <div className=" space-y-4">
            <div className=" bg-[#eae4d8] px-2 py-1 rounded-lg text-xl w-fit">
              News
            </div>
            <h3 className=" text-3xl lg:text-7xl font-black">Newsroom page</h3>
          </div>
          <p className=" max-w-md text-balance font-semibold">
            Explore our newsroom for updates, insights, and announcements on how
            AI is transforming healthcare and supporting earlier, more accurate
            medical detection.
          </p>
        </div>
        <div className=" w-1/2 flex justify-end ">
          <video
            src="/videos/news.mp4"
            playsInline
            autoPlay
            muted
            loop
            className="h-full w-[280px] max-h-[400px] object-cover rotate-3 border-8 border-[#4B352A] rounded-3xl"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
