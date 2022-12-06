"use client";

import { ReactNode, useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  type LinkProps = {
    children: ReactNode;
  };
  const Link = ({ children }: LinkProps) => (
    <li>
      <a className="my-1 text-gray-800  md:mx-4 md:my-0 font-bold" href="#">
        {children}
      </a>
    </li>
  );

  return (
    <nav className="bg-white px-6 py-4 shadow">
      <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <div>
            <a className="text-gray-800 text-xl font-bold md:text-2xl" href="#">
              SSR <span className="text-blue-500">UI</span>
            </a>
          </div>
          <div>
            <button
              type="button"
              onClick={handleIsOpen}
              title="Open Menu"
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`flex-col flex md:flex-row md:-mx-4 ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <Link>Home</Link>
          <Link>Blog</Link>
          <Link> About us</Link>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
