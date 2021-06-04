import React from "react";
import  dropImg from '../style/icons/Vector.svg'



function Input({ sortBy = null, label, valueList = []}) {

    const handleChange = ({target}) => {
        const val = target.value;
        sortBy !== null &&  sortBy(val)
    }

    return (     
            <fieldset className="flex justify-between w-1/3 search lg:w-56">
                <legend className="px-1 mx-3">{label}</legend>
                <select onChange={handleChange}  name="browser" id="browse" className="chosen-value text-xs text-gray-500 mx-4 mt-1 mb-2 " type="text" >
                    {valueList.map((each, i) => (
                        <option className="hover:bg-gray-50 px-3" key={i} >{each}</option>
                    ))}
                </ select>
                <img src={dropImg} alt="dropdownIcon" className="w-3 text-gray-600 text-bold" />
            </fieldset>
    )
}

export default Input


