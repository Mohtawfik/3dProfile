import React from "react";

const Footers = () => {
  return (
    <footer className="bg-primary py-6 border-t border-[#9da2c0]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-[#d7d6dd] text-[15px]">
          {/*<p>© {new Date().getFullYear()} {personalInfo.name}.</p>*/}
          <p className="font-medium tracking-widest font-roboto">Developed + Designed by Tawfik.</p>
          <p className="text-[10px] tracking-widest font-roboto"> COPYRIGHT © Tawfik 2024. </p>

        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
          <p className="text-[#d7d6dd] tracking-widest font-roboto font-medium text-[15px]">Reach out on</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohammed-tawfik-09241712a/"
            className="text-[#d7d6dd] font-medium tracking-widest font-roboto hover:underline text-[15px] "
          >
            Linkedin
          </a>
          <a
            target="_blank"
            href="https://github.com/Mohtawfik"
            className="text-[#d7d6dd] font-medium tracking-widest font-roboto hover:underline text-[15px] "
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/u/iamtawfy/"
            className="text-[#d7d6dd] font-medium tracking-widest font-roboto hover:underline text-[15px] "
          >
            Leetcode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footers;