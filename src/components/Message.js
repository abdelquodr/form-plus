// import React, {useState} from 'react';
import exclam from '../style/icons/exclam.svg'

const Message = ({err = null}) => {
    return (
        <div style={{background: "#FFF4EA"}} className="flex justify-center my-8 lg:my-14 py-2" >
            <div className="rounded-full w-6 h-6 mx-4 align-between" style={{borderColor: "#FC830A", borderWidth: "3px"}}>
                <img src={exclam} className="align-between py-1 font-bold mx-auto" alt="serach icon" />
            </div>
            {err ? <p className="text-gray-700 font-semibold text-sm tracking-normal">Something went wrong. check your network</p> : <p className="text-gray-700 font-sans font-semibold text-sm tracking-normal">Tada!. Get started with a free template. Can't find what you are looking for? check for 1000+ template </p>}
        </div>
    )
}

export default Message