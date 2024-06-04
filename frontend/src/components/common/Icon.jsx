import PropTypes from "prop-types";

export default function Icon(props) {
    const {
            open = '#image', 
            url = "https://via.placeholder.com/60",
            alt = "image",
            className = "",
    } = props;

    return (
        <a href={open}>
            <img src={url} alt={alt} className={className} />
        </a>
    );
}

Icon.propTypes = {
    open: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};