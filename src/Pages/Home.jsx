import About from "../Components/About";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Branches from "../Components/Branches";

import Projects from "../Components/Project";

const Home=()=>{

    return(

        <section>
            <Banner></Banner>
            <About></About>

            <Projects></Projects>

            <Blog></Blog>

            <Branches></Branches>
        </section>
    )
}

export default Home;