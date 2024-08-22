import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Rating } from "@mui/material";
import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";

function SearchPage() {
  const [searchProduct, setSearchProduct] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const searchText = location?.state?.searchText || false;

  let searchFilter = "";
  if (
    searchText === "oneplus" ||
    searchText === "xiaomi mobile" ||
    searchText === "samsung" ||
    searchText === "apple" ||
    searchText === "iphone" ||
    searchText === "lg" ||
    searchText === "xiaomi" ||
    searchText === "hp" ||
    searchText === "haier" ||
    searchText === "croma" ||
    searchText === "dell" ||
    searchText === "acer" ||
    searchText === "phillips" ||
    searchText === "Portronics" ||
    searchText === "boat" ||
    searchText === "bose" ||
    searchText === "sony" ||
    searchText === "jack martin" ||
    searchText === "jbl" ||
    searchText === "zebronics" ||
    searchText === "ambrane" ||
    searchText === "sonos" ||
    searchText === "godrej" ||
    searchText === "whirlpool" ||
    searchText === "foxsky" ||
    searchText === "daikin" ||
    searchText === "voltas" ||
    searchText === "hisense" ||
    searchText === "parasonic" ||
    searchText === "bajaj" ||
    searchText === "zunvolt" ||
    searchText === "kent" ||
    searchText === "pigeon" ||
    searchText === "wonderchef" ||
    searchText === "agaro" ||
    searchText === "nestle" ||
    searchText === "hurom" ||
    searchText === "borosil" ||
    searchText === "havells" ||
    searchText === "bosch" ||
    searchText === "lifelong" ||
    searchText === "lenovo" ||
    searchText === "asus" ||
    searchText === "tropicool" ||
    searchText === "IKall" ||
    searchText === "redmi" ||
    searchText === "aristocrat" ||
    searchText === "dyson" ||
    searchText === "boompods" ||
    searchText === "skybags" ||
    searchText === "arcticfox" ||
    searchText === "olympus" ||
    searchText === "traveldoo" ||
    searchText === "aeropostale" ||
    searchText === "tcl" ||
    searchText === "kevin"
  ) {
    searchFilter = "brand";
  } else if (
    searchText === "electronics" ||
    searchText === "mi mobile" ||
    searchText === "samsung mobile" ||
    searchText === "apple" ||
    searchText === "iphone" ||
    searchText === "lg mobile"
  ) {
    searchFilter = "category";
  } else if (
    searchText === "mobile" ||
    searchText === "phones" ||
    searchText === "mobiles" ||
    searchText === "phone" ||
    searchText === "tv" ||
    searchText === "television" ||
    searchText === "laptop" ||
    searchText === "refrigerator" ||
    searchText === "audio" ||
    searchText === "washingmachine" ||
    searchText === "ac" ||
    searchText === "kitchen" ||
    searchText === "kitchenappliances" ||
    searchText === "travel" ||
    searchText === "tablet"
  ) {
    searchFilter = "subCategory";
  }
  // console.log(searchFilter)
  const searchProductAPI = async () => {
    //   console.log(productID, "pp");
    let url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={%22${searchFilter}%22:%22${searchText}%22}`;
    const projectId = "tpe45ahovz01";
    try {
      const response = await axios({
        url: url,
        method: "get",
        headers: {
          projectId: projectId,
        },
      });
      setSearchProduct(response.data.data);
    //   console.log(await response.data.data);
    } catch (error) {
      // if(response.status === 20){

      // }
      console.log(error);
    }
  };

  useEffect(() => {
    searchProductAPI();
  }, [searchText]);

  const handleClick = async (data) => {
    navigate("/productDetail", {
      state: {
          data: data,
      },
  });
  }

  return (
    <>
    <Box className="text-white mt-20 px-8 bg-[#191919]">
        {/* <Box>
            <Box>
                <select>
                    <option> Inverter ACS</option>
                    <option> Split ACS</option>
                    <option> Inverter ACS</option>
                    <option> Inverter ACS</option>
                    <option> Inverter ACS</option>
                    <option> Inverter ACS</option>
                    <option> Inverter ACS</option>
                    <option> Inverter ACS</option>
                </select>
            </Box>
        </Box> */}
      <Box>
        <h1 className="text-xl font-bold">Results for {searchText}</h1>
        <Box className="">
          <Box className="flex flex-wrap">
            {searchProduct.map((data) => (
              <Box
                key={data.name}
                className="bg-black h-[430px] text-white rounded-xl py-4 px-2 w-[30%] m-2"
                onClick={() => handleClick(data)}
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
    </Box>
    </>
  );
}

export default SearchPage;
