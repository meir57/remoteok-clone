import { Link } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";

export default function SignIn() {
    return (
        <div className="flex justify-center">
            <div className="space-y-3 text-center inline-block bg-white py-[30px] px-[10px] w-[450px] rounded-default border-1 border-solid border-[#ddd] shadow-[0_0_0_1px_#ddd]">
                <h2 className="font-bold text-[23px] mb-[11px]">Continue your remote career on <br /> the <u><a href="/">#1 remote work platform</a></u></h2>
                <Input className="rounded-[7px] text-[16px] py-[6px] px-[10px] w-[90%]" placeholder="Username or email" />
                <Button text="Continue" className="inline-block w-[90%] text-white font-[800] text-[16px] py-[6px] px-[15px] rounded-default bg-[#ff4742] border-[#ff4742] border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ff4742] hover:border-[#ff4742]" />
                <div className="relative top-[6px]">
                    <span>Not a member yet? </span>
                    <Link to="/sign-up" className="font-bold underline">Sign up</Link>
                </div>
            </div>
        </div>
    );
}