import Avatar from "../common/Avatar";

export default function Review(props) {
    const {
        companyLogo = "http://via.placeholder.com/50",
    } = props;

    let classes = "cursor-default ";

    if (! props.isFirst) {
        classes += "border-solid border-t-[1px] border-[#ddd]";
    }

    return (
        <div className={classes}>
            <div className="mx-[50px] mb-[45px] flex flex-col items-center text-[#888]">
                <img src={companyLogo} className={(props.hasOwnProperty("companyLogo") ? "" : "invisible ") + "relative top-[50px] left-[75px] w-[50px] rounded-[50%] border-solid border-2 border-white"} />
                <Avatar url={props.picture} className="w-[200px] h-[200px]" />
                <div className="!mt-[30px] text-[17px] leading-10" dangerouslySetInnerHTML={{__html: props.children}}></div>
                <div className="mt-6">
                    — <a href={props.authorURL}><span className="text-[18px] font-[500] border-[#ff4742] border-solid border-b-[2px] pb-[2px] text-[#ff4742]">
                        {props.author}</span></a>, {props.position} at <a href={props.companyURL}>
                    <span className="text-[18px] font-[500] border-[#ff4742] border-solid border-b-[2px] pb-[2px] text-[#ff4742]">{props.company}</span></a>
                </div>
            </div>
        </div>
    );
}
