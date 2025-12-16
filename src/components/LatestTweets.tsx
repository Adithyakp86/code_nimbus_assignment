import { Twitter } from "lucide-react";
import bg from "@/assets/h1-parallax-3.jpg";

export const LatestTweets = () => {
  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Twitter Icon */}
        <Twitter className="w-5 h-5 mb-5 opacity-80" />

        {/* Title */}
        <h2 className="text-sm tracking-[0.4em] uppercase mb-5 font-light">
          Latest Tweets
        </h2>

        {/* Divider */}
        <div className="flex items-center gap-2.5 mb-7">
          <span className="w-10 h-px bg-white/30"></span>
          <span className="w-1 h-1 rounded-full bg-white/50"></span>
          <span className="w-10 h-px bg-white/30"></span>
        </div>

        {/* Message */}
        <p className="text-sm text-white/60 italic font-light tracking-wide">
          Couldn't connect with Twitter
        </p>
      </div>
    </section>
  );
};
