import { getGeocoding } from "app/apis";
import { useAppContext } from "app/context";
import React, { memo, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
const SearchTerm = () => {
  const { setLocation } = useAppContext();
  const [contryList, setContryList] = useState([]);
  const [isShowContryList, setIsShowContryList] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ cityName: "" });
  const cityName = searchParams.get("cityName");
  useEffect(() => {
    async function fetchApi() {
      const res = await getGeocoding(cityName);
      setContryList(res);
    }
    const debound = setTimeout(() => {
      cityName && fetchApi();
    }, 500);
    return () => clearTimeout(debound);
  }, [cityName]);

  return (
    <div className="relative">
      <div className="flex gap-2 items-center bg-[--itemBg] px-4 py-2 rounded]">
        <FaSearch />
        <input
          type="text"
          placeholder="Search location here"
          className="outline-none border-none bg-transparent w-full"
          value={cityName}
          onChange={(e) => {
            setSearchParams(
              (prev) => {
                prev.set("cityName", e.target.value);
                return prev;
              },
              { replace: true }
            );
          }}
          onBlur={() => setIsShowContryList(false)}
          onFocus={() => setIsShowContryList(true)}
        />
      </div>

      {isShowContryList && (
        <ul className="absolute top-full bg-[--itemBg] w-full shadow-md rounded overflow-hidden">
          {contryList.length > 0 ? (
            contryList.map((item, index) => {
              return (
                <li
                  onMouseDown={() => setLocation(item)}
                  key={index}
                  className="px-4 py-2 cursor-pointer flex items-center gap-4 hover:bg-white"
                >
                  <FaLocationArrow />
                  <div>
                    <p>
                      <span>{item?.name} </span>
                      {item?.state && (
                        <span className="text-[.75rem] text-[--textSoftColor]">
                          ({item?.state})
                        </span>
                      )}
                    </p>
                    <p className="text-[.75rem] text-[--textSoftColor]">
                      {item?.country}
                    </p>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="px-4 py-2 cursor-pointer flex items-center gap-4 hover:bg-white">
              Not Found Result
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default memo(SearchTerm);
