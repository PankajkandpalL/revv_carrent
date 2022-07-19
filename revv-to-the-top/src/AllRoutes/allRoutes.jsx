import { Route, Routes } from "react-router-dom";
import { Home } from "../Component/ForHome/home";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
        </Routes>
    )
}

export {AllRoutes}