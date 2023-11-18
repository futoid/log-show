'use client';

import { FaSearch, FaFilter } from "react-icons/fa";
import LogCard from "./components/logCard";

const SearchBar = () => {
    const selectClickHandler = (event: any) => {
        console.log(event.target.value)
    }
    return (
        <div>

            <div className=" p-10 flex items-center justify-center gap-10">
                <input type="text" placeholder="Search Text" className=" p-3 bg-neutral-900 outline-none rounded-md pr-24" />
                <div>
                    <select id="countries" className="block bg-neutral-900 p-3 outline-none rounded-md text-md transition-transform pr-12" onChange={selectClickHandler}>
                        <option selected defaultValue={"All"}>Level</option>
                        <option value="Error" className="">Error</option>
                    </select>
                </div>
                <div className=" flex gap-2 bg-neutral-600 p-3 rounded-lg items-center">
                    <FaSearch />
                    <h1>
                        Search
                    </h1>
                </div>

                <div className=" bg-neutral-600 p-3 rounded-lg">
                    <FaFilter />
                </div>
            </div>
            <LogCard />
        </div>
    );
}

export default SearchBar;