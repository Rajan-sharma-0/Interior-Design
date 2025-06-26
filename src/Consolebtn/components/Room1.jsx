import React from 'react';

function Room1(props) {
    return (
        <>
            <div className="bg-white p-2 sm:p-1 md:p-4 rounded-md border border-gray-300 mb-4">
                <p className="font-bold md:text-sm">
                    <span className="text-xl">{props.title}</span>
                    <span className="text-red-500 ml-2 text-xl">(Required)</span>
                </p>
                <select
                    value={props.value}
                    onChange={props.onChange}
                    className="w-full p-2 mt-2 rounded-md border border-black text-xl sm:text-sm md:text-xs lg:text-xs"
                >
                    <option value="" disabled>
                        {props.display}
                    </option>
                    <option value={props.opt1}>{props.opt1}</option>
                    <option value={props.opt2}>{props.opt2}</option>
                    <option value={props.opt3}>{props.opt3}</option>
                    <option value={props.opt4}>{props.opt4}</option>
                    <option value={props.opt5}>{props.opt5}</option>
                </select>
            </div>
        </>
    );
}

export default Room1;
