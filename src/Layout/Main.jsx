
import { Outlet } from "react-router-dom";








const Main = () => {
    return (
        <div className="">

            
         <p>header</p>
            <Outlet></Outlet>
            <p>footer</p>
            
        </div>
    );
};

export default Main;