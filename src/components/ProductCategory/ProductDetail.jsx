import { Box, Typography, Rating } from "@mui/material";
import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InnerImageZoom from "react-inner-image-zoom";
import "../ProductCategory/ProductDetail.css";
import { ArrowCircleDownRounded } from "@mui/icons-material";
import { ArrowBack } from "@material-ui/icons";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PageNavigation from "../PageNavigation/PageNavigation";
import { HTMLToJSON } from "html-to-json-parser";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomDetail from "./BottomDetail";

function ProductDetail() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [mainImage, setMainImage] = useState(singleProduct.displayImage);
  const dispatch = useDispatch();

  const singleProductAPI = async () => {
    console.log(productID, "pp");
    const URL = `https://academics.newtonschool.co/api/v1/ecommerce/product/${productID}`;
    const headers = { projectId: "tpe45ahovz01" };
    const response = await fetch(URL, { headers });
    const data = await response.json();
    setSingleProduct(data.data);
    setMainImage(singleProduct.displayImage);
    // console.log(data.data);
  };

  useEffect(() => {
    singleProductAPI();
    // setMainImage(singleProduct.displayImage);
  }, []);

  const location = useLocation();
  const productID = location?.state?.data?._id || false;

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        newItem: item,
        quantity: 1,
      })
    );
    toast.success("Item Added To Cart", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <>
      <Box className="bg-[#191919] mt-20 text-white">
        {console.log(singleProduct, "sssss")}
        <PageNavigation title={singleProduct.brand} />
        <ToastContainer />
        <Box className="text-white md:flex px-5">
          <Box className=" md:w-[50%]  flex justify-center content-center items-center border-b-2 border-r-2 border-gray-500 p-5">
            <Box className=" m-auto w-[40%]">
              <Slider {...settings2} className="w-[55%] m-auto py-2 slider-2">
                {singleProduct?.images?.map((data) => (
                  <Box className="flex justify-center items-center border border-gray-400 m-auto cursor-pointer">
                    <img
                      src={data}
                      alt=""
                      className=""
                      onClick={() => setMainImage(data)}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box className="w-[60%]">
              <img src={mainImage} alt="" className="" />
            </Box>
          </Box>
          <Box className=" p-5">
            <h3 className="font-bold py-2">{singleProduct.name}</h3>
            <Box className="flex gap-x-2">
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating
                  className=""
                  name="half-rating-read"
                  value={singleProduct.ratings?.toFixed()}
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
            <h3 className="font-bold text-2xl">₹ {singleProduct.price}</h3>
            <p className="text-sm">(incl. all Taxes)</p>
            <hr className="my-2 border border-gray-500" />
            <del className="text-[#9a9a9a] font-bold mr-3">
              MRP:{" "}
              {Number((singleProduct.price * 0.05).toFixed()) +
                singleProduct.price}
            </del>
            (Save ₹ {Number((singleProduct.price * 0.05).toFixed())})
            <p className="py-2">Color: </p>
            <Box className="">
              <button className="mr-2 border border-green-400 py-1 px-3 rounded-md font-bold text-sm">
                white
              </button>
              <button className="mr-2 border border-green-400 py-1 px-3 rounded-md font-bold text-sm">
                black
              </button>
              <button className="border border-green-400 py-1 px-3 rounded-md font-bold text-sm">
                gray
              </button>
            </Box>
            <Box className="border border-gray-500 p-2 mt-5 rounded-md">
              <h3 className="py-3">Key Features</h3>
              <Box className="text-sm">
                {singleProduct?.features?.map((feature) => (
                  <li>{feature}</li>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="px-5">
          <Box className=" max-h-[500px] border border-gray-500 overflow-y-auto mt-4 rounded-lg">
            <Box className="p-6">
              <h1 className="text-lg font-bold mb-3">Overview</h1>
              cd{" "}
              <p
                dangerouslySetInnerHTML={{ __html: singleProduct.description }}
              ></p>
            </Box>
          </Box>
        </Box>
        <Box className="mt-4 px-5">
          <Box className=" p-5 h-[100px] border border-gray-500 rounded-lg">
            <h1 className="text-lg font-bold mb-3">Reviews</h1>
            <p> No Reviews</p>
          </Box>
        </Box>

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
        {/* <BottomDetail singleProduct={singleProduct}/> */}
        {/* <Box className="bg-black h-[100px] fixed bottom-0 w-full p-2">
          <div className=" flex justify-center items-center">
            <Box className=" p-2 flex justify-center gap-x-4 items-center">
              <Box className="flex items-center w-[90%]">
                <Box className="">
                  <img
                    className=" min-w-[100px] p-1"
                    src={singleProduct.displayImage}
                  />
                </Box>
                <Box className="text-sm ml-2 px-2 font-bold">
                  <p className="truncate w-8">{singleProduct.name}</p>
                  <p>₹ {singleProduct.price}</p>
                </Box>
              </Box>
              <Box className="flex items-center gap-x-5">
                <Box>
                  <button className="bg-green-600 py-1 px-5 rounded-md text-black">
                    Buy Now
                  </button>
                </Box>
                <Box>
                  <button
                    onClick={() => handleAddToCart(singleProduct)}
                    className="g-gray-800 text-white py-1 px-6 rounded-md"
                  >
                    Add To Cart
                  </button>
                </Box>
              </Box>
            </Box>
          </div>
        </Box> */}
      </Box>
    </>
  );
}

export default ProductDetail;
