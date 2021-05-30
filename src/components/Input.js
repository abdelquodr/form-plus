import React from "react";
import  dropImg from '../style/icons/Vector.svg'



function Input({sortBy, label, valueList = [], placeholder}) {

    const handleChange = ({target}) => {
        const val = target.value;

        sortBy(val)
    }

    return (     
            <fieldset className="flex justify-between w-1/3 search lg:w-56">
                <legend className="px-1 mx-3">{label}</legend>
                <select onChange={handleChange}  name="browser" id="browse" className="chosen-value text-xs text-gray-500 mx-4 mt-1 mb-2 " type="text" placeholder={placeholder} >
                    {valueList.map((each, i) => (
                        <option className="hover:bg-gray-50 px-3" key={i} >{each}</option>
                    ))}
                </ select>
                <img src={dropImg} alt="dropdownIcon" className="w-3 text-gray-600 text-bold" />
            </fieldset>
    )
}

export default Input




 // <form className="flex-grow lg:w-1/6 md:w-1/6 sm:w-1/5">
        //     <fieldset className="flex justify-between">
        //         <legend className="px-1">{label}</legend>
        //         <input list="browser" name="browser" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} value={input} className="chosen-value" type="text" placeholder={placeholder} />
        //         <img src={dropImg} />
        //     </fieldset>  
        //         <ul className="value-list bg-white shadow-lg rounded" >
        //             { dropdown.map((el,i) => <li className="hover:bg-gray-50 px-3" onClick={handleClick} data-id={i} value={el} key={i}>{el}</li>)}
        //         </ul>
        // </form>



         // state
    // state
    // const option = ["germany", "lebanon", "florida", "california", "canada"];
    // const [dropdown, setDropdown] = useState(option);
    // const [toggle, setToggle] = useState(false);
    // const [input, setInput] = useState('');


    // useEffect(() => {
    //     if(input.trim() === ''){
    //         setDropdown(option)       
    //     } else if(input.length > 0){
    //         const filterOption = [];
    //         for (let j = 0; j < dropdown.length; j++){
    //             if((input.substring(0, input.length).toLowerCase() === dropdown[j].substring(0, input.length).toLowerCase())){
    //                 filterOption.push(dropdown[j]);
    //                 setDropdown(filterOption)
    //                 console.log(input)
    //             }
    //         }
    //     }  

    // }, [input])


    // // handler
    // const handleChange = (e) => {
    //     const inputValue = e.target.value;
    //     setInput(inputValue)
    // }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     setInput(e.target.innerText)
    // }

    // console.log(input)

    // const handleFocus = (e) => {
    //     e.preventDefault()
    //     setToggle(true)
    // }

    // const handleBlur = (e) => {
    //     e.preventDefault()
    //     setToggle(false)
    // }








    