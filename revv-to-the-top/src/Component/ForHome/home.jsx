import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { mainContext } from "../../Context/MainContext";
import { HomeNavbar } from "../../Navbars/HomeNavbarDetails/homenavbar";
import { HomeBody } from "./homebody";
import { SubsBody } from "./homebody2";
import { SlideForm } from "./slideForm";
import { SlideShoww } from "./slideShow";

function Home(){

    let { showSlideForm,styleBool } = useContext(mainContext)

    return (
        <Box>   
            <Box>
                <HomeNavbar/>
                <SlideShoww />
                    <Box position={"relative"} marginTop="60px" >
                        <SlideForm />
                    </Box>
            </Box>
            <Box>
                {
                    styleBool
                    ?
                    <HomeBody/>  
                    :
                    <SubsBody/>
                }              
            </Box>
        </Box>
    )
}

export {Home}