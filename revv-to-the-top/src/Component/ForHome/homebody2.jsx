import { Box, Button, Center, Flex, Heading, Image, Spacer, Text, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { mainContext } from "../../Context/MainContext"
import {ChevronLeftIcon,ChevronRightIcon,MinusIcon,AddIcon} from '@chakra-ui/icons'
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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

function SubsBody(){

    let { handleSlide6,SubImages,Subref,reff,handleSlide1,sanitized,handleSlide3,fref,feedbackUrl } = useContext(mainContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box h="auto" bg="#f1f4f8"  >
            <Center>
            <Box borderRadius={"20px"} zIndex={"9"} bg="white" margin={"auto"} p="30px" marginTop="30px" boxShadow="md" w="1150px" h="250px" >
                <Flex> 
                    <Heading color={"gray.600"} >Subscription Benefits</Heading>
                    <Spacer/>
                    <Box>
                        <Button variant={"ghost"} onClick={()=>handleSlide6(-420)} colorScheme="none" marginRight="-30px" fontSize={"30px"} ><ChevronLeftIcon/></Button>
                        <Button variant={"ghost"} onClick={()=>handleSlide6(+420)} colorScheme="none" fontSize={"30px"} ><ChevronRightIcon/></Button>
                    </Box>
                </Flex>
                <div ref={Subref} id={styles.slider6} >
                    {
                        SubImages.map((el)=>(
                            <Image h="130px" borderRadius={"12px"} src={el} />
                        ))
                    }
                </div>
            </Box>
            </Center>
            <Box h="340px" display={"flex"} boxShadow={"md"} w="1140px" px="35px" py="22px" borderRadius={"10px"} margin="auto" marginTop={"30px"} bg="white">
                    <Box w="50%" >
                        <Heading fontSize={"22px"} textAlign="left" marginTop={"20px"} >
                            What is Revv Subscription?
                        </Heading>
                        <Text marginTop={"15px"} fontSize="20px" textAlign={"left"} color="gray.400" >
                            It’s a different way of owning a car, without any down payment or car loan. Your monthly fee covers insurance, service & maintenance. Plus, there are no long term commitments - you can return, extend or buy-out the car when you want. And all this at a price cheaper than an EMI!
                        </Text>
                        <Button marginTop={"20px"} marginLeft={"-400px"} colorScheme={"teal"} variant="outline" >Know More</Button>
                    </Box>
                    <Box borderRadius="10px" p="8px" w="50%" >
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KccvwVosjcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" autoplay allowfullscreen></iframe>
                    </Box>
            </Box>
            <Box  margin="auto" boxShadow={"md"} bg="white" marginTop={"30px"} h="320px" borderRadius={"20px"} p="20px" w="1140px" >
                <Flex > 
                    <Heading color={"gray.600"} >Sanitized {"&"} safe cars</Heading>
                    <Spacer/>
                    <Box>
                        <Button variant="ghost" onClick={()=>handleSlide1(-420)} fontSize={"30px"} ><ChevronLeftIcon/></Button>
                        <Button variant={"ghost"} onClick={()=>handleSlide1(+420)} fontSize={"30px"} ><ChevronRightIcon/></Button>
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
            <Box h="auto" py="40px" px="200px" marginTop={"50px"} bg="linear-gradient(180deg,#fff 41%,#f2f2f2)">
                    <Box h="auto" marginTop={"40px"}  w="100%" >
                        <Box>
                            <Heading textAlign={"left"} >FAQs</Heading>
                        </Box>
                        <Box  marginTop={"30px"} >
                        <Accordion allowMultiple>
                            <AccordionItem p="30px">
                                {({ isExpanded }) => (
                                <> 
                                    <h2>
                                    <AccordionButton>
                                
                                    <Box marginRight={"20px"} >
                                        {isExpanded ? (
                                            <MinusIcon color="teal" fontSize='22px' />
                                            ) : (
                                            <AddIcon color="teal" fontSize='22px' />
                                            )}
                                    </Box>
                                        <Heading flex='1' fontWeight={"500"} lineHeight="1.5" fontSize="20px" marginleft="20px" textAlign='left'>
                                            When I use a car subscription, what are my liabilities in case of damage/ accident?
                                        </Heading>
                                
                                    
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel px={"60px"} textAlign={"left"} pb={4}>
                                    In case of Revv car subscription your car will be covered by comprehensive insurance, to take care of damage cases. On every case of damage, your liability would be limited to the difference between the costs incurred to repair the damage and the proceeds from insurance claim with maximum liability limited to INR 10,000. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby you could be liable for all damages irrespective of whether or not we are able to claim insurance in such cases.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                            <AccordionItem  p="30px" >
                                {({ isExpanded }) => (
                                <> 
                                    <h2>
                                    <AccordionButton>
                                
                                    <Box marginRight={"20px"} >
                                        {isExpanded ? (
                                            <MinusIcon color="teal" fontSize='22px' />
                                            ) : (
                                            <AddIcon color="teal" fontSize='22px' />
                                            )}
                                    </Box>
                                        <Heading flex='1' fontWeight={"500"} lineHeight="1.5" fontSize="20px" marginleft="20px" textAlign='left'>
                                        I reside in Hyderabad and I have the Revv Subscription, can I end my subscription early, or choose to keep the car longer?
                                        </Heading>
                                
                                    
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel px={"60px"}  textAlign={"left"} pb={4}>
                                    Yes, you can extend the car subscription anytime at normal prices or chose to return the car anytime by just paying the fee difference. This benefit is available in Hyderabad as well as other cities within India.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                            <AccordionItem  p="30px" >
                                {({ isExpanded }) => (
                                <> 
                                    <h2>
                                    <AccordionButton>
                                
                                    <Box marginRight={"20px"} >
                                        {isExpanded ? (
                                            <MinusIcon color="teal" fontSize='22px' />
                                            ) : (
                                            <AddIcon color="teal" fontSize='22px' />
                                            )}
                                    </Box>
                                        <Heading flex='1' fontWeight={"500"} lineHeight="1.5" fontSize="20px" marginleft="20px" textAlign='left'>
                                        Is car subscription available in Hyderabad and are there any restrictions on what can I use the car for?
                                        </Heading>
                                
                                    
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel px={"60px"}  textAlign={"left"} pb={4}>
                                    It is very easy to get a car subscription in Hyderabad and you can use the car for pretty much all the normal requirements. Abnormal usage (e.g., speed racing, towing/pushing/propelling, transportation of goods or people on commercial basis, transportation of large/heavy/hazardous items) is not allowed.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                            <AccordionItem  p="30px" >
                                {({ isExpanded }) => (
                                <> 
                                    <h2>
                                    <AccordionButton>
                                
                                    <Box marginRight={"20px"} >
                                        {isExpanded ? (
                                            <MinusIcon color="teal" fontSize='22px' />
                                            ) : (
                                            <AddIcon color="teal" fontSize='22px' />
                                            )}
                                    </Box>
                                        <Heading flex='1' fontWeight={"500"} lineHeight="1.5" fontSize="20px" marginleft="20px" textAlign='left'>
                                        What are the benefits of Car Subscription?
                                        </Heading>
                                
                                    
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel px={"60px"}  textAlign={"left"} pb={4}>
                                    Whether you are in Hyderabad or want to travel to other cities, car subscription is a good choice. No upfront payments such as down payment or road tax, flexibility of subscribing for min. 1 month and extending or returning anytime, insurance and maintenance included in monthly fees, 24X7 roadside assistance and hassle-free service & maintenance are just a few benefits of Revv subscription
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                            <AccordionItem  p="30px" >
                                {({ isExpanded }) => (
                                <> 
                                    <h2>
                                    <AccordionButton>
                                
                                    <Box marginRight={"20px"} >
                                        {isExpanded ? (
                                            <MinusIcon color="teal" fontSize='22px' />
                                            ) : (
                                            <AddIcon color="teal" fontSize='22px' />
                                            )}
                                    </Box>
                                        <Heading flex='1' fontWeight={"500"} lineHeight="1.5" fontSize="20px" marginleft="20px" textAlign='left'>
                                        I am in Hyderabad, what will be the car registration type and whose name will it be registered in?
                                        </Heading>
                                
                                    
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel px={"60px"}  textAlign={"left"} pb={4}>
                                    When you have a car subscription from Revv, the car will be registered as a premium commercial vehicle (black plate) with an All India permit and can be driven in Hyderabad or anywhere within India without any problem. It will be registered in the name of Revv (PrimeMover Mobility Technologies Pvt. Ltd.) or its supply partners.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                    </Accordion>
                        </Box>
                    </Box>
            </Box>
            <Box  margin="auto" marginTop={"30px"} h="420px" w="1140px" >
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
            <Box margin={"auto"} borderRadius="15px" w="1140px" bg="white" h="385px" display={"flex"} marginTop={"70px"} >
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
            <Box  margin="auto" marginTop={"60px"} h="240px" w="1140px" >
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
    )
}

export {SubsBody}