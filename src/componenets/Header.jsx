import { GiNinjaStar } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <div>
        <nav className="p-5 m-1">
          <div className="flex gap-80 ">
            <div className="flex">
              {" "}
              <div className="mt-1">
                <GiNinjaStar />
              </div>
              <h4 className="font-bold">Positivus</h4>
            </div>
            <div>
              <ul className="flex gap-10 ml-28">
                <li>
                  {" "}
                  <a href="">About Us</a>
                </li>
                <li>
                  {" "}
                  <a href="">Services</a>
                </li>
                <li>
                  {" "}
                  <a href="">Use cases</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Pricing</a>
                </li>
                <li>
                  {" "}
                  <a href="">Blog</a>
                </li>
                <div className="bg-[#35e941e6] w-[130px] h-[30px] rounded-md text-white text-center tracking-normal justify-center">
                  <button> Request a Quote</button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      ;
    </div>
  );
};

export default Header;
