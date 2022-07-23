import { Route, Routes } from "react-router-dom";
import { Home } from "../Component/ForHome/home";
import { Subscribe } from "../Component/ForSubscribe/subscrib";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/subscribe" element={<Subscribe />}></Route>
        </Routes>
    )
}

export {AllRoutes}