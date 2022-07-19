import { Box, Image } from "@chakra-ui/react";
import React from 'react';
import { useContext } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { mainContext } from "../../Context/MainContext";


function SlideShoww(){

    let { slideImages } = useContext(mainContext)

    return(
        <Box h="580px" >
        <div className="slide-container">
        <Slide>
         {slideImages.map((el, i)=> (
            <Box position={"relative"} className="each-slide" key={i}>
                <Image h="580px" src={el.url} />
                <Image position={"absolute"} top={i===2 ? "132px" : "80px"} right={ i===2 ? "325px" : "280px"} zIndex={"999"} h={ i===2 ? "261px" : "401px" }  w={ i===2 ? "425px" : "483px"} src={el.caption} />
            </Box>
          ))} 
        </Slide>
      </div>
        </Box>
    )
}

export {SlideShoww}