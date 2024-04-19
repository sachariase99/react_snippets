import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextModal } from "../../components";
import { TbBrandPagekit } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return isMenuOpen ? (
    <div className="fixed inset-y-0 left-0 flex flex-col bg-white shadow-lg w-64 duration-300 transition-all">
      <div className="w-full h-24 flex justify-center items-center text-3xl font-bold uppercase border-b-2 relative">
        <Link to="/">
          <h2>Snippets</h2>
        </Link>
        <MdOutlineKeyboardDoubleArrowLeft
          onClick={toggleMenu}
          className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400 uppercase m-1">Menu</p>
        <ul>
          <li
            onClick={openModal}
            className="flex items-center text-xl cursor-pointer hover:bg-slate-300 hover:text-blue-400"
          >
            <TbBrandPagekit className="mt-1 mr-4 text-3xl" /> Open Modal
          </li>
        </ul>
      </div>
      <TextModal isModalOpen={isModalOpen} setIsModalOpen={closeModal} />
    </div>
  ) : (
    <div
      className="fixed inset-y-0 left-0 flex flex-col bg-white shadow-lg w-16 h-full duration-300 transition-all"
    >
      <div className="w-full h-24 flex justify-center items-center text-3xl font-bold uppercase border-b-2 relative">
        <MdOutlineKeyboardDoubleArrowLeft
          onClick={toggleMenu}
          className="cursor-pointer rotate-180"
        />
      </div>
      <div>
        <ul className="py-4">
          <li
            onClick={openModal}
            className="flex items-center justify-center text-4xl cursor-pointer hover:bg-slate-300 hover:text-blue-400"
          >
            <TbBrandPagekit />
          </li>
        </ul>
      </div>
      <TextModal isModalOpen={isModalOpen} setIsModalOpen={closeModal} />
    </div>
  );
};

export default Navbar;
