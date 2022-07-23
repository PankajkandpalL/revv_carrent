import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Heading, Text, useDisclosure } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon,ChevronRightIcon,ChevronDownIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Icon } from "../../ForHome/icon"
import { mainContext } from "../../../Context/MainContext"
import { useContext } from "react"
import { Query } from "./querysearch"
import { Filter } from "./filter"

function LeftSideDiv(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    let { handleCity,city,showSlideForm,handleStyleBool,styleBool,buttons } = useContext(mainContext)

    return (
        <Box border={"1px"} w="320px" height={"800px"} >
            <Box>
                <Breadcrumb marginLeft={"0px"} display={"flex"} alignItems="left" fontSize={"13px"} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <NavLink to="/"><BreadcrumbLink href='#'>Home</BreadcrumbLink></NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <NavLink to="/"><BreadcrumbLink href='#'>Car Subscription</BreadcrumbLink></NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color={"teal"} href='#'>Explore Cars</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box>
                <Heading textAlign={"left"} marginTop="20px" color="gray" fontSize={"20px"}>Filter By</Heading>
            </Box>
            <Box marginTop={"30px"} >  
                <Text fontWeight={"bold"} fontSize="18px" textAlign={"left"} >City</Text>
            </Box>
            <Box marginTop={"-10px"} >
            <Button h="50px" fontSize="22px" py="30px" justifyContent={"space-between"} w="110%" marginLeft={"-16px"} borderBottomRadius={"0px"} borderColor="gray" border="none" borderTop="none" borderLeft={"none"} borderRight="none" marginTop={"20px"} onClick={onOpen} colorScheme='black' variant="outline" rightIcon={<ChevronDownIcon/>} >
                                    {city}
             </Button>
             <Box color={"blackAlpha.400"} w="99%" marginLeft="1px" border="1px" />
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
            <Box marginTop={"50px"} >
                    <Heading fontFamily={"sans-serif"} textAlign="left" fontSize={"18px"} >Search</Heading>
            </Box>

                {/* Query Searcher ↓ */}

            <Box>
                <Query />
            </Box>
            <Box>
            <Heading textAlign={"left"} marginTop="24px" color="black" fontWeight={"500"} fontSize={"18px"}>Price Range</Heading>
            </Box>

                {/* Filter Here ↓ */}
            
            <Box>
                 <Filter />
            </Box>

        </Box>  
    )
}
export {LeftSideDiv}