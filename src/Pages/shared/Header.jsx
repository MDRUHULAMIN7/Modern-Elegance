const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center  border-b px-32">
        <div>
          <p className="flex justify-center gap-x-2 items-center">
            <img
              className="h-[16px]"
              src="https://res.cloudinary.com/dpomtzref/image/upload/v1731637895/phoneIcon_eyo6eu.png"
              alt=""
            />{" "}
            <p className="text-sm text-white font-medium"><span className="text-sm text-white font-extralight" > Call us:</span> 783 367 2678</p>
          </p>
        </div>

        <div className="flex justify-center items-center text-white">
            <p className="text-[13px] border-r p-4">Free brochure</p>
            <p className="text-[13px] border-r p-4">Free brochure</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
