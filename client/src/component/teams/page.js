import React from 'react'
import "./teams.css";
import Image from 'next/image';

const page = () => {
  return (
    <>
        <div className="section_teams">
            <div className="container">
                <div className="teams_top">
                        <h2>The Core of Our Team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
                <div className="teams_cards flex flex-wrap">
                    <div className="teams_card">
                        <div className="teams_img">
                            <Image src="/Image (2).jpg" alt="Image" width={311} height={282} className="full_img" />
                        </div>
                        <div className="teams_desc">
                            <div className="text_name">
                                Morgan Drew
                            </div>
                            <div className="designation">
                            Manager
                            </div>
                            <div className="teams_socialmedia">
                                <ul className='flex gap-4'>
                                    <li>
                                        <a href="#">
                                            <Image src="/twitter.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                    </li>
                                        <li>
                                            <a href="#">
                                            <Image src="/facebook.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <Image src="/linkedin.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <Image src="/telegram.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div className="teams_card">
                        <div className="teams_img">
                            <Image
                                src="/Image (1).jpg"
                                width={311}
                                height={282}
                                alt="image"
                            />
                        </div>
                        <div className="teams_desc">
                            <div className="text_name">
                                Jeffery Walker
                            </div>
                            <div className="designation">
                            Lead Designer
                            </div>
                            <div className="teams_socialmedia">
                                <ul className='flex gap-4'>
                                    <li>
                                        <a href="#">
                                            <Image 
                                                src="/twitter.svg" 
                                                className="full_img"
                                                alt="Image" 
                                                width={20} 
                                                height={20} 
                                            />
                                        </a>
                                    </li>
                                        <li>
                                            <a href="#">
                                            <Image 
                                                src="/facebook.svg" 
                                                alt="Image" width={20} 
                                                height={20} 
                                                className="full_img" 
                                            />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <Image 
                                                src="/linkedin.svg" 
                                                alt="Image" 
                                                width={20}
                                                height={20} 
                                                className="full_img" 
                                            />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <Image 
                                                src="/telegram.svg" 
                                                alt="Image" 
                                                width={20} 
                                                height={20} 
                                                className="full_img"
                                            />
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div className="teams_card">
                        <div className="teams_img">
                            <Image src="/Image.jpg" alt="Image" width={311} height={282} className="full_img" />
                        </div>
                        <div className="teams_desc">
                            <div className="text_name">
                                Andrew Steve
                            </div>
                            <div className="designation">
                            UI/UX Designer
                            </div>
                            <div className="teams_socialmedia">
                                <ul className='flex gap-4'>
                                    <li>
                                        <a href="#">
                                            <Image src="/twitter.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                    </li>
                                        <li>
                                            <a href="#">
                                            <Image src="/facebook.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <Image src="/linkedin.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <Image src="/telegram.svg" alt="Image" width={20} height={20} className="full_img" />
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default page