const Projects = () => {
  return (
    <section className="bg-[#5C5C5C] py-16 mx-auto px-4 lg:px-24">
      <h1 className="text-base text-center lg:text-left text-white uppercase">
        Projects We Have Done
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-x-0 pt-12">
        {/* Card 1 */}
        <div className="group relative overflow-hidden cursor-pointer flex-1 max-w-[350px] mx-auto px-5 md:px-8 lg:px-10 border-r-2 border-[#747474]">
          <img
            className="w-full transition-transform duration-300 group-hover:scale-110"
            src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584641/project1_nbsyto.png"
            alt="Residential Project"
          />
          <h2 className="absolute bottom-6 left-4 text-white text-2xl md:text-3xl transition-opacity duration-300 group-hover:opacity-0">
            Residential
          </h2>
          {/* Hover State */}
          <div className="absolute inset-0 bg-[#393939] flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-1/2">
              <img
                className="h-full w-full"
                src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584641/project1_nbsyto.png"
                alt=""
              />
            </div>
            <div className="h-1/2 p-4">
              <h1 className="text-white text-xl">Residential</h1>
              <p className="mt-3 text-sm opacity-70 text-white">
              In hac habitasse platea dictumst quisque egestas.
              </p>
              <hr className="opacity-30 my-4 text-[#494949]" />
              <p className="text-xs opacity-70 text-white">928 367 3789</p>
            </div>
          </div>
        </div>

        {/* Card 2*/}
        <div className="group relative overflow-hidden cursor-pointer flex-1 max-w-[350px] mx-auto px-5 md:px-8 lg:px-10 border-r-2 border-[#747474]">
          <img
            className="w-full transition-transform duration-300 group-hover:scale-110"
            src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584630/project2_wvnqms.png"
            alt="Commercial Project"
          />
          <h2 className="absolute bottom-6 left-4 text-white text-2xl md:text-3xl transition-opacity duration-300 group-hover:opacity-0">
            Commercial
          </h2>
          {/* Hover State */}
          <div className="absolute inset-0 bg-[#393939] flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-1/2">
              <img
                className="h-full w-full"
                src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584630/project2_wvnqms.png"
                alt=""
              />
            </div>
            <div className="h-1/2 p-4">
              <h1 className="text-white text-xl">Commercial</h1>
              <p className="mt-3 text-sm opacity-70 text-white">
              Ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <hr className="opacity-30 my-4 text-[#494949]" />
              <p className="text-xs opacity-70 text-white">928 367 3789</p>
            </div>
          </div>
        </div>

        {/* Card 3  */}
        <div className="group relative overflow-hidden cursor-pointer flex-1 max-w-[350px] mx-auto px-5 md:px-8 lg:px-10">
          <img
            className="w-full transition-transform duration-300 group-hover:scale-110"
            src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584622/project3_uqh2ll.png"
            alt="Duplex Project"
          />
          <h2 className="absolute bottom-6 left-4 text-white text-2xl md:text-3xl transition-opacity duration-300 group-hover:opacity-0">
            Duplex
          </h2>
          {/* Hover State */}
          <div className="absolute inset-0 bg-[#393939] flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-1/2">
              <img
                className="h-full w-full"
                src="https://res.cloudinary.com/dpomtzref/image/upload/v1731584622/project3_uqh2ll.png"
                alt=""
              />
            </div>
            <div className="h-1/2 p-4">
              <h1 className="text-white text-xl">Duplex</h1>
              <p className="mt-3 text-sm opacity-70 text-white">
              Amet consectetur adipiscing elit duis tristique .
              </p>
              <hr className="opacity-30 my-4 text-[#494949]" />
              <p className="text-xs opacity-70 text-white">928 367 3789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
