import PropTypes from "prop-types";

export default function Input(props) {
    const {
        type = "text",
        link = null,
        required = false,
        readOnly=false,
        value="",
    } = props;

    return (
        <input
            defaultValue={value}
            ref={link}
            type={type}
            name={props.name}
            id={props.id}
            spellCheck="false"
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            className={props.className + " outline-none border-none bg-[#fbfaf8] shadow-[0_0_0_1px_#ddd] focus:shadow-[0_0_0_4px_rgba(255,75,66,0.5)]"}
            placeholder={props.placeholder}
            required={required}
            readOnly={readOnly}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
};
