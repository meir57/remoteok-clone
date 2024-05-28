import { useState } from "react";

import Keyword from "../common/Keyword";
import Icon from "../home/Icon";
import Button from "./Button";

export default function Job(props) {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <div className={props.className + " flex items-center bg-white py-[10px] px-[20px] rounded-default mb-[15px] cursor-pointer shadow-[0_0_0_1px_#ddd] hover:opacity-[.7]"} onMouseEnter={show} onMouseLeave={hide}>
            <div className="w-[90px]">
                <Icon url={props.url} className="rounded-[50%] p-[2px] pe-[1px] shadow-[0_0_0_1px_#ddd]" />
            </div>
            <div className="flex-col w-[400px] space-y-1">
                <div className="font-bold">{props.title}</div>
                <div>{props.company}</div>
                <div className="flex space-x-2">
                    {
                        props.facts.map((fact, key) => <Keyword key={key} text={fact} className="text-[12px] rounded-default py-[2px] px-[10px] cursor-pointer shadow-[0_0_0_1px_#ddd]" />)
                    }
                </div>
            </div>
            <div className="flex justify-between w-[270px]">
                {
                    props.keywords.map((keyword, key) => <Keyword key={key} text={keyword} className="font-[700] text-[10px] py-[3px] px-[8px] border-solid border-[2px] border-black rounded-default cursor-cell transition duration-300 ease-in-out hover:bg-[#0f1115] hover:text-white hover:border-[#0f1115]" />)
                }
            </div>
            <div className="flex justify-center text-[12px] w-[190px]">
                {props.time}
            </div>
            <div className="w-[175px]">
                {(visible || props.showButton) && <Button text="Apply" className="bg-[#ff4742] py-[10px] px-[40px] text-center text-white rounded-default text-[16px] font-bold cursor-pointer" />}
            </div>
        </div>
    );
}
