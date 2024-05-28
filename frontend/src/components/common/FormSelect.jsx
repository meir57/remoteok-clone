import Select from "../common/Select";

export default function FormSelect(props) {
    return (
        <div className="flex flex-col text-[14px] mb-5">
            <label htmlFor={props.id} className="font-bold uppercase mb-2">
                {props.label}
                &nbsp;
                { props.required && <span className="text-[red]">*</span> }
            </label>
            <Select
                id={props.id}
                name={props.name}
                className="rounded-[5px] p-[5px] text-[16px]"
            >
                {props.options}
            </Select>
            <div className="text-[9px] text-[#888] mt-3 ms-[.5px]">
                {props.info}
            </div>
        </div>
    );
}