import { useState } from "react"
const Search = ({handleSearchInput}) => {
    return (
        <div className="mt-5">
            <form className="flex items-center">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input type="text" className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none" placeholder="Search something. . ." onChange={(e) => handleSearchInput(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default Search;