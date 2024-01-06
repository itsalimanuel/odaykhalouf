import Thounders from "@/app/shared/thunders";
import Sign from "@/app/shared/sign";
import Pin from "@/app/shared/pin";

export default function Intro() {
  return (
    <div className="w-full h-screen background-cell bg-brand-secondary">
      <div className="container flex flex-col items-center justify-center h-full relative">
        <div className="absolute top-1/4 right-0">
          <Sign />
        </div>
        <div className="absolute bottom-10 rotate-[15deg] left-0">
          <Sign />
        </div>
        <div className="w-[740px]">
          <h1 className="text-[103px] text-left w-full font-[700] leading-[100px] tracking-[-6.18px] lowercase rotate-[3.05deg]">
            /real
          </h1>
          <h1 className="flex gap-5 mt-2">
            <span className="text-[103px] font-[700] leading-[100px] tracking-[-6.18px] lowercase rotate-[-5deg]">
              Agency
            </span>
            <span className="text-[103px] font-[700] leading-[100px] tracking-[-6.18px] lowercase rotate-[3.05deg]">
              With Its -
            </span>
          </h1>
        </div>
        <div className="mt-10 w-[700px] relative flex">
          <div className="absolute top-0 left-1/2 -translate-y-10 -translate-x-1/4 ">
            <Thounders />
          </div>
          <div className="absolute top-1/2 rotate-180 -left-10 -translate-x-3/4 -translate-y-1/2  ">
            <Thounders />
          </div>
          <h2 className="text-[90px] text-brand-primary overflow-hidden bg-is-green w-fit tracking-[-6.18px] font-[700] leading-[90%] py-6 px-10 pb-14 rounded-xl rotate-[-2deg] h-[110px] flex relative items-center border-1 border-brand-primary justify-center">
            super
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              className="absolute top-0 right-0 translate-x-1 -translate-y-1"
              height="46"
              viewBox="0 0 39 46"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M11.6056 36.6903L0.755859 1.45117L38.1776 35.9709L21.9836 41.8552C17.6838 43.4176 12.9518 41.0626 11.6056 36.6903Z"
                fill="#0A0A0A"
              />
              <path
                d="M1.88443 29.4284L0.755859 1.45117L38.1776 35.9709L10.2004 37.0995C5.78569 37.2776 2.06252 33.8431 1.88443 29.4284Z"
                fill="white"
              />
              <path
                d="M36.7267 -4.14848e-05L38.1777 35.9707L0.75597 1.45098L36.7267 -4.14848e-05Z"
                fill="#00303C"
              />
            </svg>
          </h2>
          <h2 className="text-[90px] mt-20 text-brand-primary -ml-5 overflow-hidden bg-is-yellow shadow-md w-fit tracking-[-6.18px] font-[700] leading-[90%] py-6 px-10 pb-14 rounded-xl rotate-[4deg] h-[110px] flex relative items-center border-1 border-brand-primary justify-center">
            digital
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              className="absolute bottom-0 rotate-90 right-0 translate-x-1 translate-y-2"
              height="46"
              viewBox="0 0 39 46"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M11.6056 36.6903L0.755859 1.45117L38.1776 35.9709L21.9836 41.8552C17.6838 43.4176 12.9518 41.0626 11.6056 36.6903Z"
                fill="#0A0A0A"
              />
              <path
                d="M1.88443 29.4284L0.755859 1.45117L38.1776 35.9709L10.2004 37.0995C5.78569 37.2776 2.06252 33.8431 1.88443 29.4284Z"
                fill="white"
              />
              <path
                d="M36.7267 -4.14848e-05L38.1777 35.9707L0.75597 1.45098L36.7267 -4.14848e-05Z"
                fill="#00303C"
              />
            </svg>
          </h2>
        </div>
        <div className="w-full mt-10 flex items-center justify-end">
          <div className="flex gap-10">
            <span className="max-w-44">
              Let's start discussing your project
            </span>
            <button className="bg-white py-[14px] px-[25px] relative rounded-[16px] text-black font-[600] leading-[22px] before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:-z-10 before:bg-opacity-60 before:left-0 before:top-1 before:rounded-[16px] before:-rotate-[2.5deg]">
              <div className="absolute top-0 right-1 -translate-y-1/2">
                <Pin />
              </div>
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
