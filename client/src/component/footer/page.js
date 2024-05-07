import React from 'react'
import './footer.css';
import Image from 'next/image';
const footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className="top">
                    <Image
                        src="/Site-logo.png"
                        width={70}
                        height={80}
                        alt="image"
                    />
                    <p className="text footer-text">Generate outside the box thinking with the possibility to targtet the low.</p>
                </div>
                <div className="logos">
          
                </div>
        <div className="context">
            
            <div className="context-item">
                Products
                <ul className="context-list">
                    <li className="context-item">Context 1</li>
                    <li className="context-item">Context 2</li>
                    <li className="context-item">Context 3</li>
                    <li className="context-item">Context 4</li>
                </ul>
            </div>
            <div className="context-item">
                <ul className="context-list">
                    <li className="context-item">Context 1</li>
                    <li className="context-item">Context 2</li>
                    <li className="context-item">Context 3</li>
                    <li className="context-item">Context 4</li>
                </ul>
            </div>
            <div className="context-item">
                <ul className="context-list">
                    <li className="context-item">Context 1</li>
                    <li className="context-item">Context 2</li>
                    <li className="context-item">Context 3</li>
                    <li className="context-item">Context 4</li>
                </ul>
            </div>
            <div className="context-item">
                <ul className="context-list">
                    <li className="context-item">Context 1</li>
                    <li className="context-item">Context 2</li>
                    <li className="context-item">Context 3</li>
                    <li className="context-item">Context 4</li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            {/* <Image src="additional_logo.png" alt="Additional Logo" className="logo additional-logo" /> */}
            <p className="copyright">© 2024 Your Company. All rights reserved.</p>
        </div>
            </div>
        </div>
    </>
  )
}
export  default footer;