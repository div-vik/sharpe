import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute top-0 bg-transparent h-28 z-10 w-full px-5 lg:px-24 xl:px-40 py-5 lg:py-10">
      <div className="flex justify-between items-center container mx-auto">
        <div className="">
          <Link className="flex justify-center items-center gap-2" to="/">
            <img className="w-8" src={logo} alt="logo" />
            <p>|</p>
            <p className="mt-[0.1rem]">Sharpe AI</p>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/transaction">Transaction</Link>
          <Link to="/data">Data</Link>
          {/* <p>Home</p>
          <p>Transaction</p>
          <p>Data</p> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
