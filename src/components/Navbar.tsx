import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Order", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const currentUser = false;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="avatarImg"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* dropdown */}
                {isDropdownOpen && (
                  <div>
                    <ul>
                      {navigation.map((item, index) => (
                        <li key={index}>
                          <Link to={item.href}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <HiOutlineShoppingCart className="size-6" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
