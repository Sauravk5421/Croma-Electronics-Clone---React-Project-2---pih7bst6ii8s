import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <footer className="bg-[#1d1d1d] text-white p-5 pb-[75px]">
        <Box className="px-3 md:flex justify-around ">
          {/* CONNECT WITH US */}
          <Box className="w-full md:w-1/3 md:mb-0 py-1 border-r-2">
            <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[90%] px-5 py-3 rounded-md bg-white text-black focus:outline-none mb-4"
            />
            <Box className=" justify-start">
              <Box className="flex">
                <a
                  href="https://www.youtube.com/user/CromaRetail"
                  target="_blank"
                  className="p-2 px-2 "
                >
                  <YouTubeIcon className="text-2xl  hover:text-youtube" />
                </a>
                <a
                  href="https://www.facebook.com/CromaRetail/"
                  target="_blank"
                  className="p-2 px-5"
                >
                  <FacebookIcon className="text-2xl hover:text-iconColour" />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fcroma.retail%2F&is_from_rle"
                  target="_blank"
                  className="p-2 px-5"
                >
                  <InstagramIcon className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/infiniti-retail-limited-croma---a-tata-enterprise"
                  target="_blank"
                  className="p-2 px-5"
                >
                  <LinkedInIcon className="text-2xl hover:text-iconColour" />
                </a>
                <a
                  href="https://twitter.com/cromaretail?s=11"
                  target="_blank"
                  className="p-2 px-5"
                >
                  <TwitterIcon className="text-2xl hover:text-iconColour" />
                </a>
              </Box>
              <Box className="hidden md:block">
                <p className="mt-8 text-sm">
                  © Copyright 2023 Croma. All rights reserved.
                </p>
              </Box>
            </Box>
          </Box>

          {/* <Box className="h-[300px] border-2 border-white"></Box> */}
          {/* USEFUL LINKS */}
          <Box className="w-full md:w-1/3 mb-6 md:mb-0 px-10 pl-3  border-r-2">
            <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
            <div className="md:flex justify-between ">
              <ul className="list-none md:mr-4 cursor-pointer">
                {/* <Link to="/"  ><li className="mb-2 p-1.5 hover:text-customColor " >About Crome</li></Link> */}

                <li className="mb-2 p-1.5 hover:text-customColor ">
                  Return Policy
                </li>

                <li className="mb-2 p-1.5 hover:text-customColor">
                  B2B Orders
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Store Locator
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">E-Waste</li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Help And Support
                </li>
              </ul>
              <ul className="list-none pr-8 cursor-pointer">
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Franchise{" "}
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">Site Map</li>

                <li className="mb-2 p-1.5 hover:text-customColor">
                  Terms Of Use
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Disclaimer
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Privacy Policy
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">Unboxed</li>
              </ul>
            </div>
          </Box>

          {/* PRODUCTS */}
          <Box className="w-full md:w-1/3 mb-6 md:mb-0 px-10 pl-3">
            <h3 className="text-lg font-semibold mb-4">PRODUCTS</h3>
            <Box className="md:flex justify-between">
              <ul className="list-none md:mr-4 cursor-pointer">
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Home Appliances
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Phones & Wearables
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Computers & Tablets
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Kitchen Appliances
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Audio & Video
                </li>
              </ul>
              <ul className="list-none cursor-pointer">
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Health & Fitness
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Grooming & Personal
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor ">
                  Cameras & Accessories
                </li>
                <li className="mb-2 p-1.5 hover:text-customColor">Gaming</li>
                <li className="mb-2 p-1.5 hover:text-customColor">
                  Accessories
                </li>
              </ul>
            </Box>
            <Box className="md:hidden">
                <p className="mt-8 text-sm">
                  © Copyright 2023 Croma. All rights reserved.
                </p>
              </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
