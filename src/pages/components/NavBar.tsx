// NavBar props

import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import NaiveButton from "./modular/NaiveButton";
import { IconPlus } from "@tabler/icons-react";
import { HexColor } from "../modules/HexColor";

// const NavBa = () => {
//   return (
//     <nav className="flex flex-wrap items-center p-6 bg-sky-500">
//       <div className="flex items-center flex-shrink-0 mr-6">
//         <Link href="/">
//           <Image
//             className="float-left w-8 h-8 mr-2"
//             src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
//             alt={""}
//             width={54}
//             height={54}
//           />
//           <span className="float-right text-xl font-semibold">CompanyName</span>
//         </Link>
//       </div>
//       <div className="flex items-center flex-grow ">
//         <div className="mr-5">
//           <Link href="/testPages/testDashboard">Dashboard</Link>
//         </div>
//         <div className="mr-5">
//           <Link href="/testPages/testAboutUs">About Us</Link>
//         </div>
//         <div className="mr-5">
//           <Link href="/testPages/testProfile">Profile</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between mx-12 my-4">
      <NextLink href="/" className="normal-case btn btn-ghost">
        <div className="flex flex-row items-center justify-end gap-2">
          <span className="text-xl font-bold">StorageHub</span>
          <span className="text-xl text-neutral text-opacity-80">beta</span>
        </div>
      </NextLink>
      <div className="flex flex-row items-center justify-center gap-6 pt-2">
        <NaiveButton
          backgroundColor={new HexColor("#fdba74")}
          textColor={new HexColor("#7c2d12")}
        >
          <IconPlus size={20} />
          <span>Create Listing</span>
        </NaiveButton>
        <div className="rounded-full ring ring-orange-300 ring-offset-base-100 h-min">
          <NextImage
            alt="avatar"
            width={36}
            height={36}
            src={"/avatar.webp"}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
