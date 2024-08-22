import { Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../LoginRegister/Login.css'

function ProfilePage() {
  return (
    <>
      <Box className="p-5 md:mt-20 mt-24 bg-[#191919]">
        <Box className="cursor-pointer text-[24px] font-[500] text-white text-bold p-2">
          My Account
        </Box>
        <Box className="flex gap-4 flex-wrap justify-center ">
          <Box className="border text-white flex rounded-md p-4  items-center gap-3 min-w-[400px]">
            <Box className="text-md ">
                <AccountCircleIcon className="accountIcon"/>
            </Box>
            <Box >
              <h2 className="text-bold">My Profile</h2>
              <p className="text-sm">Edit your basic details</p>
            </Box>
          </Box>

          <Box className="border text-white flex rounded-md p-4 justify-center items-center gap-3  min-w-[400px]">
            <Box className="text-md">
              <div class="myProfile-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"></path>
                </svg>
              </div>
            </Box>
            <Box >
              <h2>My Orders</h2>
              <p>View,track,cancel orders, and buy again</p>
            </Box>
          </Box>

          <Box className="border text-white flex rounded-md p-4 justify-center items-center gap-3  min-w-[400px]">
            <Box className="text-md">
              <div class="myProfile-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"></path>
                </svg>
              </div>
            </Box>
            <Box >
              <h2>My Rewards</h2>
              <p>Exclusive offers and loyality rewards for you</p>
            </Box>
          </Box>

          <Box className="border text-white flex rounded-md p-4 justify-center items-center gap-3  min-w-[400px]">
            <Box className="text-md">
              <div class="myProfile-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"></path>
                </svg>
              </div>
            </Box>
            <Box >
              <h2>My Wishlist</h2>
              <p>Have a look at your favourite products</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProfilePage;
