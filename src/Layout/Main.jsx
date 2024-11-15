
import { Outlet } from "react-router-dom";
import Header from "../Pages/shared/Header";
import Foter from "../Pages/shared/Foter";








const Main = () => {
    return (
        <div className="">

            
        <Header></Header>
            <Outlet></Outlet>
            <Foter></Foter>
            
        </div>
    );
};

export default Main;