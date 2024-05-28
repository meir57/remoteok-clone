import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Header() {
    return (
        <header className="bg-white flex justify-between items-center my-1">
            <Logo className="ms-6" />
            <a href="/"><h1 className="-ms-2 font-bold text-[32px] m-[10px]">Hire remotely</h1></a>
            <Button text="Buy a bundle →" className="me-6 flex items-center bg-[#ff4742] border-[#ff4742] text-white font-[800] text-[16px] py-[6px] px-[10px] rounded-default border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ff4742]" />
        </header>
    );
}