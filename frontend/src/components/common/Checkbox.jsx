import React from "react";

export default function Checkbox(props) {
    return (
        <div className="flex items-center my-2 cursor-pointer hover:opacity-[.7] mb-5">
            <input 
                type="checkbox"
                id={props.id}
                className="w-[25px] h-[25px] accent-[#9ac372] rounded-[7px] cursor-pointer appearance-none outline-none shadow-[0_0_0_1px_#ddd] border-[1px] border-solid border-[#ddd] checked:appearance-auto"
                defaultChecked={props.checked}
                onClick={props.onClick}
                required={props.required}
            />
            <label 
                htmlFor={props.id}
                className="text-[16px] mx-2 me-3 cursor-pointer"
            >
                { props.children }
            </label>
            { props.detail &&
                <span 
                    className="cursor-pointer text-[12px] uppercase font-bold px-[4px] py-[2px] rounded-[7px] border-solid border-[1px] border-current text-[#ff4742]"
                >
                    {props.detail}
                </span>
            }
        </div>
    );
}
