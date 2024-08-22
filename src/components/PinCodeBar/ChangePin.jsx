import React from "react";
import { useState } from "react";
import validator from "validator";
import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser, userSelector } from "../../redux/users/userSlice";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const ChangePin = ({ open, handlePinModal, onClose, UpdatedCityPin}) => {

    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');

    function handleCityChange(e){
        setCity(e.target.value);
    }
  
    function handlePinChange(e){
        setPin(e.target.value);
            }

    function handleCityChange(e){
        setCity(e.target.value);
    }

    let changePIN = () =>{
        console.log(city, pin, "pp")
        setPin('');
        setCity('');
        handlePinModal();
        UpdatedCityPin(city,pin)
        Swal.fire("Success", "Pin change successful", "success");
        
    }
  return (
    <>
      <Modal
        open={open}
        onClose={handlePinModal}
        className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex justify-center items-center "
      >
        <Box className="bg-[#292929] text-center w-[50%] h-[65%] text-white">
          <Box Box className=" flex justify-end items-end px-3">
            <button onClick={handlePinModal} className="font-bold text-2xl">
              X
            </button>
          </Box>
          <Box className="py-2 px-14">
            <Box className=" text-center">
              <h1 className="p-2">SELECT YOUR LOCATION</h1>
              <p className="text-sm p-2">To Check Products & Delivery Options available at your location</p>
            </Box>
            <Box>
                <input value={pin} placeholder="Enter Pincode" className="bg-black p-2 rounded-sm w-[100%] mb-3" type="number" name="number" onChange={handlePinChange}/>
            </Box>
            <Box>
                <input value={city} placeholder="Enter Location" className="bg-black p-2 rounded-sm w-[100%] mb-3" type="text" name="text" onChange={handleCityChange}/>
            </Box>
            <Box>
                <button onClick={changePIN} className="p-2 bg-green-600 w-[100%] rounded-sm" type="submit">Continue</button>
            </Box>
          </Box>
        </Box>
      </Modal>
      </>
  );
};

export default ChangePin;
