import { Box } from "@mui/material";

const brandName = [
  {
    id: 1,
    url: "./assests/categoryBrand/apple.webp",
  },
  {
    id: 2,
    url: "./assests/categoryBrand/samsung.webp",
  },
  {
    id: 3,
    url: "./assests/categoryBrand/vivo.webp",
  },
  {
    id: 4,
    url: "./assests/categoryBrand/chroma.webp",
  },
  {
    id: 5,
    url: "./assests/categoryBrand/boat.webp",
  },
  {
    id: 6,
    url: "./assests/categoryBrand/lg.webp",
  },
  {
    id: 7,
    url: "./assests/categoryBrand/voltas.webp",
  },
  {
    id: 8,
    url: "./assests/categoryBrand/oneplus.webp",
  },
];
function Brand() {
  return (
    <>
      <Box>
        <Box className="p-5 text-white font-bold text-xl bg-[#191919]">
          Brands We Are Passionate About
        </Box>
        <Box className="flex justify-between px-5">
          {brandName.map((data) => (
            <img
              key={data.id}
              src={data.url}
              className="w-[10%] object-fill rounded-[10px] cursor-pointer"
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Brand;
