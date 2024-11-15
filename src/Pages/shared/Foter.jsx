const Foter = () => {
  return (
    <section>
      <footer className="bg-black h-96 ">
        <div className="h-56 mx-auto pt-32 text-white w-full md:w-1/2 text-center  flex flex-col justify-center space-y-8">
          <h1 className="uppercase text-3xl font-medium">Let’s Contact</h1>
          <p className="opacity-70">
          Feugiat nisl pretium fusce id velit ut tortor pretium. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="px-6 md:px-8 py-3 mx-auto md:py-4 w-fit bg-[#EA4715] text-white text-xs md:text-sm uppercase rounded-sm transition">
            Let’s Contact
          </button>
        </div>
      </footer>
      <p
        className="text-center py-4 text-sm font-extralight text-[#2B2B2B]
"
      >
        Copyright @2022 | Notionhive
      </p>
    </section>
  );
};

export default Foter;
