import About from "../Components/About";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Projects from "../Components/Project";

const Home=()=>{

    return(

        <section>
            <Banner></Banner>
            <About></About>

            <Projects></Projects>

            <Blog></Blog>
        </section>
    )
}

export default Home;