import Keyword from "../common/Keyword";
import Dropdown from "./Dropdown";

export default function Filter() {
    return (
        <div className="flex justify-center right-0 left-0 pt-4 pb-2 sticky top-0 z-40 bg-bg-color">
            <div className="filters w-[1100px]">
                <div className="dropdowns mb-[10px]">
                    <Dropdown id="search" name="search"
                        options={
                            [
                                {
                                    value: "value",
                                    text: "🔍️ Search"
                                },
                            ]
                        }
                    />
                    <Dropdown id="search" name="search"
                        options={
                            [
                                {
                                    value: "value",
                                    text: "🌏️ Location"
                                },
                            ]
                        }
                    />
                    <Dropdown id="search" name="search"
                        options={
                            [
                                {
                                    value: "value",
                                    text: "💵️ Salary"
                                },
                            ]
                        }
                    />
                    <Dropdown id="search" name="search"
                        options={
                            [
                                {
                                    value: "value",
                                    text: "🎪 Benefits"
                                },
                            ]
                        }
                    />
                    <Dropdown id="search" name="search" className="float-right"
                        options={
                            [
                                {
                                    value: "",
                                    text: "🦴️ Sort by"
                                },
                                {
                                    value: "date",
                                    text: "🆕 Latest jobs"
                                },
                                {
                                    value: "salary",
                                    text: "💵 Highest paid"
                                },
                                {
                                    value: "views",
                                    text: "👀 Most viewed"
                                },
                                {
                                    value: "applied",
                                    text: "✅ Most applied"
                                },
                                {
                                    value: "hot",
                                    text: "🔥 Hottest"
                                },
                                {
                                    value: "benefits",
                                    text: "🎪 Most benefits"
                                },
                            ]
                        }
                    />
                </div>
                <div className="keywords">
                    <Keyword text="🤓️ Engineer" className="py-[6px] px-[8px] border-[2px] border-dashed border-[#ddd] rounded-[32px] inline-block text-[gray] font-bold text-[15px] grayscale mr-[10px] cursor-cell bg-white" />
                    <Keyword text="💼 Executive" className="py-[6px] px-[8px] border-[2px] border-dashed border-[#ddd] rounded-[32px] inline-block text-[gray] font-bold text-[15px] grayscale mr-[10px] cursor-cell bg-white" />
                    <Keyword text="👵️ Senior" className="py-[6px] px-[8px] border-[2px] border-dashed border-[#ddd] rounded-[32px] inline-block text-[gray] font-bold text-[15px] grayscale mr-[10px] cursor-cell bg-white" />
                    <Keyword text="🤓️ Developer" className="py-[6px] px-[8px] border-[2px] border-dashed border-[#ddd] rounded-[32px] inline-block text-[gray] font-bold text-[15px] grayscale mr-[10px] cursor-cell bg-white" />
                    <Keyword text="💰️ Finance" className="py-[6px] px-[8px] border-[2px] border-dashed border-[#ddd] rounded-[32px] inline-block text-[gray] font-bold text-[15px] grayscale mr-[10px] cursor-cell bg-white" />
                    <Keyword text="♾️ Sys Admin" className="py-[6px] px-[8px] border-[2px] border-dashed border-[#ddd] rounded-[32px] inline-block text-[gray] font-bold text-[15px] grayscale mr-[10px] cursor-cell bg-white" />
                </div>
            </div>
        </div>
    );
}