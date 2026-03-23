import React from "react";
import heroimg from '../../assets/hero-bg.png';
import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';

const Hero = () => {
  return (
    <div>
      <h2 className="max-w-xl md:text-7xl text-2xl font-bold text-[#001931] mx-auto text-center pt-20">
        We Build{" "}
        <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h2>
      <p className="text-[#627382] md:text-xl text-sm text-center mt-4 p-4 md:p-0">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex items-center justify-center gap-4 my-10 flex-wrap">
        <a
          href="https://play.google.com/store/"
          target="_blank"
          className="flex items-center gap-2 border-1 rounded-sm border-[#D2D2D2] py-3 px-6 justify-center text-[#001931] text-xl font-semibold hover:bg-[#ffffff]"
        >
          <img className="w-[32px] h-[32px]" src={playstore} alt="" />
          Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          className="flex items-center gap-2 border-1 rounded-sm border-[#D2D2D2] py-3 px-6 justify-center text-[#001931] text-xl font-semibold hover:bg-[#ffffff]"
        >
          <img className="w-[32px] h-[32px]" src={appstore} alt="" />
          App Store
        </a>
      </div>
      <div className="flex justify-center">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
