import SearchIcon from '../style/icons/search.svg'

const Search = ({placeholder, getSearchVal}) => {

    const handleChange = (e) => {
        getSearchVal(e.target.value)
    }
    
    return (
        <div className="flex w-1/3 res__small justify-between search pt-1 rounded-md h-full md:h-full py-5 mb-0 m-0 sm:pt-1 w-full sm:w-60 sm:h-full md:w-60 lg:w-64 items-center">
            <input className="px-8 py-0 h-8 m-0 w-full outline-none subpixel-antialiased text-xs" type="text" placeholder={placeholder} onChange={handleChange} />
            <div>
                <img src={SearchIcon} alt="search" className="w-4 h-4 text-grey-300" />
            </div>
        </div>
    )
}

export default Search