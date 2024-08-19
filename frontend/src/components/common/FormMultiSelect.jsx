import MultiSelect from './MultiSelect';
import Label from './Label';

export default function FormMultiSelect(props) {
    return (
        <div className="flex flex-col text-[14px] mb-5">
            <Label id={props.id} required={props.required} new={props.new}>{props.label}</Label>
            <MultiSelect
                id={props.id}
                placeholder={props.placeholder}
                options={props.options}
                creatable={props.creatable}
                className="rounded-[5px] p-[5px] text-[16px]"
                required={props.required}
            />
            <div className="text-[12px] text-[#888] mt-3 ms-[.5px] text-justify" dangerouslySetInnerHTML={{__html: props.info}}></div>
        </div>
    );
}