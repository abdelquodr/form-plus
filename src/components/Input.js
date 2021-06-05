import React, {useState} from "react";
import  dropImg from '../style/icons/Vector.svg'
import "react-datepicker/dist/react-datepicker.css";

// dependencies
import DatePicker from "react-datepicker";


function Input({ sortBy = null, label, valueList = []}) {

    const handleChange = ({target}) => {
        const {value, name }= target;
        sortBy !== null &&  sortBy(value,name)
    }

    return (     
            <fieldset className="flex justify-between w-1/3 search lg:w-56">
                <legend className="px-1 mx-3">{label}</legend>
                <select onChange={handleChange}  name={label} id="browse" className="chosen-value text-xs text-gray-500 mx-3 mt-1 mb-2 w-full" >
                    {valueList.map((each, i) => (
                        <option className="hover:bg-gray-50 px-3" key={i}>{each}</option>
                    ))}
                </ select>
                <img src={dropImg} alt="dropdownIcon" className="w-3 text-gray-600 text-bold" />
            </fieldset>
    )
}

export default Input


export const WritableInput = ({sortBy, label}) => {

    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date, label)
        sortBy !== null &&  sortBy(date, )
    }

    return (     
            <fieldset className="flex justify-between w-1/3 search lg:w-56">
                <legend className="px-1 mx-3">{label}</legend>
                <DatePicker selected={startDate} onChange={handleChange} className="chosen-value text-xs text-gray-500 mx-4 mt-1 mb-2 "/>
                <img src={dropImg} alt="dropdownIcon" className="w-3 text-gray-600 text-bold" />
            </fieldset> 
    )
}
