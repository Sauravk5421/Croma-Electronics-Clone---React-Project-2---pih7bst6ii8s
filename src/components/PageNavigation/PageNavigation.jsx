import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function PageNavigation({title}){
    return (
        <>
            <Box className="p-2 font-light italic">
                <NavLink to="/">Home</NavLink>/{title}
            </Box>
        </>
    )
}

export default PageNavigation;