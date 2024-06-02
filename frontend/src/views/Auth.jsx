import { Outlet } from "react-router-dom";
import HeaderButton from "../components/common/HeaderButton";

import useTitle from "../hooks/useTitle";

export default function Auth() {
    useTitle("Log in to Remote OK");

    return (
        <main className="bg-[url('./assets/legend.jpeg')] bg-center bg-cover h-screen">
            <div className="bg-gradient-to-b from-[rgba(0,0,0,0.25)] via-transparent to-[rgba(0,0,0,0)] h-[30vh] p-[10px] m-0">
                <HeaderButton />
            </div>
            <Outlet />
        </main>
    );
}