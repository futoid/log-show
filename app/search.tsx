'use client';
import { FaSearch, FaFilter } from "react-icons/fa";
import LogCard from "./components/logCard";
import { useEffect, useState } from "react";
import axios from "axios";

type logDetailsType = {
    level: string
    message: string
    resourceId: string
    timestamp: string
    traceId: string
    spanId: string
    commit: string
    metadata: {
        parentResourceId: string
    }
}
type totalResultType = {
    total: number
    totalShowed: number
}

type PageNumberType = {
    pageNumber: number,
    prevFunction: Function,
    nextFunction: Function
}

type logTableType = {
    skip: number
    limit: number
}

const TotalResult = ({
    total,
    totalShowed
}: totalResultType) => {
    return (
        <div className=" flex justify-end p-5">
            <p className=" font-serif"> showing <span className=" text-xl font-bold">{totalShowed}</span>  of <span className="font-bold">{!total ? "loading.." : total}</span> <span className=" text-neutral-300 font-serif">results</span></p>
        </div>
    );
}


const PageNumber = ({
    pageNumber,
    prevFunction,
    nextFunction
}: PageNumberType) => {
    const prev = "<- prev";
    const next = "next ->";
    return (
        <div className=" flex items-center gap-10 justify-center lg:p-5">
            <a className=" text-neutral-400 hover:cursor-pointer" onClick={() => prevFunction()}>{prev}</a>
            <div className=" p-2 bg-neutral-600 rounded-lg">
                {pageNumber}
            </div>
            <a className=" text-neutral-400 hover:cursor-pointer" onClick={() => nextFunction()}>{next}</a>
        </div>
    );
}

const LogsTable = (prop: logTableType) => {
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        const url = `http://localhost:3000/api/v1/logs?skip=${prop.skip}&limit=${prop.limit}`;
        axios.get(url)
            .then((response) => {
                setLogs(response.data.data)
            })
            .catch((e) => console.log(e))
    }, [prop.skip])

    return (
        logs.map((log: logDetailsType) => {

            return (
                <>
                    < LogCard level={log.level} message={log.message} resourceId={log.resourceId} timestamp={log.timestamp} traceId={log.traceId} spanId={log.spanId} commit={log.commit} metadata={log.metadata} />
                </>
            )
        })
    )
}

const Results = () => {
    const limitNumber = 4;
    const [skip, setSkip] = useState(0)
    const [pageNumber, setPageNumber] = useState(1);
    const [showed, setShowed] = useState(limitNumber);
    const [totalLogs, setTotalLogs] = useState(0);

    useEffect(() => {
        const url = `http://localhost:3000/api/v1/log/length`;
        axios.get(url)
            .then((response) => {
                setTotalLogs(response.data.data)
            })
            .catch((e) => console.log(e))
    }, [])

    const onClickPrevButton = () => {
        if (skip - limitNumber <= 0) {
            setSkip(0);
            setPageNumber(1);
        }
        else {
            setSkip(prev => prev - limitNumber);
            setPageNumber(skip / limitNumber);
        }
        (showed - limitNumber > 0) ? setShowed(showed - limitNumber) : setShowed(limitNumber);
    }

    const onClickNextButton = () => {
        setSkip(prev => prev + limitNumber);
        setPageNumber(skip / limitNumber + 2);
        setShowed(showed + limitNumber);
    }
    return (
        <div className="flex flex-col px-1 lg:px-36 py-6 gap-8 bg-neutral-900">
            <TotalResult totalShowed={showed} total={totalLogs} />
            <LogsTable limit={limitNumber} skip={skip} />
            <PageNumber pageNumber={pageNumber} prevFunction={onClickPrevButton} nextFunction={onClickNextButton} />
        </div>
    )
}

const SearchBar = () => {
    // const selectClickHandler = (event: any) => {
    //     console.log(event.target.value)
    // }
    return (
        <div>
            <div className=" pt-10 px-10 lg:p-4 lg:pt-16 lg:flex lg:items-center lg:justify-center lg:gap-10" >
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
            <Results />
        </div>
    );
}

export default SearchBar;