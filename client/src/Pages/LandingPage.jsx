import { Search } from "lucide-react"
import PrimaryBtn from "../components/PrimaryBtn"

const LandingPage = () => {
  return (
    <div className="p-6 sm:p-12 sm:h-screen">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden -z-10">
        <img src="https://cdn.prod.website-files.com/642697fb54ecdf3d30edf7fa/657b46723505347178a9b5ae_fRvSND3a0MkyADqAXkKYVkJVeGDnLZyyCV-_xLjmZB_qgTLITRudapag25ALM92Zbfp7vIbyVBg_zZk_Vq_Q2HGFF9-fd_Bsg-uGwjrEx6A_vBk1o3jLA84LNyDzr38jQ0OEmjaIWfWvDEu45UhD-y0.jpeg" alt="bg_img" className="h-full w-full object-cover object-bottom" />
        <div className="absolute w-full h-full bg-gradient-to-r from-white via-[#fffffff6] to-[#ffffffc7] top-0 left-0"></div>
      </div>

      <div className="flex md:flex-row flex-col-reverse items-center justify-around gap-8 mx-auto max-w-[1400px] h-full">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative">
            <div className="absolute right-8 top-1/2 -translate-y-1/2"><Search /></div>
            <input type="text" placeholder="Search for the dish or item" className="rounded-full px-8 py-5 sm:min-w-[25rem] w-[500px] shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)] outline-none" />
          </div>
          <div className="flex items-center justify-around w-2/3 mx-auto">
            <div className="border flex-grow"></div>
            <p className="text-neutral-500 text-sm px-5">Or</p>
            <div className="border flex-grow"></div>
          </div>
          <div className="shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)] w-[25rem] h-[25rem] bg-white rounded-[4rem] flex items-center justify-center">
            <div className="relative">
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M47.4116 3C47.4116 4.65685 46.0685 6 44.4116 6H30C16.7452 6 6 16.7452 6 30V41.9591C6 43.616 4.65685 44.9591 3 44.9591V44.9591C1.34315 44.9591 0 43.616 0 41.9591V30C0 13.4315 13.4315 0 30 0H44.4116C46.0685 0 47.4116 1.34315 47.4116 3V3ZM47.4116 297C47.4116 295.343 46.0685 294 44.4116 294H30C16.7452 294 6 283.255 6 270V258.858C6 257.201 4.65685 255.858 3 255.858V255.858C1.34315 255.858 0 257.201 0 258.858V270C0 286.569 13.4315 300 30 300H44.4116C46.0685 300 47.4116 298.657 47.4116 297V297ZM253.406 297C253.406 298.657 254.749 300 256.406 300H270C286.569 300 300 286.569 300 270V258.858C300 257.201 298.657 255.858 297 255.858V255.858C295.343 255.858 294 257.201 294 258.858V270C294 283.255 283.255 294 270 294H256.406C254.749 294 253.406 295.343 253.406 297V297ZM256.406 6C254.749 6 253.406 4.65685 253.406 3V3C253.406 1.34315 254.749 0 256.406 0H270C286.569 0 300 13.4315 300 30V41.9591C300 43.616 298.657 44.9591 297 44.9591V44.9591C295.343 44.9591 294 43.616 294 41.9591V30C294 16.7452 283.255 6 270 6H256.406Z" fill="url(#paint0_linear_52_61)" />
                <defs>
                  <linearGradient id="paint0_linear_52_61" x1="300" y1="150.409" x2="-6.94823" y2="150.409" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#714F44" />
                    <stop offset="1" stopColor="#D19470" />
                  </linearGradient>
                </defs>
              </svg>


              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="opacity-35" alt="QR code" />
              <svg className="absolute top-1/2 duration-700 z-10" width="300" height="136" viewBox="0 0 300 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="136" fill="url(#paint0_linear_52_69)" />
                <defs>
                  <linearGradient id="paint0_linear_52_69" x1="150.351" y1="0" x2="150.351" y2="136" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 z-10" width="300" height="7" viewBox="0 0 300 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3.5" y1="3.5" x2="296.5" y2="3.5" stroke="url(#paint0_linear_52_67)" strokeWidth="7" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_52_67" x1="0" y1="7.5" x2="300" y2="7.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D29470" />
                    <stop offset="1" stopColor="#714F44" />
                  </linearGradient>
                </defs>
              </svg>


            </div>


          </div>
          <PrimaryBtn>Scan to check</PrimaryBtn>
        </div>
        <div className="w-1/2 md:text-right text-center">
          <h1 className="leading-[4rem]">
            <span className="font-semibold text-6xl">Scan a QR code,</span><br />
            <span className="text-5xl">get detailed calorie breakdown, and adjust your meal with</span>
            <span className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#cf936e] to-[#674740]"> CALORIX.</span>
          </h1>

          <p className="text-sm text-neutral-500 leading-7 mt-4">Explore the nutritional breakdown of your favorite dishes, customize ingredient portions, and instantly track your calorie intake for a smarter, healthier lifestyle.</p>
        </div>
      </div>

    </div>
  )
}

export default LandingPage