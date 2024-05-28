import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

export default function MailingList() {
    const [visible, setVisible] = useState(true);

    const hide = () => setVisible(false);

    return (
        visible && (<div className="fixed bottom-0 w-[100%] h-[90px] text-center bg-white flex justify-center items-center pt-[10px] pb-[20px] shadow-[0_0_0_1px_#ddd]">
            <form name="mailing" className="space-x-4">
                <label htmlFor="email">Get new remote jobs sent to</label>
                <Input type="email" name="email" id="email" placeholder="your email"
                className="font-bold text-[16px] p-[9px] rounded-default" />
                <Button text="Subscribe" className="inline-block text-white font-[800] text-[17px] py-[6.5px] px-[15px] rounded-default bg-[#ff4742] border-[#ff4742] border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ff4742] hover:border-[#ff4742]" />
            </form>
            <div className="absolute right-[15px] font-bold text-[20px] cursor-pointer py-0 px-1 w-[30px] rounded-[30px] transition duration-300 ease-in-out hover:bg-[#ddd]" onClick={hide}>×</div>
        </div>)
    );
}