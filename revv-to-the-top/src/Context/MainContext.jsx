import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { useRef } from "react";

export const mainContext = createContext();

function MainContextApi({children}){

    let Subref= useRef()
    let fref = useRef()
    let refff = useRef()
    let reff = useRef()
    let ref = useRef()
    let [ toggleForm,setToggleForm ] = useState(false)
    let [ showPass,setShowPass ] = useState(false)
    let [ signUpData,setSignUpData ] = useState({})
    let [ loading,setLoading ] = useState(false)
    let [ logInData,setLogInData ] = useState({})
    let [ idData,setIdData ] = useState({})
    let [ idBool,setIdBool ] = useState(false)
    let [ logInUsername,setLogInUserName ] = useState({})
    let [ forUserName,setForUserName ] = useState(false)
    let [ slideImages,setSlideImages ] = useState([
        {
          url: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_LT_BG_2.png',
          caption: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp'
        },
        {
          url: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_LT_BG_3.png',
          caption: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.png'
        },
        {
          url: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_BG_1.png',
          caption: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.png'
        },
      ])
      let [ showSlideForm,setShowSlideForm ] = useState(false)
      let [ styleBool,setStyleBool ] = useState(true)
      let [ secondSlideImages, setSecondSlideImages ] = useState([
        {
          url: 'http://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_BG_1.png',
          caption: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_Desktop_1_FG.png'
        },
        {
          url: 'http://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_LT_BG_2.png',
          caption: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_Desktop_2_FG.png'
        },
        {
          url: 'http://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_LT_BG_3.png',
          caption: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_Desktop_3_FG.png'
        },
      ])
      let [ city,setCity ] = useState("Hydrabad") 

      let [ expand,setExpand ] = useState(false)
      
    let featuredImages = [
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/Banner-Flat+500+off+blue.png",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png",
    "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_02-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg"
    ]

    let sanitized = [
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg",
    "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_04-min.jpg",
    ]

    let revvImages = [
    "https://i.postimg.cc/Njfzhnks/s1.png",
    "https://i.postimg.cc/dtW9CVGF/s2.png",
    "https://i.postimg.cc/jdWD8xGt/s3.png",
    "https://i.postimg.cc/Njfzhnks/s1.png"
    ]   

    let feedbackUrl = [
        "https://i.postimg.cc/KjKXFGbX/s2.png",
        "https://i.postimg.cc/rw26X2Yb/s3.png",
        "https://i.postimg.cc/3w3PNChF/s4.png",
        "https://i.postimg.cc/XJzhsRCs/s5.png",
        "https://i.postimg.cc/PfLrdh2r/s6.png",
        "https://i.postimg.cc/N0JBwPXH/s7.png",
    ]

    let SubImages = [ 
        "https://i.postimg.cc/t4XP0PXx/s1.png",
        "https://i.postimg.cc/LsGnsZMv/s2.png",
        "https://i.postimg.cc/j245vgnk/s3.png",
        "https://i.postimg.cc/tgn48CV6/s4.png",
        "https://i.postimg.cc/cChxfvPp/s5.png",
        "https://i.postimg.cc/D0xh8tXF/s6.png",
        "https://i.postimg.cc/rFD31065/s7.png",
    ] 


    let handleToggleForm = () =>{
        setToggleForm(!toggleForm)
    }

    let handleCity = (value) => {
        setCity(value)
    }

    let handleShowPass = () =>{
        setShowPass(!showPass)
    }

    let handleSignUpInput = (e) =>{
        
        let { name,value } = e.target;
        setSignUpData({
            ...signUpData,
            [name] : value
        })

    }

    let postSignUpDataAfterChecking = () =>{
        
        axios.post('https://revv-to-the-top.herokuapp.com/signUpData', signUpData)
        handleToggleForm()

    }
    

    let postSignUpData = () =>{

        var p = 0
        setLoading(true)
        axios.get("https://revv-to-the-top.herokuapp.com/signUpData").then((res)=>{
            for(var i=0;i<res.data.length;i++)
            {
                if(res.data[i].email===signUpData.email)
                {
                    p=1
                    break;
                }
            }
        })

        setTimeout(() => {
            if(p===1){
                setLoading(false)
                alert('User Already Exists')
            }
            else{
                setLoading(false)
                postSignUpDataAfterChecking()
            }
        }, 2000);
    }

    let handleLogInInput = (e) =>{

        let { name,value } = e.target;

        setLogInData({
            ...logInData,
            [name] : value
        })

    }

    useEffect(()=>{

        if(idBool)
        {
            setDataForUserName()
        }

    },[idBool])


    let setDataForUserName= () =>{
        axios.post('https://revv-to-the-top.herokuapp.com/logInData', {
                email : idData.email,
        }).then((res)=>{
            let temp = res.data.email;
            let s = ""
            for(var i=0;i<temp.length-10;i++)
            {   
                s+=temp[i]
            }
            setLogInUserName(s)
            setForUserName(true)
        })
        setIdBool(false)
        setShowSlideForm(true)
    }


    let checkLogInData = () =>{

        let p = 0;
        axios.get("https://revv-to-the-top.herokuapp.com/signUpData").then((res)=>{
            for(var i=0;i<res.data.length;i++)
            {
                if(res.data[i].email==logInData.email && res.data[i].password==logInData.password )
                {
                    p=1
                    setIdData(res.data[i])
                    break;
                }
                else if(res.data[i].email!=logInData.email && res.data[i].password==logInData.password )
                {
                    p=2
                    break;
                }
                else if(res.data[i].email==logInData.email && res.data[i].password!=logInData.password)
                {
                    p=3
                    break;
                }
                else if(res.data[i].email!=logInData.email && res.data[i].password!=logInData.password )
                {
                    p=0
                }
            }

            if(p==1)
            {
                alert('Log In Successful')
                setIdBool(true)
            }
            else if(p==2)
            {
                alert('Something is wrong with your email')
            }
            else if(p==3)
            {
                alert('Wrong Password')
            }
            else if(p==0)
            {
                alert('User does not exists, Sign Up First')
                handleToggleForm()
            }
        })
    }

    let handleStyleBool = (value) =>{
        setStyleBool(value)
    }

    let handleSlide = (value) =>{
        ref.current.scrollLeft+=value
    }
    
    let handleSlide1 = (value) =>{
        reff.current.scrollLeft+=value
    }

    let handleSlide2 = (value) =>{
        refff.current.scrollLeft+=value
    }

    let handleSlide3 = (value) =>{
        fref.current.scrollLeft+=value
    }

    let handleSlide6 = (value) =>{
        Subref.current.scrollLeft+=value
    }

    let handleExpand = () =>{
        setExpand(!expand)
    }

    return (<mainContext.Provider value = {{expand,handleExpand,handleSlide6,SubImages,Subref,fref,handleSlide3,feedbackUrl,featuredImages,sanitized,revvImages,refff,handleSlide2,handleSlide1,reff,handleSlide,ref,handleCity,city,secondSlideImages,handleStyleBool,styleBool,showSlideForm,slideImages,logInUsername,forUserName,checkLogInData,logInData,handleLogInInput,loading,postSignUpData,handleSignUpInput,showPass,handleShowPass,toggleForm,handleToggleForm}}>{children}</mainContext.Provider>)
}

export {MainContextApi}



