import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const ComingSoon = () => {
  return (
    <section className="w-full bg-gray-900  min-h-screen flex items-center">
      <div class="w-full mx-auto container px-3 md:px-6 lg:px-16 flex flex-col items-center justify-center">
        <h1 class="text-4xl sm:text-5xl text-white font-bold text-center mb-8 animate-pulse">Coming Soon</h1>
        <p class="text-white text-base sm:text-lg mb-8 text-center">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div class=" w-full mt-3 mb-5">
          <div class="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
            <div
              class="rounded-full bg-primary text-xs leading-none text-center text-white py-1"
              style={{ width: "75%" }}>
              75%
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center mt-3 md:mt-0 items-center gap-5 md:gap-3 text-white">
            <a href="https://github.com/bwafi" target="_blank">
              <AiFillGithub className="text-3xl hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/syahroni-bawafi-93b422265/" target="_blank">
              <AiFillLinkedin className="text-3xl hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/itssyahroni/" target="_blank">
              <AiFillInstagram className="text-3xl hover:text-primary" />
            </a>
            <a href="https://twitter.com/itssyahroni" target="_blank">
              <AiFillTwitterSquare className="text-3xl hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
