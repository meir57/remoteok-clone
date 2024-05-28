import { useEffect, useRef, useState } from "react";
import About from "./About";
import Feedback from "./Feedback";

export default function SideBar() {
    const [visible, setVisible] = useState(true);
    const hideBar = useRef(null);
    
    useEffect(() => {
        hideBar.current.onclick = () => {
            setVisible(! visible);
            hideBar.current.querySelector('.hide').classList.toggle('-rotate-[270deg]');
            hideBar.current.classList.toggle('!-right-[1px]');
        }
    }, [visible]);

    return (
        <>
            <div ref={hideBar} className="absolute right-[32.45vw] top-[45vh] flex flex-col items-center justify-center h-[102px] w-[12px] bg-white border-[1px] border-solid border-[#ddd] rounded-default cursor-pointer hover:bg-bg-color">
                <div className="hide bg-[url('./assets/home/arrow-down.svg')] bg-cover w-[18px] h-[18px] -rotate-90 opacity-[.5]"/>
            </div>
            {
                visible && (
                    <div className={"w-[48.9vw] text-center bg-white border-solid border-l-[1px] border-[#ddd]"}>
                        <About />
                        <Feedback />
                    </div>
                )
            }
        </>
    );
}