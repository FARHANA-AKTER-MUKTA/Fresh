import React from "react";
import Container from "../Layer/Container";
import Bnr from "../../Public/Bnr.png";
const Banner = () => {
  return (
    <div className="bg-BannerColor pb-[133px]  ">
      <Container className="flex  items-center justify-between ">
        <div className="left ">
          <h1 className="max-w-[556px] text-[64px] font-semibold  text-[#000000] ">
            Find The Best Fashion Style For You
          </h1>
          <p className="max-w-[486px] font-Poppins leading-[33px] mt-[38px] mb-[76px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra{" "}
          </p>
          <button
            className="w-[319px] text-[#FFFFFF] text-2xl bg-black py-[25px]
    px-[91px] rounded-[10px]
    "
          >
            SHOP NOW
          </button>
        </div>

        <div className="right">
          <img src={Bnr} alt={Bnr} className="rounded-bl-[195px]" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
