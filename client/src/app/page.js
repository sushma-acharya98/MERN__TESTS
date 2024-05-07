'use client'
import React from 'react';
import Hero from "@/component/hero/page";
import Footer from "@/component/footer/page";
import Feature from "@/component/feature/page";
import Imgtext from "@/component/checkout/page";
import Teams from "@/component/teams/page";
import Webtable from "@/component/faq/page";
import LoginRegister from "@/component/loginRegister/page";
const page = () => {
  return (
    <>

      <Hero />
      <Feature />
      <Imgtext />
      <Teams />
      <Webtable />
      <LoginRegister />
      <Footer />
    </>
  )
}

export default page