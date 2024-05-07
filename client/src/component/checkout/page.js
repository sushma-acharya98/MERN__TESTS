import React from 'react';
import "./checkout.css";
import Image from 'next/image';
const Page = () => {
  return (
    <>
      <div className='section_imgtext'>
            <div className="container mx-auto">
                <div className='flex flex-wrap'>
                    <div className='w-1/2 md:w-full imgtext_desc'>
                        <div className='imgtext_title'>
                            <h3>Demonstrate branding consequently think outside</h3>
                        </div>
                        <div className="imgtext_text">
                            <ul>
                                <li>Enterprise-grade security</li>
                                <li>99.9% guaranteed uptime SLA</li>
                                <li>Designated customer success team</li>
                            </ul>
                            <button className="button text-indigo-500 inline-flex items-center mt-4">
                                <a href="#" className="button_start inline-flex items-center">Start now
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='w-1/2 imgtext_img'>
                        <div className='image_holder'>
                            <Image src="/Right.jpg" alt="Image" width={560} height={560} className="full_img" />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Page;
