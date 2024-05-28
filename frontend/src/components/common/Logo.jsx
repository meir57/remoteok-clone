export default function Logo(props) {
    const {
        className=""
    } = props;
    return (
        <a href="/">
            <h1 className={className + " cursor-pointer font-bold text-[35px] m-[10px]"}>homework</h1>
        </a>
    );
}
