import React from "react";
import footersvg from "../assets/svg/footer.avif";

const Footer = () => {
  return (
    <div className="w-full h-[20%] lg:h-[20%] bg-zinc-200 rounded-xl flex">
      <div className="w-[55%] h-full flex items-center justify-center  px-5 md:px-8 font-semibold">
        <p className="text-sm md:text-xl">
          Small progress every day beats perfect plans someday.
        </p>
      </div>
      <div className="w-[45%] h-full flex items-center justify-center">
        <img src={footersvg} className="h-[110%] md:h-[120%]" alt="" />
      </div>
    </div>
  );
};

export default Footer;
