import { useRef } from "react";
import Typed from "typed.js";

import HeaderButton from "../common/HeaderButton";
import Input from "../common/Input";
import Logo from "../common/Logo";

export default function Header() {
    const search = useRef(null);
    var typed = null;

    window.onload = () => {
        typed = new Typed('input', {
            strings: ["nodejs", "xamarin", "go-lang", "backend", "saas"],
            typeSpeed: 50,
            loop: true,
            contentType: null,
            showCursor: true,
            shuffle: true,
            onDestroy: () => search.current.value = '',
        });
    };

    const focus = () => {
        if (typed) {
            typed.destroy();
            typed = null;
            search.current.placeholder = "your next job?";
            return;
        }

        if (! search.current.value) {
            search.current.placeholder = '';
            typed = new Typed('input', {
                strings: ["nodejs", "xamarin", "go-lang", "backend"],
                typeSpeed: 50,
                loop: true,
                contentType: null,
                showCursor: true,
                onDestroy: () => {
                    search.current.value = '';
                }
            });
        }
    }
      
    return (
            <header className="bg-[url('./assets/legend.jpeg')] bg-cover bg-no-repeat bg-[center_top_38%] h-[50vh] m-0">
                <div className="bg-gradient-to-b from-[rgba(0,0,0,0.25)] via-transparent to-[rgba(0,0,0,0)] h-[50vh] p-[10px] m-0">
                    <Logo className="text-center text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)]" />
                    <HeaderButton />
                    <div className="m-auto my-[30px] text-center">
                        <h2 className="text-white text-[45px] drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)]">find a <b>remote job</b></h2>
                        <h2 className="text-white text-[45px] drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)]">work from <b>anywhere</b></h2>
                        <div className="w-[400px] m-auto my-[15px]">
                            <Input
                                link={search} 
                                onFocus={focus} 
                                onBlur={focus} 
                                className="font-[700] text-[24px] rounded-[100px] p-[10px] ps-[2.5em] w-[400px] bg-[url('./assets/home/search.png')] bg-no-repeat bg-[length:25px] bg-[center_left_18px] placeholder-black focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
                            />
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 1440 120" className="absolute top-[43.3vh] fill-[#fbfaf8]"><path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg>
            </header>
    );
}
