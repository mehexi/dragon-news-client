import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";

const SliderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-3xl text-gray-500 focus:outline-none"
        onClick={handleToggle}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-out"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform duration-300 ease-in"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
      >
        <div className="fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75">
          <div className="transform bg-white w-64 h-full overflow-y-auto p-4">
            {/* Your menu content goes here */}
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default SliderMenu;
