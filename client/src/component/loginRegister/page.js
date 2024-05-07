import React from 'react'
import "./login.css";
import {Button} from "@nextui-org/react";
const page = () => {
  return (
    <>
        <div className="section_callToAction">
            <div className='container'>
					<div className="callToAction_smalltxt">1% OF THE INDUSTRY</div>
					<div className="callToAction_title">
						<h2>
                        Welcome to your new digital reality thatwhich will rock your world truly at all?
                        </h2>
					</div>
                    <div className="button_holder">
                    <Button type-="submit" className="btn_callToAction btn_SignUp">
                            Sign up
                    </Button>
                    <br />
                    <Button type-="submit" className="btn_callToAction  btn_LogIn">
                           Log in
                    </Button>
                    </div>
                    
                    
                     
            </div>
        </div>
    </>
  )
}
export default page;