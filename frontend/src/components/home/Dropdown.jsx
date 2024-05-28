import PropTypes from "prop-types";

export default function Dropdown(props) {
    const {
        id = 0,
        name = 'dropdown',
        className = '',
        options = [],
    } = props;

    return (
        <select id={props.id} name={props.name} className={props.className + " py-[8px] px-[13px] rounded-[50px] bg-white font-bold text-[16px] w-[180px] appearance-none outline-none bg-[url('./assets/home/arrow-down.svg')] bg-no-repeat bg-[25px] bg-[center_right_5%] mr-[10px] shadow-[0_0_0_1px_#ddd] border-none cursor-cell hover:bg-transparent focus:shadow-[0_0_0_4px_rgba(255,75,66,0.5)]"}>
            {
                props.options.map((option, key) => 
                    <option key={key} value={option.value}>{option.text}</option>        
                )
            }
        </select>
    );
}

Dropdown.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            option: PropTypes.string,
            text: PropTypes.string,
        })
    ),
    className: PropTypes.string,
};