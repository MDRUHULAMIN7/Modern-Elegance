
import { Outlet } from "react-router-dom";
import Header from "../Pages/shared/Header";








const Main = () => {
    return (
        <div className="">

            
        <Header></Header>
            <Outlet></Outlet>
            <p>footer</p>
            
        </div>
    );
};

export default Main;