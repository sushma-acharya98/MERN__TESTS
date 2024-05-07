import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image';
// import "./nav.css";

const page = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <div>
     <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
         
          <Image src="/site-logo.png" width="70" height="80"/>
        </NavbarBrand>
      </NavbarContent>

       <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle>
        </NavbarMenuToggle>
      </NavbarContent>
     </Navbar>
        
    </div>
  )
}

export default page