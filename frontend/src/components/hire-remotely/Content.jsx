import JobBuilder from "./JobBuilder";
import SideBar from "./SideBar";

export default function Content() {
    return (
        <div className="mb-[130px]">
            <div className="bg-[#ff4742] text-white font-bold py-[10px] text-center">
                ⛳️ Save up to 50% when buying multiple job posts — <a href="/buy-bundle" className="underline">Buy a bundle →</a>
            </div>
            <div className="flex">
                <JobBuilder />
                <SideBar />
            </div>
        </div>
    );
}