import banner from "../../assets/banner.jpg";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="container mx-auto">
      <img className="mx-auto  w-full h-[630px]" src={banner} alt="" />
      <div >
        <h2 className="banner-txt lg:ml-[7rem] text-3xl md:text-6xl lg:text-6xl font-semibold">
          Easy Way to Find a <br /> Perfect Property
        </h2>
        <p className="banner-txtp lg:ml-[7rem]">
          Find and Book Your Dream House <br /> On This Big Event<br /> @realestateevent2023
        </p>
        <h2 className="text-4xl lg:ml-[7rem] text-center mt-20 font-semibold">Properties are Increasing</h2>
      </div>
    </div>
  );
};

export default Banner;
