import Banner from "../Banner/Banner";
import BankSticker from "../BankSticker/BankSticker";
import Category from "../AvailableCategory/Category";
import ProductList from "../ProductRow/ProductList";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <>
      <Box className="bg-[#191919]">
        <Banner />
        <Category />
        <BankSticker />
        <ProductList />
      </Box>
    </>
  );
}

export default HomePage;
