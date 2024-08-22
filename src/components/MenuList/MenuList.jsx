import React from "react";
import { useState } from "react";
import validator from "validator";
import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser, userSelector } from "../../redux/users/userSlice";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const MenuList = ({ open, handleMenuModal, onClose }) => {
  const menuItems = ["Air Conditioners", "Headphones & Earphones", "Kitchen Appliances","Laptops", "Mobiles", "Refrigerators","Televisions","Washing Machines"];
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  function selectedItemHandler(item){
    setSelectedItem(item);
    navigate("/MenuProduct", {
        state: {
            item: item,
        },
    });
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleMenuModal}
        className="fixed md:mt-[70px] mt-[100px] md:ml-[18%]"
      >
        <Box className="bg-[#000000] w-[250px] text-white">
          <Box className="">
            <h1 className="text-bold text-xl mx-4">Shop by Category</h1>
            <Box className="rounded-md mb-2 text-sm">
              <ul>
                {menuItems.map((item, index) => (
                  <li className="px-4 py-2 hover:bg-green-400 bg rounded-md cursor-pointer" key={index} onClick={()=>selectedItemHandler(item)}>
                    {item}
                  </li>
                ))}
              </ul>
              {console.log(selectedItem, "uu")}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MenuList;
