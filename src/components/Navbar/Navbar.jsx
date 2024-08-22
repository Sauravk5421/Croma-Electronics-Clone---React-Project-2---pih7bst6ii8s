import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginRegisterModal from "../LoginRegister/LoginRegisterModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userSelector } from "../../redux/users/userSlice";
import ProfilePage from "../LoginRegister/ProfilePage";
import "../Navbar/Navbar.css";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cartSlice";
import MenuList from "../MenuList/MenuList";
import ChangePin from "../PinCodeBar/ChangePin";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loginpage, setLoginPage] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [openPinModal, setOpenPinModal] = useState(false);
  const [city, setCity] = useState("Mumbai");
  const [pin, setPin] = useState("79009");

  const navigate = useNavigate();
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;
  // console.log(user,"user")
  const cartItem = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  // console.log(city, pin, "oooo")
  const handleClick = async (searchText) => {
    navigate("/SearchPage", {
      state: {
        searchText: searchText,
      },
    });
  };

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleMenuModal = () => {
    setOpenMenuModal((prev) => !prev);
  };

  const handlePinModal = () => {
    setOpenPinModal((prev) => !prev);
  };

  function UpdatedCityPin(upCity, upPin){
    setCity(upCity);
    setPin(upPin);
  }

  const personHandleClick = () => {
    if (user) {
      navigate("/profilePage");
    } else {
      handleModal();
    }
  };

  // console.log(searchText);
  return (
    <>
      <Box className="fixed top-0 left-0 z-40 bg-black text-white h-[100px] md:h-20 navbar-menu w-full">
        <Box className="flex justify-between items-center">
          <div className="items-center justify-between min-w-full flex mt-5 px-6">
            <Box class="order-wrap-menu show-on-desktop menu-heading flex md:hidden cursor-pointer" onClick={handleMenuModal}>
              <span class="menu-icon-hamb">
                <svg width="24px" height="13px" viewBox="0 0 24 13">
                  <title>Hamburger Menu</title>
                  <g
                    id="Header-Navigation-Journey"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                  >
                    <g
                      id="01_Header-and-Navigation"
                      transform="translate(-232.000000, -33.000000)"
                      stroke="#FFFFFF"
                    >
                      <g
                        id="Group-24"
                        transform="translate(0.000000, -1.000000)"
                      >
                        <g
                          id="Group-53"
                          transform="translate(228.000000, 24.000000)"
                        >
                          <g
                            id="Group-4"
                            transform="translate(4.000000, 10.000000)"
                          >
                            <line
                              x1="0.5"
                              y1="0.5"
                              x2="23.5"
                              y2="0.5"
                              id="Line"
                            ></line>
                            <line
                              x1="0.5"
                              y1="6.5"
                              x2="23.5"
                              y2="6.5"
                              id="Line-Copy"
                            ></line>
                            <line
                              x1="0.5"
                              y1="12.5"
                              x2="23.5"
                              y2="12.5"
                              id="Line-Copy"
                            ></line>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              {/* <span> Menu</span> */}
            </Box>
            <div className="w-32 min-w-[128px]">
              <a class="" href="/">
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                  sizes="(min-width: 501px) 130px, (max-width: 500px) 75px"
                  alt="Logo"
                />
              </a>
            </div>

            <Box className="hidden md:block">
              <Box class="order-wrap-menu  show-on-desktop menu-heading flex justify-center items-center gap-2 cursor-pointer" onClick={handleMenuModal}>
                <span class="menu-icon-hamb">
                  <svg width="24px" height="13px" viewBox="0 0 24 13">
                    <title>Hamburger Menu</title>
                    <g
                      id="Header-Navigation-Journey"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                    >
                      <g
                        id="01_Header-and-Navigation"
                        transform="translate(-232.000000, -33.000000)"
                        stroke="#FFFFFF"
                      >
                        <g
                          id="Group-24"
                          transform="translate(0.000000, -1.000000)"
                        >
                          <g
                            id="Group-53"
                            transform="translate(228.000000, 24.000000)"
                          >
                            <g
                              id="Group-4"
                              transform="translate(4.000000, 10.000000)"
                            >
                              <line
                                x1="0.5"
                                y1="0.5"
                                x2="23.5"
                                y2="0.5"
                                id="Line"
                              ></line>
                              <line
                                x1="0.5"
                                y1="6.5"
                                x2="23.5"
                                y2="6.5"
                                id="Line-Copy"
                              ></line>
                              <line
                                x1="0.5"
                                y1="12.5"
                                x2="23.5"
                                y2="12.5"
                                id="Line-Copy"
                              ></line>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span> Menu</span>
              </Box>
            </Box>
            <Box className="hidden md:block  w-[40%]">
              <Box className="searchBox flex justify-center items-center  ">
                <input
                  value={searchText}
                  type="text"
                  className="p-1.5 rounded-md text-black w-[100%]"
                  placeholder="what are you looking for?"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <Box onClick={() => handleClick(searchText)}>
                  <SearchIcon className="relative right-7 text-black" />
                </Box>
              </Box>
            </Box>

            <Box className="hidden md:block cursor-pointer" onClick={handlePinModal}>
              <Box className="flex">
                <LocationOnIcon />
                <p>{city}/{pin}</p>
              </Box>
            </Box>

            <Box className="cursor-pointer">
              <PersonIcon onClick={personHandleClick} />
            </Box>
            {openModal && (
              <LoginRegisterModal
                open={openModal}
                isUpdatePassword={isUpdatePassword}
                setIsUpdatePassword={setIsUpdatePassword}
                handleModal={handleModal}
                loginpage={loginpage}
                setLoginPage={setLoginPage}
                
              />
            )}

            {openMenuModal && (
              <MenuList
                open={openMenuModal}
                handleMenuModal = {handleMenuModal}
              />
            )}

            {openPinModal && (
              <ChangePin
                open={openPinModal}
                handlePinModal = {handlePinModal}
                UpdatedCityPin = {UpdatedCityPin}
              />
            )}  

            <Box>
              <Link to="/cartPage"><ShoppingCartIcon/><span className="cartNum">{cartItem.length}</span></Link>
              {/* <ShoppingCartIcon /> */}
            </Box>
          </div>
        </Box>
        <Box className="searchBox flex justify-center items-center md:hidden mt-2 ml-6">
          <input
            value={searchText}
            type="text"
            className="p-1.5 rounded-md text-black w-[100%]"
            placeholder="what are you looking for?"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Box onClick={() => handleClick(searchText)}>
            <SearchIcon className="relative right-7 text-black" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
