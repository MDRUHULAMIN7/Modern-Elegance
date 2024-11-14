const Projects = () => {
  return (
    <section className="bg-[#5C5C5C] h-[576px] my-10">
      <h1 className="text-base pt-20 pl-[218px] text-white uppercase">
        Projects We have done
      </h1>

      <div className="pt-10 px-44 md:flex gap-x-20">
        <div className="border-r-2 border-[#747474] pr-20 pl-10 relative">
          <img
            className="h-[350px] w-[280px] "
            src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584641/project1_nbsyto.png"
            alt=""
          />
          <h2 className="absolute bottom-6 left-0 text-white  text-3xl">
          Residential
          </h2>
        </div>

        <div className=" relative ">
          <img
            className="h-[350px] w-[280px]"
            src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584630/project2_wvnqms.png"
            alt=""
          />
          <h2 className="absolute bottom-6 -left-10 text-white  text-3xl">
          Commercial
          </h2>
        </div>
        <div className="border-l-2 border-[#747474] pl-20 relative">
          <img
            className="h-[350px] w-[280px]"
            src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584622/project3_uqh2ll.png"
            alt=""
          />
          <h2 className="absolute bottom-6 left-10 text-white  text-3xl">
          Duplex
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
