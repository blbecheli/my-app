'use client'
import { useState, useRef } from 'react';

const SearchBar = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const formRef = useRef(null);

    const handleSearch = () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            props.onsubmit(formData).catch((error: any) => {
                console.log(error);
            });
        }
    };

    const toggleSearch = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className="flex items-center">
            <div className="cursor-pointer" onClick={toggleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
                </svg>
            </div>
            <form ref={formRef} className={`ml-2 p-2 border border-gray-300 rounded-md outline-none transition-width duration-300 ease-in-out ${isExpanded ? 'w-48' : 'w-0'}`}>
                <input
                    type="text"
                    placeholder="Find a post"
                    name="searchInput"
                    className="w-full"
                />
            </form>
            {isExpanded && (
                <button className="ml-2 bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={handleSearch}>
                    Search
                </button>
            )}
        </div>
    );
};

export default SearchBar;
