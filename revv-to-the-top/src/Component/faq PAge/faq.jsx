import { Box } from "@chakra-ui/react"
import { HomeNavbar } from "../../Navbars/HomeNavbarDetails/homenavbar"
import { FaqDetail } from "./faqDetail"
import { Navbarr } from "./faqNavbar"

function Faq(){
    return (
        <Box>   
            <Navbarr/>
            <FaqDetail />
        </Box>
    )
}


export {Faq}