import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import Image from 'next/image';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Solutions',
      'About',
      'Careers',
      'Contact',
   ];
   return (
     <Navbar
       isBordered
       css={{
         overflow: "hidden",
         "& .nextui-navbar-container": {
           background: "$background",
           borderBottom: "none",
         },
       }}
     >
       <Navbar.Brand>
         <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
         <Image
           src={"/savetech_logo_no_bg.png"}
           width={80}
           height={60}
           alt="logo"
         />
         <Text b color="green" hideIn="xs">
           SaveTech Solutions
         </Text>
         <Navbar.Content
           hideIn="sm"
           css={{
             pl: "6rem",
           }}
         >
           <Navbar.Link isActive href="#">
             About
           </Navbar.Link>
            <Dropdown isBordered>
             <Navbar.Item>
               <Dropdown.Button
                 auto
                 light
                 css={{
                   px: 0,
                   dflex: "center",
                   svg: { pe: "none" },
                 }}
                 iconRight={icons.chevron}
                 ripple={false}
               >
                 Solutions
               </Dropdown.Button>
             </Navbar.Item>
             <Dropdown.Menu
               aria-label="ACME features"
               css={{
                 $$dropdownMenuWidth: "340px",
                 $$dropdownItemHeight: "70px",
                 "& .nextui-dropdown-item": {
                   py: "$4",
                   svg: {
                     color: "$secondary",
                     mr: "$4",
                   },
                   "& .nextui-dropdown-item-content": {
                     w: "100%",
                     fontWeight: "$semibold",
                   },
                 },
               }}
             >
               <Dropdown.Item
                 key="enterprise_saas"
                 showFullDescription
                 description="Our government subsidized software solutions grow your business."
                 icon={icons.scale}
               >
                 Enterprise SaaS
               </Dropdown.Item>
               <Dropdown.Item
                 key="hiring_support"
                 showFullDescription
                 description="Learn how to tap on government grants to meet your talent needs."
                 icon={icons.user}
               >
                 Hiring Support
               </Dropdown.Item>
               <Dropdown.Item
                 key="software_development"
                 showFullDescription
                 description="Let our team develop the best app for you."
                 icon={icons.flash}
               >
                 Software Development
               </Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
           <Navbar.Link href="#">Careers</Navbar.Link>
           <Navbar.Link href="#">Contact</Navbar.Link>
         </Navbar.Content>
       </Navbar.Brand>

       <Navbar.Collapse>
         {collapseItems.map((item, index) => (
           <Navbar.CollapseItem key={item}>
             <Link
               color="inherit"
               css={{
                 minWidth: "100%",
               }}
               href="#"
             >
               {item}
             </Link>
           </Navbar.CollapseItem>
         ))}
         {/* <Navbar.CollapseItem>
           <Link
             color="inherit"
             css={{
               minWidth: "100%",
             }}
             target="_blank"
             href="https://github.com/Siumauricio/landing-template-nextui"
           >
             <GithubIcon />
           </Link>
         </Navbar.CollapseItem> */}
         {/* <Navbar.CollapseItem>
           <Switch
             checked={isDark}
             onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
           />
         </Navbar.CollapseItem> */}
       </Navbar.Collapse>
       <Navbar.Content>
         {/* <ModalLogin /> */}

         <Navbar.Item>
           <Button auto flat href="#" color={"success"}>
             Book Appointment
           </Button>
         </Navbar.Item>
         {/* <Navbar.Item hideIn={"xs"}>
           <Link
             color="inherit"
             css={{
               minWidth: "100%",
             }}
             target="_blank"
             href="https://github.com/Siumauricio/landing-template-nextui"
           >
             <GithubIcon />
           </Link>
         </Navbar.Item> */}
         {/* <Navbar.Item hideIn={"xs"}>
           <Switch
             checked={isDark}
             onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
           />
         </Navbar.Item> */}
       </Navbar.Content>
     </Navbar>
   );
};
