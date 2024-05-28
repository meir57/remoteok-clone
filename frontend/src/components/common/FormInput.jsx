import Input from "../common/Input";

export default function FormInput(props) {
    const {
        required = false,
    } = props;

    return (
        <div className="flex flex-col text-[14px] mb-5">
            <label htmlFor={props.id} className="font-bold uppercase mb-2">
                {props.label}
                &nbsp;
                { props.required && <span className="text-[red]">*</span> }
            </label>
            <Input 
                id={props.id}
                placeholder={props.placeholder}
                className="rounded-[5px] p-[5px] text-[16px]"
                required={required}
            />
            <div className="text-[9px] text-[#888] mt-3 ms-[.5px]">
                {props.info}
            </div>
        </div>
    );
}