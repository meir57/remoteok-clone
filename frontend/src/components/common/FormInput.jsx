import Input from "../common/Input";
import Label from "../common/Label";

export default function FormInput(props) {
    const {
        required = false,
    } = props;

    return (
        <div className={props.className + " flex flex-col text-[14px] mb-5"}>
            <Label id={props.id} required={required}>{props.label}</Label>
            <Input
                id={props.id}
                placeholder={props.placeholder}
                className="rounded-[5px] p-[5px] text-[16px]"
                required={required}
            />
            <div className="text-[12px] text-[#888] mt-3 ms-[.5px] text-justify">
                {props.info}
            </div>
        </div>
    );
}