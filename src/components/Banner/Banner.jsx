import { Box } from "@mui/material";
import "../Banner/Banner.css";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const bannerImage = [
  {
    id: 1,
    url: "./assests/Banner/banner1.webp",
  },
  {
    id: 2,
    url: "./assests/Banner/banner2.webp",
  },
  {
    id: 3,
    url: "./assests/Banner/banner3.webp",
  },
  {
    id: 4,
    url: "./assests/Banner/banner4.webp",
  },
  {
    id: 5,
    url: "./assests/Banner/banner5.webp",
  },
  {
    id: 6,
    url: "./assests/Banner/banner6.webp",
  },
  {
    id: 7,
    url: "./assests/Banner/banner7.webp",
  },
  {
    id: 8,
    url: "./assests/Banner/banner8.webp",
  },
];

function Banner() {
  const [current, setCurrent] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === bannerImage.length - 1 ? 1 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 1 ? bannerImage.length - 1 : current - 1);
  };

  return (
    <>
      <Box className="carousel mt-20"  
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}>
        <Box className="carouse_wrapper">
          {bannerImage.map((data) => (
            <box
              className={
                data.id == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img src={data.url} key={data.id} />
            </box>
          ))}

          <Box className="carousel_arrow_left" onClick={slideLeft}>
            {" "}
            <ArrowBackIosIcon />
          </Box>
          <Box className="carousel_arrow_right" onClick={slideRight}>
            <ArrowForwardIosIcon />
          </Box>

          <Box className="carousel_pagination">
            {bannerImage.map((data) => {
              return (
                <div
                  key={data.id}
                  className={
                    data.id == current
                      ? "pagination_dot pagination_dot-active"
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(data.id)}
                ></div>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Banner;
