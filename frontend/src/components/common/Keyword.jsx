import PropTypes from "prop-types";

export default function Keyword(props) {
    const {
        link = null,
        onClick = null,
        onMouseDown = null,
    } = props;

    return (
        <div 
            ref={link}
            onClick={onClick}
            onMouseDown={onMouseDown}
            className={props.className + " inline-flex items-center justify-between"}
        >
            <div className="inline-flex">
                {props.text}
            </div>
            { props.selected && 
                <div
                    onClick={onClick}
                    onMouseDown={onMouseDown}
                    className="ms-2 inline-flex justify-center items-center bg-[#c0c0c0] w-[18px] h-[19px] rounded-[100%] text-white text-center text-[18px] cursor-zoom-out"
                >
                    ×
                </div>
            }
        </div>
    );
}

Keyword.propTypes = {
    text: PropTypes.string,
}