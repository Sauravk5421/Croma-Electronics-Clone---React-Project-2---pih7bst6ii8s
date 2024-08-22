import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Rating } from "@mui/material";
import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useLocation, useNavigate } from "react-router-dom";
import "../MenuList/MenuList.css";

function MenuProduct() {
  const [productData, setProductData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const selected_category = location?.state.item || false;
  console.log(selected_category, "ss");

  let title = "";
  let input_category = "";
  if (selected_category === "Mobiles") {
    input_category = "mobile";
    title = "Mobile";
  }
  if (selected_category === "Refrigerators") {
    input_category = "refrigerator";
    title = "Refrigerators";
  }
  if (selected_category === "Headphones & Earphones") {
    input_category = "audio";
    title = "Audio";
  }
  if (selected_category === "Kitchen Appliances") {
    input_category = "kitchenappliances";
    title = "Kitchen Appliances";
  }
  if (selected_category === "Laptops") {
    input_category = "laptop";
    title = "Laptop";
  }
  if (selected_category === "Air Conditioners") {
    input_category = "ac";
    title = "Air Conditioners";
  }
  if (selected_category === "Televisions") {
    input_category = "tv";
    title = "Televisions";
  }
  if (selected_category === "Washing Machines") {
    input_category = "washingMachine";
    title = "Washing Machines";
  }

  const productList = async () => {
    console.log(selected_category, "a4a");
    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":%22${input_category}%22}`;
    const headers = { projectId: "tpe45ahovz01" };
    const response = await fetch(URL, { headers });
    const data = await response.json();
    console.log(data.data, "dd");
    setProductData(data.data);
  };

  useEffect(() => {
    productList();
  }, [input_category]);

  const handleClick = async (data) => {
    navigate("/productDetail", {
      state: {
        data: data,
      },
    });
  };

  return (
    <>
      <Box className="px-5 mt-20 bg-[#191919]">
        <Box className="cursor-pointer text-[24px] font-[500] text-white text-bold p-2">
          {title}
        </Box>
        <Box className="">
          <Box className="flex flex-wrap">
            {productData.map((data) => (
              <Box
                key={data.name}
                className="bg-black h-[430px] text-white rounded-xl py-4 px-2 w-[30%] m-2 cursor-pointer"
                onClick = {()=>handleClick(data)}
              >
                <Box className="h-56 flex justify-center items-center">
                  <img src={data.displayImage} alt="" className="h-60 w-50" />
                </Box>
                <Box className=" flex flex-col justify-center gap-4 p-4">
                  <p className=" line-clamp-2">{data.name}</p>
                  <p className=""> ₹ {data.price}</p>
                  <Box sx={{ "& > legend": { mt: 2 } }}>
                    <Rating
                      className=""
                      name="half-rating-read"
                      value={data.ratings}
                      precision={0.5}
                      readOnly
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55, color: "#9a9a9a" }}
                          fontSize="inherit"
                        />
                      }
                    />
                    
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

    </>
  );
}

export default MenuProduct;
