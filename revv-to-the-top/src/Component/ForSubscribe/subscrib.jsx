import { Box } from "@chakra-ui/react"
import { SubscribeNav } from "../../Navbars/Subsribenav.jsx/Subscribenav"
import { LeftSideDiv } from "./SubscribeCompos/subscribeLeftSideDiv"
import { SubRightSideDiv } from "./SubscribeCompos/subscribeRightSidediv"

function Subscribe(){
    return (
        <Box>
            <SubscribeNav />
             <Box h="5500px" px="200px" >
                <Box border={"1px"} paddingTop="80px" display={"flex"} w="100%" height={"2000px"} >
                    <LeftSideDiv/>
                    <SubRightSideDiv/>
                </Box>
             </Box>
        </Box>
    )
}

export {Subscribe}