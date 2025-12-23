import NewsHero from "@/components/News/NewsHero";
import NewsPage from "@/components/News/NewsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest VIDA Medicals news: mammography AI model updates, validation progress, and platform announcements delivering structured imaging insights.",
};

const News = () => {
  return (
    <div>
      <NewsHero />
      <NewsPage />
    </div>
  );
};

export default News;
