import Button from "./Button";

export default function HeaderButton() {
    
    const openHealthInsurancePage = () => location.href = '/health-insurance';
    const openLoginPage = () => location.href = '/login';
    const openPostJobPage = () => location.href = '/hire-remotely';

    return (
        <div className="absolute top-[15px] right-[10px] w-[420px] space-x-3">
            <Button 
                text="Health insurance"
                onClick={openHealthInsurancePage}
                className="inline-block bg-[#5656c2] border-[#5656c2] text-white font-[800] text-[16px] py-[8px] px-[10px] rounded-default border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:border-[#5cbfbe] hover:text-[#5cbfbe]" 
            />
            <Button
                text="Log in"
                onClick={openLoginPage}
                className="inline-block bg-white border-current font-[800] text-[16px] py-[8px] px-[10px] rounded-default border-[3px] border-solid border-white cursor-pointer transition duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white" 
            />
            <Button
                text="Post a remote job"
                onClick={openPostJobPage}
                className="fixed z-50 inline-block bg-[#ff4742] border-[#ff4742] text-white font-[800] text-[16px] py-[8px] px-[10px] rounded-default border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ff4742]" 
            />
        </div>
    );
}
