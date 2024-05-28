export default function Avatar(props) {
    return (
        <img src={props.url} alt={props.alt} className={"rounded-[50%] " + props.className} />
    );
}
