import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useContext } from "react";
import { mainContext } from "../../Context/MainContext";

function FaqDetail(){

    let { expand,handleExpand } = useContext(mainContext)

    return (
        <Box h={"700px"} display="flex" gap="60px" paddingTop={'65px'} px="100px" >   
             <Box w="30%" >
                <Box h="50px" display={"flex"} justifyContent="center" alignItems={"center"} bg="gray.200" color="black" marginTop={"2px"} >
                    About Revv
                </Box>
                <Box h="50px" display={"flex"} justifyContent="center" alignItems={"center"} bg="gray.200" color="black" marginTop={"2px"} >
                    Your Bookings
                </Box>
                <Box h="50px" display={"flex"} justifyContent="center" alignItems={"center"} bg="gray.200" color="black" marginTop={"2px"} >
                    Payments {'&'} Refunds
                </Box>
                <Box h="50px" display={"flex"} justifyContent="center" alignItems={"center"} bg="gray.200" color="black" marginTop={"2px"} >
                    Your Tip
                </Box>
             </Box>
             <Box w="70%">
                <Flex>
                <Heading>About Revv</Heading>
                <Spacer/>
                <Heading cursor={"pointer"} onClick={handleExpand} fontSize={"22px"} marginTop="25px" marginBottom={"10px"} color={"teal.300"} >Expand All</Heading>
                </Flex>
                <Box>
                <Accordion defaultIndex={ expand ? [0,1,2,3,4,5,6,7,8,9,10,11,12] : [] } allowMultiple>
                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            What is Revv?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        Revv is a self drive car rental service that provides you with all the privacy, fun and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important thing - your drive! The doorstep drop and pick-up of cars is our standard way of serving you, and is available throughout the areas served by us. 
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Am I eligible to use Revv's services?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        To avail Revv's services, you must be at least 21 years old, and your driving license for "Light Motor Vehicles" must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Which are the areas where I can avail Revv's services?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        We are currently serving in Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, Chandigarh, Jaipur, Visakhapatnam, Mysore, Coimbatore, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati , Vijayawada, Bhubaneswar, Nagpur & Vadodara.
                        <br></br>
                        Delhi NCR : We are covering most parts of Delhi & Gurgaon and some parts of Noida & Ghaziabad.
                        <br></br>
                        Hyderabad, Bangalore, Mumbai, Pune, Jaipur, Chennai, Visakhapatnam, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati, Vijayawada, Bhubaneswar, Nagpur & Vadodara : We serve the main city and the airport area.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Am I eligible to use Revv's services?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        To avail Revv's services, you must be at least 21 years old, and your driving license for "Light Motor Vehicles" must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Is there a "Kilometres limit" to how much I can drive?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        This depends on the pricing plan that you select. If you go for the “Unlimited kms” pricing plans (available only without fuel, and only for bookings whose duration is more than 24 hours), there is absolutely no limit to the kilometres that you can drive, and you have complete flexibility of driving the car as much as you want. Revv it up! Other pricing plans have a "Kilometres limit", which varies based on the plan selected. You can still drive beyond the kilometres limit, but the additional kilometres clocked will attract an additional charge.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Are there restrictions on where I can travel?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        All of our cars are equipped with an All India Tourist Permit, so you are free to drive anywhere in the country. All India Tourist Permit means that the car is legally permitted to ply in any state in the country, after paying the inter-state taxes at the state borders. However, we do not permit taking Revv vehicles to Leh/Ladakh region, Kaza/Nako region and spiti valley. We also advise you to avoid bad terrains (especially in non- SUV cars) and areas affected by civil unrest.
                        <br></br>
                        lease note: Interstate taxes at the state borders are to be paid and borne by the customer. Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred during your trip will be billed to you in your invoice.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Do I have to bring the car back to the same location?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        No, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges.                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Can I book a one-way trip?                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        Yes, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges.                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Can I book for any duration of time?                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        For rentals, the minimum booking duration is 10 hours, and the maximum is upto 90 days.
                        <br></br>
                        If you need a car for longer period of time, please try Revv subscriptions, wherein you can subscribe to a car for minimum of 1 month and maximum of 36 months. Check out our
                        subscriptions
                        page for more details.                        
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            What is Peak Season? Are the prices different during Peak Season?                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        Peak season refers to festive periods of very high demand. Our hourly rental tariffs are different for weekdays (Mon-Fri), weekends (Sat-Sun) and the Peak Season. The dates and prices for the Peak Season are dynamically decided based on the demand.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            What kind of cars can I choose from?                            
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        We have a curated selection of cars, which includes block-buster models across segments such as SUVs, ultra-luxury cars, hatchbacks and sedans. We are constantly increasing our portfolio; so keep a close watch for your favourite car, just in case we don’t have it already.                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Am I eligible to use Revv's services?
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        To avail Revv's services, you must be at least 21 years old, and your driving license for "Light Motor Vehicles" must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.100"} marginBottom={"10px"} >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' fontWeight={"bold"} textAlign='left'>
                            Is Revv 24/7?                           
                            </Box>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color={"gray.400"} fontSize="15px" bg="gray.200" textAlign={"left"} pb={4}>
                        Yes, we are accessible 24x7. But as of now, we don’t allow bookings starting or ending between 12 midnight and 4 am.                        </AccordionPanel>
                    </AccordionItem>

                    </Accordion>
                </Box>
             </Box>
        </Box>
    )
}

export {FaqDetail}