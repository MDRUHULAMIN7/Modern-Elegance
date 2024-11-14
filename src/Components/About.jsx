import { useState } from "react";

const About = () => {
  const slides = [
    {
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731549470/about1_egnxwt.png",
      number: 1,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731549807/about2_mhm152.png",
      number: 2,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731549470/about1_egnxwt.png",
      number: 3,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731549807/about2_mhm152.png",
      number: 4,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];

  const borderPercentage = ((currentSlide + 1) / slides.length) * 100;

  console.log(borderPercentage, current)

  return (
    <section className="my-20  h-[637px]">
  
      <div>
        <h1 className="text-center text-4xl font-medium">About us</h1>
        <p className="text-center text-base mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="md:px-64 px-14 md:flex pt-8">
        <div className="w-full md:w-2/3">
          <div className="relative">
            <div className="absolute h-[488px]">
              <img src={current.image} alt="About Slide" />
            </div>

            <div className="absolute left-[61.8%]">
              <div className="relative mx-auto">
                {/* Circular Border */}
                <div
  className="absolute w-[248px] h-[248px] border-2 top-[11.4%] rounded-full"
  style={{
  
    borderColor: `conic-gradient(#000000 75%, #ECECEC 0%) 1`,
  }}
></div>



                <div className="w-[156px] h-[323px] bg-[#EA4715] ml-12">
                  <div className="relative">
                    <div className="flex flex-col justify-center items-center text-white pt-24 w-16 mx-auto">
                      <p className="text-center text-8xl font-extralight">
                        {current.number}
                      </p>
                      <span className="text-xs">/ Four</span>
                    </div>

                    <button
                      onClick={handleNextSlide}
                      className="absolute top-2/3 left-14"
                    >
                      <img
                        className="h-4 w-12"
                        src="https://res.cloudinary.com/dpomtzref/image/upload/v1731570541/arrow-right.png"
                        alt="Next"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-4 md:mt-[200px] space-y-6">
          <h5 className="text-xl">{current.title}</h5>
          <p className="text-sm">{current.description}</p>
          <button className="px-8 py-4 bg-[#000000] uppercase text-white text-xs rounded-sm transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
