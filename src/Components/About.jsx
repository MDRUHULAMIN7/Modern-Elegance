const About = () => {
  return (
    <section className="my-20 border-2 border-blue-600 h-[637px]">
<div>      <h1 className="text-center text-4xl font-medium">About us</h1>
      <p className="text-center text-base mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation.
      </p></div>

      <div className="md:px-64 px-14 md:flex   pt-8">
        <div className="w-full md:w-2/3">
{/* kothin degine */}
       <div className="relative">
       <div className="absolute h-[488px]">
            <img src={'https://res.cloudinary.com/dpomtzref/image/upload/v1731549807/about2_mhm152.png'} alt="" />
        </div>
        <div className="absolute left-[61.8%]">
         <div className="relative mx-auto">
         <div className=" absolute px-20 border-2 w-[248px] h-[248px] top-[11.4%]  border-[#ECECEC] rounded-full">
    
         </div>
         <div className="  w-[156px] h-[323px] bg-[#EA4715] ml-12"   >
       

       </div>
         </div>
        </div>
       </div>
        
        
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-[200px] space-y-6">
          <h5 className="text-xl">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </h5>

          <p className="text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="px-8 py-4 bg-[#000000] uppercase text-white text-xs rounded-sm transition">
                Learn More
              </button>
        </div>
      </div>
    </section>
  );
};

export default About;
