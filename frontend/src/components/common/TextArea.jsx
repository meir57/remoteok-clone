export default function TextArea(props) {
    return (
        <textarea
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
            className={props.className + " outline-none border-none bg-[#fbfaf8] shadow-[0_0_0_1px_#ddd] focus:shadow-[0_0_0_4px_rgba(255,75,66,0.5)]"}
        >
            {props.children}
        </textarea>
    );
}