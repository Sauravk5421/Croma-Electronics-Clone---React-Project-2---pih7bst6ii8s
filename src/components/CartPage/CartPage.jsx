import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LoginRegisterModal from "../LoginRegister/LoginRegisterModal";

import {
  clearCart,
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
} from "../../redux/cart/cartSlice";

import { Link } from "react-router-dom";
import { removeToCart } from "../../redux/cart/cartSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CartPage/CartPage.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useNavigate } from "react-router-dom";
import { createUser, userSelector } from "../../redux/users/userSlice";


const CartPage = () => {

  const [openModal, setOpenModal] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [loginpage, setLoginPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;
  console.log(user,"kam")
  //   const totalQuantity = useSelector(selectCartTotalQuantity)
  console.log("Cart Items = ", cartItem);
  //   const [quantity, setQuantity] = useState(1);

  const handleRemoveToCart = (item) => {
    dispatch(removeToCart(item));
    toast.success("Item Removed from Cart", {
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

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };


  //   const minusItems = (quantity) =>{
  //     if(quantity>0){
  //         setQuantity((prev)=>prev-1);
  //         console.log(quantity)
  //     }
  //   }

  //   const addItems = (quantity) =>{
  //     setQuantity((prev)=>prev+1);
  //   }

  function checkOutHandler() {
    if(user){
      navigate("/CheckOutPage", {});
    }else{
      handleModal();
    }
  }

  return (
    <>
      <div class="cart-page">
        <ToastContainer />
        <div class="box p-5">
          <div class="heading-cart">YOUR CART</div>
          <div class="cart-wrapper">
            <div class="cart-items">
              {cartItem.length == 0 && (
                <>
                  <div class="empty-cart">
                    <img
                      src="./assests/logo/emptyCart.webp"
                      alt="empty-cart"
                      style={{ width: "300px", height: "300px" }}
                    />
                    <div
                      style={{
                        font: "18px",
                        fontWeight: 700,
                        margin: "20px",
                        textAlign: "center",
                      }}
                    >
                      <div>Oops! Your cart is empty</div>
                      <div
                        style={{
                          font: "15px",
                          color: "gray",
                          textAlign: "center",
                          padding: "10px 0px",
                        }}
                      >
                        Add to cart from your wishlist or{" "}
                        <a
                          class=""
                          href="/"
                          style={{ color: "rgb(3, 182, 149)" }}
                        >
                          Continue Shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {cartItem.map((item) => (
                <div class="cart-card">
                  <div>
                    <img
                      src={item.displayImage}
                      alt="cart-card"
                      class="image-cart"
                    />
                  </div>
                  <div class="name-section-cart">
                    <div className="line-clamp-2">{item.name}</div>
                    {/* <RemoveRoundedIcon onClick={()=>minusItems(quantity)}/>
                    <p>1</p>
                    <AddIcon onClick={()=>addItems(quantity)}/> */}
                    <Box sx={{ "& > legend": { mt: 2 } }}>
                      <Rating
                        className=""
                        name="half-rating-read"
                        value={item.ratings}
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

                    <div class="md:hidden">
                      <div class="price-cart">₹ {item.price}</div>
                      <div className="text-xs">(Incl.all Taxes)</div>
                    </div>

                    <div class="date-delivery mt-2">
                      <div>Standard Delivery </div>
                      <div>by 18 July 2024</div>
                    </div>
                    <div className="md:flex">
                      <button class="btn-cart mb-4">Move to WishList</button>
                      <button
                        class="btn-cart mb-4"
                        onClick={() => handleRemoveToCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div class="price-section-cart hidden md:block">
                    <div class="price-cart">₹ {item.price}</div>
                    <div
                      style={{
                        font: "14px",
                        paddingBottom: "6px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      (Incl.all Taxes)
                    </div>
                    <div style={{ margin: "6px 0px" }}>
                      <del>₹ {Number(item.price) + 3000}</del>
                      <div style={{ font: "12px", color: "gray" }}>
                        (Save ₹ 3,000.00)
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cartItem.length != 0 && (
              <>
                <div class="total-price">
                  <h3 style={{ marginBottom: "10px" }}>
                    Order Summary ({cartItem.length} items)
                  </h3>
                  <div class="order-summary">
                    <div>Original Price</div>
                    <div>₹ {totalPrice}</div>
                  </div>
                  <div class="order-summary">
                    <div>Savings</div>
                    <div>-₹ 0.00 </div>
                  </div>
                  <div class="order-summary">
                    <div>Delivery</div>
                    <div>Free</div>
                  </div>
                  <div class="order-summary">
                    <div>Total</div>
                    <div>₹ {totalPrice}</div>
                  </div>
                  <button class="check-out" onClick={checkOutHandler}>
                    Checkout
                  </button>
                </div>
              </>
            )}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
