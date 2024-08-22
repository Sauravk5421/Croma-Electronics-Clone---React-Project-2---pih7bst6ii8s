import { Box, Typography, Rating } from "@mui/material";
import { useState, useEffect } from "react";

function BottomDetail({ singleProduct }) {

  return (
    <>
      <Box className="bg-black h-[70px] fixed bottom-0 w-full">
        <Box className="flex px-5 justify-center items-center">
          <Box className="px-2">
            <img
              className=" min-w-[50px] w-[70px]"
              src={singleProduct.displayImage}
            />
          </Box>
          <Box className="text-sm font-bold px-2">
            <p className="line-clamp-1">{singleProduct.name}</p>
            <p>₹ {singleProduct.price}</p>
          </Box>
          <Box className="px-2">
            <button className="min-w-[120px] bg-green-600 py-1 px-5 rounded-md text-black">
              Buy Now
            </button>
          </Box>
          <Box className="px-2">
            <button
              onClick={() => handleAddToCart(singleProduct)}
              className="min-w-[135px] bg-gray-800 text-white py-1 px-6 rounded-md"
            >
              Add To Cart
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BottomDetail;
