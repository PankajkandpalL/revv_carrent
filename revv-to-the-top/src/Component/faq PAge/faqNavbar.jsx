import { Box, Button, Divider, Heading, Image, Input, InputGroup, InputRightElement, useDisclosure } from "@chakra-ui/react";
import styles from '../../Navbars/HomeNavbarDetails/homenavbar.module.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useContext } from "react";
import { mainContext } from "../../Context/MainContext";
import { ViewIcon, ViewOffIcon,ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Icon } from "../../Component/ForHome/icon";
import { NavLink } from "react-router-dom";

function Navbarr(){

    let { styleBool,city,toggleForm,handleToggleForm,showPass,handleShowPass,handleSignUpInput,postSignUpData,loading,handleLogInInput,checkLogInData,logInData,logInUsername,forUserName } = useContext(mainContext)
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
        <Box position={"fixed"} boxShadow="xs" bg="white" w="100%" zIndex={"9999"} height={"60px"} px="190px" >   
            <Box  h="100%" display={"flex"} justifyContent={"space-between"} alignItems="center" >
                <Box position={"relative"} height={"100%"} w="130px" >
                    <NavLink to="/"><Image src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" marginTop={"5px"} /></NavLink>
                    <Heading position={"absolute"} fontSize="12px" top={"40px"} left="25px" >Sanitised. Safe</Heading>
                </Box>
                <Box height={"100%"} display="flex" alignItems={"center"} w={styleBool ? "680px" : "1050px" } gap="40px">
                   <Button variant="outline" ><Image src="https://www.revv.co.in/imgs/hyundai_logo.svg" cursor="pointer" ></Image></Button>
                   <Button variant="outline" ><Image src="https://www.revv.co.in/imgs/mahindra_logo.svg" cursor="pointer" ></Image></Button>
                   {
                    styleBool
                    ?
                    <Box id={styles.faqdiv} fontFamily={"Poppins"} px="10px" >
                    FAQs
                    </Box>
                    :
                    <>
                        <Box as="p" id={styles.faqdiv} fontSize="16px" fontWeight={"bold"} fontFamily="sans-serif" px="10px" >
                            How it works
                        </Box>
                        <Box as="p" id={styles.faqdiv} fontSize="16px" fontWeight={"bold"} fontFamily="sans-serif"  px="10px" >
                           Subscribe vs Buy
                        </Box>
                        <Box id={styles.faqdiv} fontFamily={"Poppins"} px="10px" >
                            FAQs
                        </Box>
                    </>
                   }
                    {
                        !forUserName
                        ?
                    <Box>
                    <Button id={styles.logbutton} onClick={onOpen} leftIcon={<Image src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg" />} colorScheme={"black"} variant='ghost'>
                        Login or Signup
                    </Button>
                    {
                        !toggleForm
                        ?
                        <Modal motionPreset='slideInBottom' boxShadow={"2xl"} size="xs" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                            <ModalContent>
                                <ModalHeader textAlign={"center"} >Login</ModalHeader>
                                <ModalCloseButton />
                                    <ModalBody>
                                        
                                        <Input name="email" onChange={(e)=>handleLogInInput(e)} variant='flushed' placeholder="Enter Your Email" />
                                        <InputGroup>
                                            <Input name="password" onChange={(e)=>handleLogInInput(e)} type={showPass ? "text" : "password"} variant='flushed' marginTop={"20px"} placeholder="Enter Password" />
                                            <InputRightElement w="1rem" >
                                                {
                                                showPass
                                                ?
                                                <ViewOffIcon onClick={handleShowPass} position={"absolute"} top="35px" left="0px" />
                                                :
                                                <ViewIcon onClick={handleShowPass} position={"absolute"} top="35px" left="0px" /> 
                                                }
                                            </InputRightElement>  
                                        </InputGroup>                                    
                                        <Heading _hover={{cursor:"pointer"}} textAlign={"center"} marginTop="20px" color={"rgb(14 186 186)"} fontSize={"13px"} fontFamily={"Roboto,sans-serif"} >Send a new password to my email ID</Heading>
                                        <Box display={"flex"} justifyContent="center" alignItems={"center"} >
                                        <Button  marginTop="50px" bgColor={"rgb(14 186 186)"} color={"white"} _hover={{
                                            boxShadow : "dark-lg"
                                        }} width={"120px"} onClick={()=>{
                                            checkLogInData()
                                        }} >Login</Button>
                                        </Box>
                                        {/* SignUp here----------------------------- */}
                                        <Heading marginLeft={"-40px"} textAlign={"center"} position={"relative"} marginTop="20px" color={"black"} fontSize={"14px"} fontFamily={"Roboto,sans-serif"} >Don't have a account yet?&nbsp;&nbsp; <span onClick={handleToggleForm} style={{color:"rgb(14 186 186)",position:"absolute",cursor:"pointer"}} >Signup</span></Heading>
                                    </ModalBody>
                                    <Divider width={"90%"} margin="auto" color={"gray.700"} height={"4px"} marginTop={"13px"} />
                                <ModalFooter display={"block"} >
                                    <Box display={"flex"} marginTop="10px" justifyContent={"center"} alignItems={"center"} >
                                        <Image w="200px" src="https://www.revv.co.in/imgs/google-login.png" />
                                    </Box>
                                    <Box display={"flex"} marginTop="10px" justifyContent={"center"} alignItems={"center"} >
                                        <Image w="200px" src="https://www.revv.co.in/imgs/facebook-icon.png" />
                                    </Box>
                                </ModalFooter>
                            </ModalContent>
                    </Modal>
                        :
                        <Modal  motionPreset='slideInBottom' size={"xs"} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader textAlign={"center"} color="gray.600" fontSize={"16px"} >SIGN UP</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box display={"flex"} marginTop="10px" justifyContent={"center"} alignItems={"center"} >
                                        <Image w="200px" src="https://www.revv.co.in/imgs/google-login.png" />
                                    </Box>
                                    <Box display={"flex"} marginTop="10px" justifyContent={"center"} alignItems={"center"} >
                                        <Image w="200px" src="https://www.revv.co.in/imgs/facebook-icon.png" />
                                    </Box>
                                    <Input name="email" onChange={(e)=>handleSignUpInput(e)} isRequired={true} type="email" variant='flushed'  marginLeft={"35px"} marginTop={"35px"} placeholder="Enter Email" w="200px" />
                                    <Box>
                                        <Heading fontSize={"10px"} marginTop={"8px"} color="red" textAlign="center" > *Please enter valid email id </Heading>
                                    </Box>
                                    <InputGroup>
                                        <Input name="password" onChange={(e)=>handleSignUpInput(e)} isRequired={true}  variant='flushed'  type={showPass ? "text" : "password"} marginLeft={"35px"} marginTop={"15px"} placeholder="Enter Password" w="200px" />
                                        <InputRightElement w="1rem" >
                                            {
                                            showPass
                                            ?
                                            <ViewOffIcon onClick={handleShowPass} position={"absolute"} top="25px" left="-35px" />
                                            :
                                             <ViewIcon onClick={handleShowPass} position={"absolute"} top="25px" left="-35px" /> 
                                            }
                                        </InputRightElement>
                                    </InputGroup>
                                    
                                </ModalBody>

                                <ModalFooter marginTop={"25px"} display={"flex"} justifyContent={"center"} alignItems="center" >
                                    <Box display={"flex"} justifyContent={"center"} alignItems="center" >
                                    <Button isLoading={loading} marginBottom={"18px"} marginTop="50px" bgColor={"rgb(14 186 186)"} color={"white"} _hover={{
                                            boxShadow : "dark-lg"
                                        }} width={"120px"} onClick={()=>{
                                           
                                            postSignUpData()
                                        }} >Proceed</Button>
                                    </Box>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    }
                    </Box>
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
        </>
    )
}

export {Navbarr}