import Icon from "./Icon";
import Button from "./Button";

export default function PartnerPost(props) {
    return (
        <div className={props.className + " flex items-center bg-[#343477] text-white py-[15px] px-[20px] rounded-[5px] mb-[15px] cursor-pointer shadow-[0_0_0_1px_#ddd] hover:opacity-[.7]"}>
            <div className="w-[90px]">
                <Icon url={props.url} className="rounded-[50%] p-[2px] pe-[2px] shadow-[0_0_0_1px_#ddd]" />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="font-bold">{props.title}</div>
                <div>{props.description}</div>
            </div>
            <Button text={props.button} className=" bg-[#5bc6c6] py-[10px] px-[55px] text-white rounded-default text-[16px] font-bold cursor-pointer" />
        </div>
    );
}
