import React from "react";
import { Link } from "react-router-dom";

const Countrylist = ({ dataList = [] }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {dataList?.map((item, index) => {
        return (
          <Link
            to={`/${item?.cca2}`}
            key={index}
            className="shadow-md bg-[--itemBg]"
          >
            <div>
              <div className="h-[200px]">
                <img src={item?.flags?.png} alt="" />
              </div>
              <div className="px-4 pt-4 pb-8">
                <h4>{item?.name?.common}</h4>
                <p>
                  <span className="font-semibold">Population: </span>
                  {item?.population}
                </p>
                <p>
                  <span className="font-semibold">Region: </span>
                  {item?.region}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>
                  {item?.capital?.join(", ")}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countrylist;
