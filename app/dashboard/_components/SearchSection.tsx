import { Search } from "lucide-react";
import React from "react";

function SearchSection({onSearchInput}: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-700 rounded-lg shadow-lg text-white mb-10 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">Browse all template</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-between items-center ">
        <div className="flex gap-2 items-center p-2 border rounded-b-md bg-white my-5 w-[50%] mx-auto">
          <Search className="text-primary" />

          <input
            type="text"
            placeholder="Search"
            onChange={(event=>(onSearchInput(event.target.value)))}
            className="bg-transparent outline-none w-full text-black"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
