import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Navbar() {
  let [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [menu, setMenu] = useState(false);
  return (
    <>
    <div className="flex justify-between w-full py-6 sm:py-10 px-3 sm:px-16" id="home">
      <div>
        <h1 className="font-Qwitcher Grypen text-4xl sm:text-6xl">Sumit 's Portfolio</h1>
      </div>
      <div className="flex items-center gap-10">
        <div className="hidden lg:flex">
          <Menu />
        </div>

        <div>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="dark:bg-zinc-600 bg-black text-white p-3 font-semibold rounded"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            className="flex flex-col  lg:hidden"
          >
            {menu?(<i class="ri-close-circle-line text-2xl"></i>):(<i class="ri-menu-add-fill text-2xl"></i>)}
            
          </button>
          
        </div>
      </div>
    </div>
    {menu && <Menu direction={"flex-col lg:hidden"} />}
    </>
  );
}

export default Navbar;
