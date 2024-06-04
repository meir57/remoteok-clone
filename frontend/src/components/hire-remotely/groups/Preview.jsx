import Button from "../../common/Button";
import Group from "../../common/Group";
import Job from "../../common/Job";

export default function Preview() {
    return (
        <Group title="Preview">
            <h1 className="absolute left-[23%] top-[41%] uppercase font-[600] text-[#ff4742] text-[150px] rotate-[-30deg] opacity-[.08]">Preview</h1>
            <div className="text-center mb-5">
                <h3 className="font-bold mt-2 mb-3">
                    Here's a preview of how your job post will look like
                </h3>
                <span>
                    Don't worry if it's not perfect the first time: 
                    your job is fully editable for free after posting it!
                </span>
            </div>
            <div className="flex flex-col justify-center items-center shadow-[3px_3px_14px_rgba(0_0_0_0.1)] border-[1px] border-solid border-[#ddd] my-[20px] rounded-[6px]">
                <Job
                    url="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=60,height=60,quality=100/https://remoteok.com/assets/img/jobs/ccc57da2103a42b4dbdfe2ef4828d5db1716328814.png?1716328814"
                    title="Senior Software Engineer"
                    company="Nourish"
                    facts = {["🇺🇸️ United States", "💰️ $60k - $110k"]}
                    keywords = {["Software", "React", "Front End"]}
                    time="2d"
                    className="w-[100%] mt-1 -mx-3 pb-5 border-b-[1px] !rounded-[0px] shadow-none"
                    showButton
                />
                <div className="my-4 justify-left w-[900px]">
                    <h2 className="text-[32px]">Company is hiring a</h2>
                    <h1 className="font-bold text-[32px] mb-1">Remote Position</h1>
                    <div className="mb-3">
                        The description of the job position will appear here. 
                        Write this in the "Job Description" box above.
                    </div>
                </div>
                <div className="mb-10 w-[800px] rounded-default text-center p-[40px] border-[1px] border-solid border-[#ddd]">
                    <h3 className="font-bold text-[22px] mb-4">How do you apply?</h3>
                    <div className="my-5">
                        Here the instructions go on how to apply for this job. 
                        Write them in the "How to Apply?" box.
                    </div>
                    <Button
                        className="inline-block bg-[#ff4742] border-[#ff4742] text-white font-[800] text-[16px] py-[8px] px-[10px] rounded-default border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ff4742]"
                    >
                        Apply for this job
                    </Button>
                </div>
            </div>
        </Group>
    );
}