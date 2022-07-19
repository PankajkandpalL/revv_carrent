import { Box } from "@chakra-ui/react";
import { HomeNavbar } from "../../Navbars/HomeNavbarDetails/homenavbar";
import { SlideForm } from "./slideForm";
import { SlideShoww } from "./slideShow";

function Home(){
    return (
        <Box>   
            <Box>
                <HomeNavbar/>
                <SlideShoww />
                <Box position={"relative"} >
                    <SlideForm />
                </Box>
            </Box>
        </Box>
    )
}

export {Home}