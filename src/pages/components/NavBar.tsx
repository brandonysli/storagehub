// NavBar props

// what does the navbar need to show for example whether someone is logged in or not

import React from "react";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="bg-sky-500 flex items-center flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <Image
            className="float-left h-8 w-8 mr-2"
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
            alt={""}
            width={54}
            height={54}
          />
          <span className="font-semibold text-xl float-right">CompanyName</span>
        </Link>
      </div>
      <div className="flex items-center flex-grow ">
        <div className="mr-5">
          <Link href="/testPages/testDashboard">Dashboard</Link>
        </div>
        <div className="mr-5">
          <Link href="/testPages/testAboutUs">About Us</Link>
        </div>
        <div className="mr-5">
          <Link href="/testPages/testProfile">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
// import styles from './NavBar.module.css';
// import * as data from "./links.json";

// const linksString = JSON.stringify(data);
// const links = JSON.parse(linksString).links;

// type Link = {
//     label:string;
//     href:string;
// }

// const Links: React.FC<{links: Link[]}> = ({links}) => {
//     return (
//         <div className = {styles['links-container']}>
//             {links.map((link:Link) => {
//                 return (
//                     <div key = {link.href} className = {styles['link']}>
//                         <a href = {link.href}>
//                             {link.label}
//                         </a>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// const NavBar: React.FC<{}> = () => {
//     return(
//        <nav className = {styles.navbar}>
//             <div className = {styles['logo-container']}>
//                 <span>Logo</span>
//             </div>
//             <Links links = {links} />
                
//         </nav>
//     )
// }

// export default NavBar;
