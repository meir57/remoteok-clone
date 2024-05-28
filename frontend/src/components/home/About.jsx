import Icon from "./Icon";
import Button from "../common/Button";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from "react";

export default function About() {
    let partners = [
        {
            link: "#microsoft", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/microsoft.png?1708185060", 
            alt: "Microsoft",
        },
        {
            link: "#ibm", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/ibm.png?1708185059", 
            alt: "IBM", 
        },
        {
            link: "#amazon", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/amazon.png?1708185059",
            alt: "Amazon",
        },
        {
            link: "#scale-ai", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/scale-ai.png?1708185060",
            alt: "Scale AI",
        },
        {
            link: "#cloudflare",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/cloudflare.png?1708185059",
            alt: "Cloudflare",
        },
        {
            link: "#stripe",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/stripe.png?1708185060",
            alt: "Stripe",
        },
        {
            link: "#shopify",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/shopify.png?1708185060",
            alt: "Shopify",
        },
        {
            link: "#y-combinator",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/ycombinator.png?1708185060",
            alt: "YCombinator",
        },
        {
            link: "#github",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/github.png?1633381266",
            alt: "GitHub",
        },
        {
            link: "#upwork",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/upwork.png?1708185060",
            alt: "Upwork",
        },
        {
            link: "#angellist",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/angellist.png?1708185059",
            alt: "AngelList",
        },
        {
            link: "#intercom",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/intercom.png?1524913324",
            alt: "Intercom",
        },
    ];

    const [visible, setVisible] = useState(true);
    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);
    const hide = () => setVisible(false);

    useEffect(() => {
        let finalPosition = -width / 2 - partners.length;

        let controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        visible && <div className="relative -top-[60px] w-[1100px] m-auto">
            <div className="flex justify-center items-center bg-white p-[20px] rounded-default shadow-[0_0_0_1px_#dddddd] space-x-4 hover:bg-[#fbfaf8]"> 
                <span className="mt-[6px] font-bold text-[16px]">
                    👉 Hiring remotely? Reach <span className="border-black border-solid border-b-[2px] pb-[2px]">2,500,000+ remote workers</span>  on the 🏆 <a href="/">#1 Remote Job Board</a>
                </span>
                <Button link="#post-job" className="inline-block bg-[#ff4742] border-[#ff4742] text-white font-[800] text-[16px] py-[8px] px-[10px] rounded-default border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#ff4742]" text="Post a job" />
                <Button link="#hide-this" className="inline-block bg-transparent border-[#ff4742] text-[#ff4742] font-[800] font-[16px] py-[8px] px-[10px] rounded-default border-[3px] border-solid cursor-pointer transition duration-300 ease-in-out hover:bg-[#ff4742] hover:text-white" text="Hide this" onClick={hide} />
            </div>
            <div className="flex items-center -mb-[35px] mt-5">
                <span className="inline-block text-[gray] text-[15px] -mt-[7px] nowrap">trusted by</span>
                <div className="inline-block align-middle overflow-hidden nowrap w-[1030px] before:absolute before:left-[69px] before:top-[100px] before:w-[150px] before:h-[50px] before:bg-gradient-to-r before:from-bg-color before:z-50 before:to-transparent before:filter before:blur-1  after:absolute after:right-0 after:top-[100px] after:w-[150px] after:h-[50px] after:bg-gradient-to-l after:from-bg-color after:to-transparent after:filter after:blur-1">
                    <motion.div
                        className="space-x-5"
                        ref={ref}
                        style={{width: "max-content", x: xTranslation}}
                    >
                        {[...partners, ...partners].map((partner, key) => {
                            return (
                                <motion.div key={key} className="inline-flex grayscale hover:opacity-[.4]">
                                    <Icon key={key} open={partner.link} url={partner.image} alt={partner.alt} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}