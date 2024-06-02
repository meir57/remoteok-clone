export default function Label(props) {
    return (
        <label htmlFor={ props.id } className="font-bold uppercase mb-2">
            { props.children }
            &nbsp;
            { props.required && <span className="text-[red]">*</span> }
            { props.new && <span className="ms-2 bg-[#ff4742] text-white py-[3px] px-2 rounded-[20px]">NEW</span> }
        </label>
    );
}
