import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1000, min: 900 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 3,
  },
};

function Category() {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const productCategory = async () => {
    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories`;
    const headers = { projectId: "tpe45ahovz01" };
    const response = await fetch(URL, { headers });
    const data = await response.json();
    setProductList(data.data);
    // console.log(data.data)
  };

  useEffect(() => {
    productCategory();
  }, []);

  const handleClick = async (data, index) => {
    // console.log(data, "data");
    // console.log(index, "index");
    navigate("/productCategory", {
      state: {
          data: data,
          index: index,
      },
    });
  }

  return (
    <>
      <Box className="mt-[550px] w-full p-5">
        <Carousel
          // centerMode={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass=""
          dotListClass=""
          itemClass=" "
        >
          {productList.map((data, index) => (
            <Box className="">
                <img className="w-[80%] cursor-pointer" src={`./assests/categoryImg/${data}.png`}  onClick={() => handleClick(data, index)}/>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default Category;
