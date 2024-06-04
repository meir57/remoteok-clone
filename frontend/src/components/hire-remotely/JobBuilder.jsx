import BuyBundle from "./groups/BuyBundle";
import Company from "./groups/Company";
import Design from "./groups/Design";
import FeedbackUs from "./groups/FeedbackUs";
import Intro from "./groups/Intro";
import Partner from "./groups/Partner";
import Preview from "./groups/Preview";

export default function JobBuilder() {
    return (
        <div className="w-[100%] h-screen">
            <Intro />
            <Design />
            <Company />
            <BuyBundle />
            <FeedbackUs />
            <Preview />
            <Partner />
        </div>
    );
}