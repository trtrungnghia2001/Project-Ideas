import React, { useEffect, useMemo, useState } from "react";
import Countrylist from "components/Countrylist";
import SearchTerm from "components/SearchTerm";
import { useSearchParams } from "react-router-dom";
import SelectTerm from "components/SelectTerm";
import { regionList } from "app/containt";
import { useAppContext } from "app/context";

const HomePage = () => {
  const { setIsLoading } = useAppContext();
  const [countryList, setCountryList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    filter: "all",
  });

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true)
        const res = await fetch(`https://restcountries.com/v3.1/all`).then(
          (res) => res.json()
        );
        setCountryList(res);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, []);

  const filter = searchParams.get("filter") || "all";
  const search = searchParams.get("search") || "";

  const result_search_filter = () => {
    return countryList.filter((item) => {
      if (filter?.toLowerCase() === "all".toLowerCase()) {
        return (
          item?.name?.common?.toLowerCase().includes(search?.toLowerCase()) ||
          item?.capital?.some((item) =>
            item?.toLowerCase().includes(search?.toLowerCase())
          )
        );
      } else {
        return (
          filter?.toLowerCase() === item?.region?.toLowerCase() &&
          (item?.name?.common?.toLowerCase().includes(search?.toLowerCase()) ||
            item?.capital?.some((item) =>
              item?.toLowerCase()?.includes(search?.toLowerCase())
            ))
        );
      }
    });
  };

  return (
    <div className="text-[.875rem]">
      <div className="mb-8 flex items-center justify-between flex-col gap-4 sm:flex-row">
        <SearchTerm
          placeholder="Search for a country or captial..."
          value={searchParams.get("search") || ""}
          onChange={(e) => {
            setSearchParams(
              (prev) => {
                prev.set("search", e.target.value);
                return prev;
              },
              { replace: true }
            );
          }}
        />

        <SelectTerm
          value={searchParams.get("filter") || "all"}
          options={regionList}
          onChange={(e) => {
            setSearchParams(
              (prev) => {
                prev.set("filter", e?.target?.value);
                return prev;
              },
              { replace: true }
            );
          }}
        />
      </div>

      <Countrylist dataList={result_search_filter()} />
    </div>
  );
};

export default HomePage;
