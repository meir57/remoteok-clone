import Checkbox from "./Checkbox";
import Label from "./Label";

export default function LabeledCheckbox(props) {
    return (
        <div className="text-[15px] mb-4">
            <Label id={props.id} required={props.required}>{props.label}</Label>
            <Checkbox
                id={props.id}
                checked={props.checked}
                onClick={props.onClick}
                required={props.required}
            >
                {props.children}
            </Checkbox>
            <div className="text-[12px] text-[#888] -mt-2 ms-[.5px] text-justify">
                {props.info}
            </div>
        </div>
    );
}
