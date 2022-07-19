import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const mainContext = createContext();

function MainContextApi({children}){

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

    let handleToggleForm = () =>{
        setToggleForm(!toggleForm)
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

    return (<mainContext.Provider value = {{slideImages,logInUsername,forUserName,checkLogInData,logInData,handleLogInInput,loading,postSignUpData,handleSignUpInput,showPass,handleShowPass,toggleForm,handleToggleForm}}>{children}</mainContext.Provider>)
}

export {MainContextApi}