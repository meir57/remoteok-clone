import { useState } from 'react';
import MultiSelect from './MultiSelect';

export default function FormMultiSelect(props) {
    return (
        <div className="flex flex-col text-[14px] mb-5">
            <label htmlFor={props.id} className="font-bold uppercase mb-2">
                {props.label}
                &nbsp;
                { props.required && <span className="text-[red]">*</span> }
                { props.new && <span className="ms-2 bg-[#ff4742] text-white py-[3px] px-2 rounded-[20px]">NEW</span> }
            </label>
            <MultiSelect
                id={props.id}
                placeholder={props.placeholder}
                options={props.options}
                creatable={props.creatable}
                className="rounded-[5px] p-[5px] text-[16px]"
            />
            <div className="text-[9px] text-[#888] mt-3 ms-[.5px]" dangerouslySetInnerHTML={{__html: props.info}}></div>
        </div>
    );
}