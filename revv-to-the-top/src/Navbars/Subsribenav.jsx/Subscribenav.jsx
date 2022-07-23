import { Avatar, Box, Button, Heading, Image } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, ChevronDownIcon, WarningIcon } from '@chakra-ui/icons'
import styles from '../HomeNavbarDetails/homenavbar.module.css'
import { useContext } from "react"
import { mainContext } from "../../Context/MainContext"

function SubscribeNav(){

    let { forUserName,logInUsername } = useContext(mainContext)
    
    return (
        <Box position={"fixed"} boxShadow="xs" bg="white" w="100%" zIndex={"9999"} height={"60px"} px="190px" >
            <Box  h="100%" display={"flex"} justifyContent={"space-between"} alignItems="center" >
                <Box position={"relative"} height={"100%"} w="130px" >
                    <Image src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" marginTop={"5px"} />
                    <Heading position={"absolute"} fontSize="12px" top={"40px"} left="25px" >Sanitised. Safe</Heading>
                </Box>
                <Box w="450px" display={"flex"} justifyContent={"space-between"} alignItems="center" >
                <Button leftIcon={<PhoneIcon />} colorScheme='blue' variant='outline'>
                    Call us
                </Button>
                <Box id={styles.faqdiv} fontFamily={"Poppins"} px="10px" >
                            FAQs
                </Box>
                {
                    !forUserName
                ?
                <Button leftIcon={<Image src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg" />} colorScheme={"black"} variant='ghost'>
                        Login or Signup
                </Button >
                :
                <Box position={"relative"} >
                        {
                            JSON.stringify(logInUsername)===JSON.stringify({})
                            ?
                            "Loading..."
                            :
                            <Heading cursor={"pointer"} fontSize={"15px"} >
                                <Avatar bg='teal.500' w="20px" h="20px" position={"absolute"} left="-25px" />
                                {
                                    logInUsername 
                                }
                                <Box position="absolute" top="-12px" right={"-30px"} fontSize="28px" ><ChevronDownIcon/></Box>
                            </Heading>
                        }
                </Box>
                }
            </Box>
                </Box>
            </Box>
    )
}

export {SubscribeNav}