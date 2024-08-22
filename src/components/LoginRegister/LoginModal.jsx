import { Box, Modal } from "@mui/material";
import { useState } from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { createUser, userSelector } from "../../redux/users/userSlice";


function LoginModal({ open, handleModal, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;
  console.log(user);


  const [isError, setIsError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const emailOnchange = (inputEmail) => {
    // console.log(validator.isEmail(inputEmail));
    if (validator.isEmail(inputEmail)) {
      setIsError((prev) => ({
        ...prev,
        email: "",
      }));
    } else {
      setIsError((prev) => ({
        ...prev,
        email: "Enter Valid Email",
      }));
    }
    setEmail(inputEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
      username: username,
      email:email,
      password:password
    }))
  }
  

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex justify-center items-center">
      <Box className="bg-[#292929] text-center h-[75%]">
        <Box className=" flex justify-end items-end px-3">
          <button onClick={onClose} className="font-bold text-2xl">
            X
          </button>
        </Box>
        {isSignUp ? (
          <Box className="px-8 text-sm">
            <Box>
              <Box className="border border-gray-200 flex justify-evenly items-center p-2 rounded-md mb-4">
                <p>SignUp</p>
              </Box>
              <p className="mb-4">
                Please enter your Username, Email ID and Password
              </p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                className="p-2 mb-4 rounded-md w-[100%] bg-neutral-900"
              />
             <Box>
                 <input
                type="email"
                value={email}
                onChange={(e) => emailOnchange(e.target.value)}
                placeholder="Enter your Email ID"
                className="p-2 mb-4 rounded-md w-[100%] bg-neutral-900"
              />
             </Box>
              <Box
                className={`text-[#f22922] text-sm mb-2 ${
                  isError.email === "" ? "hidden" : "block"
                } `}
              >
                {isError.email}
              </Box>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="p-2 mb-4 rounded-md w-[100%] bg-neutral-900"
              />
              <button className="p-2 bg-green-600 w-[100%] rounded-md mb-4 "  onClick={(e) => handleSubmit(e)}>
                Continue
              </button>
              <button
                className="p-2 bg-green-600 w-[100%] rounded-md"
                onClick={() => setIsSignUp(false)}
              >
                Login
              </button>
            </Box>
          </Box>
        ) : (
          <Box className="px-8 text-sm">
            <Box>
              <Box className="border border-gray-200 flex justify-evenly items-center p-2 rounded-md mb-4">
                <p>Login</p>
              </Box>
              <Box>
                <p className="mb-4">Please enter your Email Id or phone number</p>
              </Box>
              <Box>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => emailOnchange(e.target.value)}
                  placeholder="Enter your Email ID"
                  className="p-2 mb-4 rounded-md w-[100%] bg-neutral-900"
                />
              </Box>
              <Box
                className={`text-[#f22922] text-sm mb-2 ${
                  isError.email === "" ? "hidden" : "block"
                } `}
              >
                {isError.email}
              </Box>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="p-2 mb-4 rounded-md w-[100%] bg-neutral-900"
              />
              <Box className="flex justify-center items-center mb-4 gap-2">
                <input type="checkbox" />
                <p className="">Keep me signed in</p>
              </Box>
              <p className="mb-4 text-xs">
                By continuing you agree to our <span>Terms of Use</span> &{" "}
                <span>Privacy Policy</span>
              </p>
              <button className="p-2 bg-green-600 w-[100%] rounded-md mb-4"  onClick={(e) => handleSubmit(e)}>
                Continue
              </button>
              <button
                className="p-2 bg-green-600 w-[100%] rounded-md"
                onClick={() => setIsSignUp(true)}
              >
                SignUp
              </button>
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default LoginModal;
