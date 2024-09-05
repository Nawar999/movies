"use client";

import { BsList } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import SideMenu from "../components/SideMenu";
// import { useStore } from "zustand";

const Header = () => {
  // const setSideMenu = useStore((state) => state.update);
  // const sideMenu = useStore((state) => state.isOpen);
  // console.log(sideMenu);

  return (
    <div className="flex flex-row p-3 justify-between align-middle items-center">
      <div className="flex flex-row gap-6 items-center">
        <BsList color="white" size={35} />
        <div className="bg-orange-300 rounded-lg inline">
          <h1 className="p-2 text-2xl ">IMDb</h1>
        </div>
      </div>
      <CiSearch color="white" size={35} />
    </div>
  );
};

export default Header;
