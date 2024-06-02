import Input from "../common/Input";

export default function LabeledInput(props) {
    return (
        <div className="inline-flex items-center space-x-5">
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <Input type="text"
                id={props.id}
                value={props.value}
                readOnly={props.readonly}
                className="rounded-[5px] p-[5px] text-[16px] w-[200px]"
            />
        </div>
    );
}
