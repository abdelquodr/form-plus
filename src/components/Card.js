// import {Link} from "react-router-dom"

const Card = ({title, desc}) => {

    return (
        <div className="grid grid-cols-1 grid-row-1 relative">
            <div className="bg-white rounded-md card shadow-2xl">
                <div className="p-6 tracking-wide">
                    <h2 className="text-xl font-sans title font-semibold text-gray-800">{ title}</h2>
                    <p className="my-2 text-sm text-gray-600 pb-6">{desc}</p>
                </div>
                <div className="bg-gray-50 absolute bottom-0 w-full">   
                    <p className="text-green-300 py-3 px-6 font-medium font-sans" style={{color: "##08BD37"}}>Use Template</p>
                </div>
            </div>
        </div>
    )
}

export default Card