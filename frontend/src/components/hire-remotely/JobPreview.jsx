import Job from "../common/Job";
import Button from "../common/Button";

export default function JobPreview () {
    return (
        <div className="fixed z-50 flex items-center justify-between bottom-0 w-[100%] h-[130px] bg-white border-solid border-t-[1px] border-[#ddd]">
            <div className="w-[67%] p-[10px]">
                <Job 
                    url="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=60,height=60,quality=100/https://remoteok.com/assets/img/jobs/ccc57da2103a42b4dbdfe2ef4828d5db1716328814.png?1716328814"
                    title="Senior Software Engineer"
                    company="Nourish"
                    facts = {["🇺🇸️ United States", "💰️ $60k - $110k"]}
                    keywords = {["Software", "React", "Front End"]}
                    time="2d"
                    className="m-4"
                    showButton
                />
            </div>
            <div className="w-[33%] h-[100%] justify-center items-center inline-flex border-solid border-l-[1px] border-[#ddd]">
                <Button text="Start hiring — $644" className="text-center ms-2 bg-[#ff4742] border-[#ff4742] text-white font-[800] text-[24px] w-[90%] py-[15px] rounded-[7px] border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ff4742]" />
            </div>
        </div>
    );
}