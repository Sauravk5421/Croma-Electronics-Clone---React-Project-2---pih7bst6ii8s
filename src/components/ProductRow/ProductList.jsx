import { Box } from "@mui/material";
import Product from "./Product";
import Brand from "../AvailableCategory/Brand";
import TataSticker from "../BankSticker/TataSticker";

function ProductList() {
  return (
    <Box>
      <Box className="pb-[32px] bg-[#191919]">
        <Product title={"Deals of the Day"} />
        <Product title={"Top Trending Deals"} />
        <Brand/>
        <Product title={"Deals on Mobile"} />
        {/* <Product title={"Deals on Refrigerators"}/>
        <Product title={"Deals on Audio"} />
        <Product title={"Deals on Kitchen Appliances"} />
        <Product title={"Deals on Laptop"} />
        <Product title={"Deals on Air Conditionars"} />
        <Product title={"Deals on Televisions"} />
        <Product title={"Deals on Washing Machines"} /> */}
        <TataSticker/>
      </Box>
    </Box>
  );
}

export default ProductList;
