
import { Outlet } from "react-router-dom";








const Main = () => {
    return (
        <div className="mt-2 p-1">

            
         <p>header</p>
            <Outlet></Outlet>
            <p>footer</p>
            
        </div>
    );
};

export default Main;