import { Box, Button, Divider, Heading, Image, Input, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { mainContext } from "../../Context/MainContext";
import { TriangleDownIcon,UpDownIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Icon } from "./icon";
  

const activeStyle = {
    padding : "10px",
    color : "black",
    background : "white",
    boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px" ,
    borderRadius : "10px",
    cursor : "pointer"
}

const inActive = {
    padding : "10px",
    color : "white",
    cursor : "pointer"
}

let buttons = ["Mumbai", "Hydrabad", "Bangalore", "Delhi-NCR", "Chennai", "Pune"]

function SlideForm(){

    let { handleCity,city,showSlideForm,handleStyleBool,styleBool } = useContext(mainContext)

    const { isOpen, onOpen, onClose } = useDisclosure() 

    return(
        <Box p="40px 50px" boxShadow="lg" h="490px" w="600px" borderRadius={"12px"} bg="white" marginTop="-535px" marginLeft={"200px"} >
            <Box h="100%" >
                <Box borderRadius={"10px"} height="78px" bg="#49a6ba" color={"whitesmoke"} display="flex" >
                    <Box w="50%" p="8px 10px">
                        <div onClick={()=>{
                            handleStyleBool(true)
                        }} style={styleBool ? activeStyle : inActive } >
                            <Heading fontWeight={"bolder"} fontSize={"20px"} fontFamily="sans-serif" textAlign={"center"} >
                                Rentals
                            </Heading>
                            <Heading textAlign={"center"} fontSize={"13px"} fontFamily="sans-serif">
                                For hours {"&"} days
                            </Heading>
                        </div>
                        {
                            styleBool ? <TriangleDownIcon fontSize={"20px"} marginTop="-20px" /> : <></>
                        }
                    </Box>
                    <Box w="50%" p="8px 10px">
                        <div onClick={()=>{
                            handleStyleBool(false)
                        }} style={styleBool ? inActive : activeStyle} >
                            <Heading fontWeight={"bolder"} fontSize={"20px"} fontFamily="sans-serif" textAlign={"center"} >
                                Subscriptions
                            </Heading>
                            <Heading textAlign={"center"} fontSize={"13px"} fontFamily="sans-serif">
                                For months {"&"} years
                            </Heading>
                        </div>
                        {
                            styleBool ? <></> : <TriangleDownIcon fontSize={"20px"} marginTop="-20px" />
                        }
                    </Box>
                </Box>
                <Box p="12px" h="330px"  >
                        <Box display="flex" marginTop={"25px"} justifyContent={"center"} alignItems="center" >
                            {
                                styleBool
                                ?
                                <Image placeholder="Start Time" height={"40px"} src="https://www.revv.co.in/imgs/logo-rentals.svg" />
                                :
                                <Image placeholder="End Time" height={"40px"} src="https://www.revv.co.in/assets/subscription/brandLogo/subscription_web.png" />
                            }
                        </Box>
                        <Box display="flex"  marginTop={"5px"}  justifyContent={"center"} alignItems="center" >
                            <Box color={"gray.700"} fontSize="22px">Car {styleBool ? "Rental" : "Subscriptions" } in {city}</Box>
                        </Box>

                        {/* -------------------------------------Location Here------------------------------ */}

                        <Box marginTop={"20px"} >
                            {
                                styleBool 
                                ? 
                                <>
                                    <Button h="50px" border={"1px solid gray"} borderTopLeftRadius={"18px"} fontSize="25px" py="30px" borderBottomRadius="0px" borderTopRightRadius="18px" w="398px" onClick={onOpen} colorScheme='black' variant="outline" leftIcon={<Icon />}>
                                        {city}
                                    </Button>
                                    <Box display={"flex"} border={"1px solid black"} h="62px" margin={"auto"} borderBottomRadius="18px" w="398px" >
                                        <Input borderBottomRightRadius={"0px"} borderBottomLeftRadius="18px" borderTopRadius={"0px"} letterSpacing={"1000px"} type="date" h="100%" w="50%" border={"none"} />
                                        <Divider orientation='vertical' />
                                        <Input borderBottomRightRadius="18px" letterSpacing={"1000px"} borderTopRadius={"0px"} borderBottomLeftRadius="0px" type="date" h="100%" w="50%" border={"none"} />
                                    </Box>
                                </>
                                :
                                <Button h="50px" borderRadius={"18px"} fontSize="25px" py="30px" w="398px" onClick={onOpen} colorScheme='black' variant="outline" leftIcon={<Icon />}>
                                    {city}
                                </Button>
                            }
                             <Modal borderRadius="20px" isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader fontSize={"25px"} >Select City</ModalHeader>
                                <ModalCloseButton />
                                <Divider marginTop={"-10px"} />
                                <ModalBody>
                                    <Box p="10px" >
                                        <Box fontSize={"17px"} >
                                            Top Cities
                                        </Box>
                                        <Box w="95%" margin={"auto"} marginTop="15px">
                                            {
                                                buttons.map(el=>(
                                                    <Box textAlign={"left"} >
                                                        <Button lineHeight={"25px"} fontSize={"18px"} fontWeight="bold" p="10px" display={"flex"} onClick={()=>{
                                                            onClose()
                                                            handleCity(el)
                                                            }} alignItems="center" justifyContent={"left"} w="100%" _hover={{color:"#0ebaba",bg : "#e6f8f8"  }}  variant={"ghost"}>{el}</Button>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </ModalBody>

                                <ModalFooter>
                                </ModalFooter>
                                </ModalContent>
                             </Modal>
                        </Box>
                </Box>
            </Box>
        </Box>
       
    )
}

export {SlideForm}