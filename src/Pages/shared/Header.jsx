const Header = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center  border-b md:px-32 px-4">
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
            <p className="text-[13px] border-r p-4">Help centre</p>
        </div>
      </div>

      <div className="text-white flex justify-between pt-6 items-center md:px-32 px-4">
        <div>
            <p className="text-3xl font-medium">Logo</p>
        </div>
        <div>

            <ul className="flex justify-center text-[13px] items-center gap-x-10  font-light">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                
                <li><a href="#">Projects</a></li>
                <li><a href="#">Sustainability </a></li>
                <li><a href="#">More</a></li>
            </ul>
        </div>

        <div>
        <p className="flex justify-center gap-x-6 items-center">
            <img
              className="h-[16px]"
              src="https://res.cloudinary.com/dpomtzref/image/upload/v1731639027/Search_icda5o.png"
              alt=""
            />{" "}
            <p className="text-sm text-white font-medium ">Sign in</p>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
