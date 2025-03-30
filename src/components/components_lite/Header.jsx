import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-red-600 font-medium">
            <span className="text-[#614232]">
              {" "}
              <PiBuildingOfficeBold />
            </span>{" "}
            A Unified Marketplace for Students
          </span>

          <h2 className="text-5xl font-bold">
            One Stop Solution<br />
            <span className="text-[#fc3409]">MarketPlace </span>&<span className="text-[#6A38C2]"> Study Hub</span>
          </h2>
          <p className="text-1.5xl">
          Buy, sell, or trade items, Access study materials,<br />
           and Earn money all in one place
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full  items-center gap-4 mx-auto ">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search items"
              className="outline-none border-none w-full"
            />
            <Button onClick={searchjobHandler} className=" rounded-r-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
