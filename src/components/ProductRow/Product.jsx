import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Rating } from "@mui/material";
import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation, useNavigate } from "react-router-dom";
import "./Product.css";



function Product({title}) {


  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();


  let url = "";

  if (title === "Deals of the Day" ) {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"price":-1}`;
  }
  if (title === "Top Trending Deals") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"rating":-1}`;
  }
  if (title === "Deals on Mobile") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"mobile"}`;
  }
  if (title === "Deals on Refrigerators") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"refrigerator"}`;
  }
  if (title === "Deals on Audio") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"audio"}`;
  }
  if (title === "Deals on Kitchen Appliances") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"kitchenappliances"}`;
  }
  if (title === "Deals on Laptop") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"laptop"}`;
  }
  if (title === "Deals on Air Conditionars") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"ac"}`;
  }
  if (title === "Deals on Televisions") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"tv"}`;
  }
  if (title === "Deals on Washing Machines") {
    url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"washingMachine"}`;
  }


  const productList = async () => {
    const URL = url;
    const headers = { projectId: "tpe45ahovz01" };
    const response = await fetch(URL, { headers });
    const data = await response.json();
    setProductData(data.data);
    console.log(data.data ,title);
  };

  useEffect(() => {
    productList();
  }, []);

  const [current, setCurrent] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleClick = async (data) => {
    navigate("/productDetail", {
      state: {
          data: data,
      },
  });
  }

  return (
    <>
      <Box className="px-5">
      <Box className="text-[24px] font-[500] text-white text-bold p-2">{title}</Box>
        <Box className="">
          <Slider {...settings} className="">
            {productData.map((data) => (
              <Box
                key={data.name}
                className="bg-black h-[430px] text-white rounded-xl py-4 px-2 cursor-pointer" onClick = {()=>handleClick(data)}
              >
                <Box className="h-56 flex justify-center items-center">
                  <img src={data?.displayImage} alt="" className="h-60 w-50" />
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
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default Product;
