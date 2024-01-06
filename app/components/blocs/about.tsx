import Clip from "@/app/shared/clip";
import Thounders from "@/app/shared/thunders";

export default function AboutMe() {
  return (
    <div className="w-full h-full pb-[100px] background-grid relative">
      <div className="absolute w-[168px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="289"
          height="186"
          className="z-10 relative"
          viewBox="0 0 289 186"
          fill="none"
        >
          <g opacity="0.5" filter="url(#filter0_d_67_8786)">
            <path d="M4 176.5C97.5 189.5 276 83.5 285.5 0.5" stroke="white" />
          </g>
          <defs>
            <filter
              id="filter0_d_67_8786"
              x="0.931152"
              y="0.443359"
              width="288.066"
              height="184.646"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_67_8786"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_67_8786"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="w-4 h-4 bg-brand-primary rounded-full z-30  block absolute  top-[130px] right-0"></div>
        <div className="w-[427.904px] h-[196.43px] bg-is-yellow rotate-[4.26deg] rounded-[16px] p-[12px] absolute top-[134px] left-[124px] flex items-center justify-center flex-col">
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4">
            <Clip />
          </div>
          <h2 className="text-5xl text-brand-primary font-[700]">
            Work Experince!
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            className="absolute bottom-0 rotate-90 right-[2px] translate-y-2"
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
              fill="#00252E"
            />
          </svg>
        </div>
      </div>
      {/*  */}
      <div className="container flex justify-end pt-36">
        <div className="flex flex-col">
          <div className=" bg-white p-[22px_47px_20px_24px] rounded-[16px]  relative  mr-[84px] flex flex-col gap-6 -rotate-3 z-10 border border-brand-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              className="absolute top-0  -right-[1.5px] -translate-y-1"
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
                fill="#C7FB03"
              />
              <path
                d="M36.7267 -4.14848e-05L38.1777 35.9707L0.75597 1.45098L36.7267 -4.14848e-05Z"
                fill="#00252E"
              />
            </svg>
            <h3 className="text-5xl text-brand-primary font-bold">$812+</h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-[600px] text-black">Money Raised</h4>
              <p className="w-[268.83px] text-gray-500">
                Total amount of money raised as a result of working with Walk
                Studio
              </p>
            </div>
          </div>
          <div className="p-[22px_47px_20px_24px] rounded-[16px] border border-brand-primary rotate-2 relative z-[5] bg-white ml-[84px] flex flex-col gap-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              className="absolute bottom-0 rotate-90 right-0 translate-y-2"
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
                fill="#EC68FD"
              />
              <path
                d="M36.7267 -4.14848e-05L38.1777 35.9707L0.75597 1.45098L36.7267 -4.14848e-05Z"
                fill="#00252E"
              />
            </svg>
            <h3 className="text-5xl text-brand-primary font-bold">$812+</h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-[600px] text-black">Money Raised</h4>
              <p className="w-[268.83px] text-gray-500">
                Total amount of money raised as a result of working with Walk
                Studio
              </p>
            </div>
          </div>
          <div className=" bg-white p-[22px_47px_20px_24px] rounded-[16px]  relative  mr-[84px] flex flex-col gap-6 -mt-5 z-[2] rotate-6 border border-brand-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="46"
              className="absolute bottom-0 -left-[2px] translate-y-[7px] rotate-180"
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
                fill="#FB7F03"
              />
              <path
                d="M36.7267 -4.14848e-05L38.1777 35.9707L0.75597 1.45098L36.7267 -4.14848e-05Z"
                fill="#00252E"
              />
            </svg>
            <h3 className="text-5xl text-brand-primary font-bold">$812+</h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-[600px] text-black">Money Raised</h4>
              <p className="w-[268.83px] text-gray-500">
                Total amount of money raised as a result of working with Walk
                Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
