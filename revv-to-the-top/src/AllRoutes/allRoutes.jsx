import { Route, Routes } from "react-router-dom";
import { Faq } from "../Component/faq PAge/faq";
import { Home } from "../Component/ForHome/home";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/faq" element={<Faq/>} ></Route>
        </Routes>
    )
}

export {AllRoutes}