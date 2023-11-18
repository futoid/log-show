'use client';

import { FaSearch, FaFilter } from "react-icons/fa";
import LogCard from "./components/logCard";

type totalResultType = {
    total: number
    totalShowed: number
}

type PageNumType = {
    pageNumber: number
}

const TotalResult = ({
    total,
    totalShowed
}: totalResultType) => {
    return (
        <div className=" flex justify-end p-5">
            <p className=" font-serif"> showing <span className=" text-xl font-bold">{totalShowed}</span>  of <span className="font-bold">{total}</span> <span className=" text-neutral-300 font-serif">results</span></p>
        </div>
    );
}


const PageNumber = ({
    pageNumber
}: PageNumType) => {
    const prev = "<- prev";
    const next = "next ->";
    return (
        <div className=" flex items-center gap-10 justify-center p-5">
            <a href="" className=" text-neutral-400">{prev}</a>
            <div className=" p-2 bg-neutral-600 rounded-lg">
                {pageNumber}
            </div>
            <a href="" className=" text-neutral-400">{next}</a>
        </div>
    );
}

const Results = () => {
    const metaData = {
        "parentResourceId": "asdasfs3423"
    }
    return (
        <div className=" flex flex-col px-1 lg:px-36 py-6 gap-8 bg-neutral-900">
            <LogCard level="error" message="Failed to connect to db" resourceId="1" timestamp="24/09/2023 11:05" traceId="131kacsa" spanId="09fjao3" commit="3rn321rc" metadata={metaData} />
            <LogCard level="error" message="Failed to connect to db" resourceId="1" timestamp="24/09/2023 11:05" traceId="131kacsa" spanId="09fjao3" commit="3rn321rc" metadata={metaData} />
            <LogCard level="error" message="Failed to connect to db" resourceId="1" timestamp="24/09/2023 11:05" traceId="131kacsa" spanId="09fjao3" commit="3rn321rc" metadata={metaData} />
            <LogCard level="error" message="Failed to connect to db" resourceId="1" timestamp="24/09/2023 11:05" traceId="131kacsa" spanId="09fjao3" commit="3rn321rc" metadata={metaData} />
            <LogCard level="error" message="Failed to connect to db" resourceId="1" timestamp="24/09/2023 11:05" traceId="131kacsa" spanId="09fjao3" commit="3rn321rc" metadata={metaData} />
        </div>
    )
}

const SearchBar = () => {
    // const selectClickHandler = (event: any) => {
    //     console.log(event.target.value)
    // }
    return (
        <div>
            <div className=" p-10 lg:p-4 lg:pt-16 lg:flex lg:items-center lg:justify-center lg:gap-10" >
                <div className="flex justify-around gap-5">
                    <input type="text" placeholder="Search Text" className=" p-3 bg-neutral-900 outline-none rounded-md lg:pr-56" />
                    <div>
                        <select id="countries" className="block bg-neutral-900 p-3 outline-none rounded-md text-md transition-transform lg:pr-20">
                            <option defaultValue={"All"}>Level</option>
                            <option value="Error" className="">Error</option>
                        </select>
                    </div>
                </div>
                <div className=" flex justify-end gap-4 pt-4 lg:pt-0 lg:gap-12">
                    <div className=" flex gap-2 bg-neutral-600 p-3 rounded-lg items-center">
                        <FaSearch />
                        <h1>
                            Search
                        </h1>
                    </div>
                    <div className=" flex bg-neutral-600 p-3 rounded-lg items-center">
                        <FaFilter />
                    </div>
                </div>
            </div>
            <TotalResult totalShowed={25} total={1000} />
            <Results />
            <PageNumber pageNumber={10} />
        </div>
    );
}

export default SearchBar;