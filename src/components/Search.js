// import React, {useState} from'react';

const Search = ({placeholder}) => {
    
    // state
    // const [input, setInput] = useState('');
    
    return (
        <div className="flex w-1/3 justify-between search rounded-md h-full py-5 mb-5 m-0 w-full md:w-60 lg:w-64 items-center">
            <input className="px-8 py-0 h-8 m-0 w-full outline-none subpixel-antialiased text-xs" type="text" placeholder={placeholder} />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    )
}

export default Search