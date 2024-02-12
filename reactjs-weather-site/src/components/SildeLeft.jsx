import { menuLink } from "app/containt";
import React, { memo } from "react";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useAppContext } from "app/context";

const SildeLeft = () => {
  const { setToggle } = useAppContext();
  const location = useLocation();
  return (
    <div className="relative">
      <button
        className="absolute top-4 right-4 xl:hidden"
        onClick={() => setToggle(false)}
      >
        <MdClose />
      </button>
      <Link
        to={"/"}
        className="flex items-center gap-4 text-[--blueColor]"
        onClick={() => setToggle(false)}
      >
        <BsCloudHaze2Fill className="icon-md" />
        <h2>Weather</h2>
      </Link>
      <ul className="mt-12 flex flex-col gap-8">
        {menuLink?.map((item, index) => {
          return (
            <li key={index} onClick={() => setToggle(false)}>
              <Link
                to={item.path}
                className={`capitalize flex gap-4 items-center hover:text-[--blueColor] ${
                  "/" + item.path === location.pathname && "text-[--blueColor]"
                }`}
              >
                <span className="icon">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(SildeLeft);
