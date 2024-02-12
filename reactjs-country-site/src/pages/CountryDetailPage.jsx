import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useAppContext } from "app/context";

const CountryDetailPage = () => {
  const { setIsLoading } = useAppContext();
  const { id } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true)
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${id}`
        ).then((res) => res.json());
        setCountry(res[0]);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [id]);

  return (
    <div className="text-[1rem]">
      <Link
        to={"/"}
        className="px-6 py-1 shadow-md bg-[--itemBg] flex gap-2 items-center max-w-max"
      >
        <FaArrowLeft />
        Back
      </Link>
      <div className="mt-8 flex gap-8 flex-col md:flex-row md:items-center">
        <div className="w-full sm:max-w-[400px] m-auto">
          <img src={country?.flags?.png} alt={country?.flags?.alt} />
        </div>

        <div className="flex-1">
          <h3>{country?.name?.common}</h3>
          <div className="my-8 grid gap-x-4 grid-cols-1 sm:grid-cols-2">
            <p>
              <span className="font-semibold">NativeName: </span>
              {country?.name?.nativeName &&
                Object.values(country?.name?.nativeName)
                  ?.map((item) => item?.common)
                  .join(", ")}
            </p>
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {country?.tld?.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {country?.population}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {country?.currencies &&
                Object.values(country?.currencies)
                  ?.map((item) => item?.name + item?.symbol)
                  .join(", ")}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {country?.region}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {country?.languages &&
                Object.values(country?.languages)
                  ?.map((item) => item)
                  .join(", ")}
            </p>
            <p>
              <span className="font-semibold">Subregion: </span>
              {country?.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {country?.capital?.join(", ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            <span className="font-semibold">Border Countries: </span>
            {country?.borders?.map((item, index) => {
              return (
                <Link
                  to={`/${item}`}
                  key={index}
                  className="px-6 py-1 shadow-md inline-block bg-[--itemBg]"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
