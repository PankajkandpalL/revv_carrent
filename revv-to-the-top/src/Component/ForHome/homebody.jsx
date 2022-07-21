import { Box, Button, Flex, Heading, Image, Spacer, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { mainContext } from "../../Context/MainContext";
import styles from './slider.module.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function HomeBody(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    let { handleSlide,ref,handleSlide1,reff,refff,handleSlide2,featuredImages,sanitized,revvImages,fref,handleSlide3,feedbackUrl } = useContext(mainContext)

    return (
        <>

        <Box h="auto" bg="#f1f4f8" padding="20px" >
            <Box  margin="auto" marginTop={"150px"} h="240px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >Featured</Heading>
                    <Spacer/>
                    <Box>
                        <Button disabled={ref.current===0} onClick={()=>handleSlide(-420)} fontSize={"20px"} >{"<"}</Button>
                        <Button onClick={()=>handleSlide(+420)} fontSize={"20px"} >{">"}</Button>
                    </Box>
                </Flex>
                <div ref={ref} id={styles.slider} >
                    {
                        featuredImages.map((el)=>(
                            <Image borderRadius={"12px"} src={el} />
                        ))
                    }
                </div>
            </Box>
            <Box  margin="auto" marginTop={"150px"} h="240px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >Sanitized {"&"} safe cars</Heading>
                    <Spacer/>
                    <Box>
                        <Button disabled={ref.current===0} onClick={()=>handleSlide1(-420)} fontSize={"20px"} >{"<"}</Button>
                        <Button onClick={()=>handleSlide1(+420)} fontSize={"20px"} >{">"}</Button>
                    </Box>
                </Flex>
                <div ref={reff} id={styles.slider1} >
                    {
                        sanitized.map((el,i)=>(
                            i===0
                            ?
                            <>
                                <Image onClick={onOpen} borderRadius={"12px"} cursor="pointer" src={el} />
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent marginLeft={"-500px"} height={"0px"} >
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <iframe style={{position:"absolute"}} width="860px" height="515px" src="https://www.youtube.com/embed/8I2A7HQfzwk" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen " autoplay={true} allowfullscreen={true}></iframe>
                                    </ModalBody>
                                    </ModalContent>
                                </Modal>
                            </>
                            :
                            <Image borderRadius={"12px"} src={el} />
                        ))
                    }
                </div>
            </Box>
            <Box  margin="auto" marginTop={"150px"} h="240px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >Why Revv?</Heading>
                    <Spacer/>
                    <Box>
                        <Button disabled={ref.current===0} onClick={()=>handleSlide2(-420)} fontSize={"20px"} >{"<"}</Button>
                        <Button onClick={()=>handleSlide2(+420)} fontSize={"20px"} >{">"}</Button>
                    </Box>
                </Flex>
                <div ref={refff} id={styles.slider} >
                    {
                        revvImages.map((el)=>(
                            <Image h="150px" borderRadius={"12px"} src={el} />
                        ))
                    }
                </div>
            </Box>
            <Box  margin="auto" marginTop={"90px"} h="240px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >FAQs</Heading>
                    <Spacer/>
                    <Box>
                        <Button colorScheme={"teal"} variant={"link"} fontSize={"20px"} >{"View All"}</Button>
                    </Box>
                </Flex>
                <Box>
                    <Image marginTop={"30px"} w='1310px' h='100%' src="https://i.postimg.cc/438F3DBX/s1.png" /> 
                </Box>
            </Box>
            <Box  margin="auto" marginTop={"300px"} h="420px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >Happy Customers</Heading>
                    <Spacer/>
                    <Box>
                        <Button onClick={()=>handleSlide3(-420)} fontSize={"20px"} >{"<"}</Button>
                        <Button onClick={()=>handleSlide3(+420)} fontSize={"20px"} >{">"}</Button>
                    </Box>
                </Flex>
                <div ref={fref} id={styles.slider5} >
                    {
                        feedbackUrl.map((el)=>(
                            <Image h={"350px"} w="350px" borderRadius={"12px"} src={el} />
                        ))
                    }
                </div>
            </Box>
            <Box margin={"auto"} borderRadius="15px" w="1140px" bg="white" h="385px" display={"flex"} marginTop={"130px"} >
                    <Box w="50%" >
                        <Heading color="gray.300" marginTop={"110px"} >
                            Download the Revv App
                        </Heading>
                        <Box h="100px" w="70%" margin={"auto"} display="flex" alignItems={"center"} marginTop="20px" justifyContent="space-between" >
                            <Image w="50%" src={"https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/app_store.webp"} />
                            <Image w="50%" src={"https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/google_play.webp"} />
                        </Box>
                    </Box>
                    <Box w="50%" >
                        <Image marginLeft={"-15px"} marginTop={"39px"} src="http://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/xapp_preview_desk.png.pagespeed.ic.SlqPBPQ6An.png" />
                    </Box>
            </Box>
            <Box  margin="auto" marginTop={"100px"} h="240px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >Our journey so far</Heading>
                </Flex>
                <Box>
                    <Image marginTop={"25px"} src="https://i.postimg.cc/KY0K1N6P/s8.png" /> 
                </Box>
            </Box>
            <Box  margin="auto" marginTop={"140px"} h="240px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >Our Investors</Heading>
                </Flex>
                <Box>
                    <Image marginTop={"25px"} src="https://i.postimg.cc/hjxJPdBg/s9.png" /> 
                </Box>
            </Box>
            <Box margin="auto" marginTop={"140px"} h="auto" w="1140px">
                <Image src="https://i.postimg.cc/kXkgD5Tg/s11.png" />
            </Box>
            <Box margin="auto" marginTop={"40px"} h="auto" w="1140px">
                <Image src="https://i.postimg.cc/k4rQc9MJ/s110.png" />
            </Box>
        </Box>


        </>
    )
}

export {HomeBody}

