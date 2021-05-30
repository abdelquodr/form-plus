
const Paginate = ({totalPage, currentpage, getWhichClick}) => {

    // handler
    const handleCLick = (e) => {
        const pageGo = e.target.name;
        console.log(pageGo)
        
        if(pageGo === "next"){
            getWhichClick(currentpage + 1)
        }else if(pageGo === "previous"){
            getWhichClick(currentpage - 1)
        }
    }

    return (
        <div className="flex justify-between lg:my-16 lg:mx-20 font-bold font-mono">
            <button onClick={handleCLick} className="font-xs lg:font-bold hover:outline-none focus:outline-none" name="previous">{ "< Previous" }</button>
            <p className=""><button className="border-gray-700 border-2 font-bold px-3 py-1 rounded">{currentpage}</button> Of {totalPage}</p>
            <button onClick={handleCLick} className="font-xs lg:font-bold hover:outline-none focus:border-0 focus:outline-none" name="next">{ "Next >" }</button>
        </div>
    )
}

export default Paginate