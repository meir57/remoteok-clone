import PropTypes from "prop-types";

export default function Select(props) {
    const {
        required = false,
    } = props;

    return (
        <select 
            name={props.name}
            id={props.id}
            className={props.className + " appearance-none outline-none border-none bg-bg-color shadow-[0_0_0_1px_#ddd] focus:shadow-[0_0_0_4px_rgba(255,75,66,0.5)]"}
            required={required}
        >
            {
                props.children.map((option, key) => 
                    <option value={option.value} key={key}>
                        {option.text}
                    </option>
                )
            }
        </select>
    );
}

Select.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
};
