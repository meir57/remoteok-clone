import Label from "./Label";
import TextArea from "./TextArea";

export default function FormTextArea(props) {
    return (
        <div className="flex flex-col text-[14px] mb-5">
            <Label
                id={props.id}
                required={props.required}
            >
                {props.label}
            </Label>
            <TextArea
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                className={props.className + " min-h-[150px] rounded-[5px] p-[5px] text-[16px] resize-none"}
            >
                {props.children}
            </TextArea>
            <div className="text-[12px] text-[#888] mt-3 ms-[.5px] text-justify">
                {props.info}
            </div>
        </div>
    );
}
