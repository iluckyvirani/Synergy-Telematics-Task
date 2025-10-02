import React from 'react'

import shape1 from '../../assets/images/sl-1.png'
import shape2 from '../../assets/images/sl-2.png'
import shape3 from '../../assets/images/sl-3.png'
import shape4 from '../../assets/images/sl-4.png'
import shape5 from '../../assets/images/sl-5.png'
import shape6 from '../../assets/images/sl-6.png'
import shape7 from '../../assets/images/sl-7.png'
import shape8 from '../../assets/images/header_left.png'



const ApplicationProcess = () => {
  return (
    <>
      <section className="relative py-5 line">
        {/* Shapes (optional) */}
        <div className=''>
          <img src={shape1} alt="shape" className="absolute top-28 left-12 opacity-30 animate-jackInTheBox" />
          <img src={shape2} alt="shape" className="absolute top-48 left-25 opacity-30 animate-spin-slow" />
          <img src={shape3} alt="shape" className="absolute top-39 left-78 opacity-30 animate-fadeOutBottomLeft" />
          <img src={shape4} alt="shape" className="absolute top-36.5 left-119 opacity-20 animate-animationFramesOne" />
          <img src={shape5} alt="shape" className="absolute bottom-28 right-90 opacity-30" />
          <img src={shape6} alt="shape" className="absolute bottom-28 right-29 opacity-30" />
          <img src={shape7} alt="shape" className="absolute bottom-11 right-70 opacity-30" />
          <img src={shape8} alt="shape" className="absolute -top-5" />
        </div>

        <div className="container mx-auto relative pr-[12px] pl-[12px]">
          <div className='relative text-center title'>
            <h2 className="font-bakbak text-center text-2xl md:text-3xl  text-[#1d113e] relative pb-6">
              7 Steps Application Process
            </h2>
          </div>


          {/* Steps */}
          <div className="flex flex-wrap mx-3 mt-3">
            <div className="w-full md:w-3/4 text-center relative">
              <ul className="service-link flex flex-wrap relative m-0 p-0">
                <li className="relative box-border sm:min-h-[350px] min-h-[210px] sm:w-[13.5%] w-[50%] flex flex-col items-center text-center">
                  <span className="icon1 relative inline-block w-10 h-10 leading-[40px] rounded-full text-white font-bold mb-6 bg-[#ffc000]">
                    1
                  </span>
                  <div className="hexagon hexagon1 bg-[#ffc000]">Know your Approvals</div>
                </li>

                <li className="relative box-border sm:min-h-[350px] min-h-[210px] sm:w-[13.5%] w-[50%] flex flex-col items-center text-center">
                  <span className="icon1 relative inline-block w-10 h-10 leading-[40px] rounded-full text-white font-bold mb-6 bg-[#c55a11]">
                    2
                  </span>
                  <div className="hexagon hexagon2 bg-[#c55a11]">
                    Check Comprehensive list of Approvals
                  </div>
                </li>

                <li className="relative box-border sm:min-h-[350px] min-h-[210px] sm:w-[13.5%] w-[50%] flex flex-col items-center text-center">
                  <span className="icon1 relative inline-block w-10 h-10 leading-[40px] rounded-full text-white font-bold mb-6 bg-[#2e75b6]">
                    3
                  </span>
                  <div className="hexagon hexagon3 bg-[#2e75b6]">
                    Registration &amp; Account Activation
                  </div>
                </li>

                <li className="relative box-border sm:min-h-[350px] min-h-[210px] sm:w-[13.5%] w-[50%] flex flex-col items-center text-center">
                  <span className="icon1 relative inline-block w-10 h-10 leading-[40px] rounded-full text-white font-bold mb-6 bg-[#00a3a1]">
                    4
                  </span>
                  <div className="hexagon hexagon4 bg-[#00a3a1]">
                    Fill Common Application Form
                  </div>
                </li>

                <li className="relative box-border sm:min-h-[350px] min-h-[210px] sm:w-[13.5%] w-[50%] flex flex-col items-center text-center">
                  <span className="icon1 relative inline-block w-10 h-10 leading-[40px] rounded-full text-white font-bold mb-6 bg-[#f68d2e]">
                    5
                  </span>
                  <div className="hexagon hexagon5 bg-[#f68d2e]">Apply for NOC/License</div>
                </li>

                <li className="relative box-border sm:min-h-[350px] min-h-[210px] sm:w-[13.5%] w-[50%] flex flex-col items-center text-center">
                  <span className="icon1 relative inline-block w-10 h-10 leading-[40px] rounded-full text-white font-bold mb-6 bg-[#e91e63]">
                    6
                  </span>
                  <div className="hexagon hexagon6 bg-[#e91e63]">Pay Consolidated Fee</div>
                </li>

                <li className="relative box-bordersm:min-h-[350px] min-h-[210px] sm:w-[13.5%] w-[50%] flex flex-col items-center text-center">
                  <span className="icon1 relative inline-block w-10 h-10 leading-[40px] rounded-full text-white font-bold mb-6 bg-[#7212f1]">
                    7
                  </span>
                  <div className="hexagon hexagon7 bg-[#7212f1]">
                    Download Issued Certificate
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mt-0 px-3  servicelinksss">
              <div className='relative text-center'>
                <ul className="service-link flex  flex-wrap relative m-0 p-0">
                  <div className='right-arrow'>

                  </div>
                  <li className="relative box-border sm:min-h-[350px] min-h-[50px] w-full flex  items-center  text-center">
                    <div className="hexagon hexagon9 bg-[#f68d2e]">
                      User
                      <br />
                      Feedback / Grievance
                    </div>
                    <div className="hexagon hexagon10 bg-[#00a3a1]">
                      Apply for Incentives
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApplicationProcess