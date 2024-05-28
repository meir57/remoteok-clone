import { useState } from "react";
import Icon from "../home/Icon";

export default function About () {
    let partners = [
        {
            link: "#aws",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/aws.png?1708185059",
            alt: "AWS",
        },
        {
            link: "#espn",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/espn.png?1633381266",
            alt: "ESPN",
        },
        {
            link: "#ibm", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/ibm.png?1708185059", 
            alt: "IBM", 
        },
        {
            link: "#microsoft", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/microsoft.png?1708185060", 
            alt: "Microsoft",
        },
        {
            link: "#scale-ai", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/scale-ai.png?1708185060",
            alt: "Scale AI",
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
            link: "#mozilla",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/mozilla.png?1708185060",
            alt: "mozilla",
        },
        {
            link: "#stripe",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/stripe.png?1708185060",
            alt: "Stripe",
        },
        {
            link: "#cloudflare",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/cloudflare.png?1708185059",
            alt: "Cloudflare",
        },
        {
            link: "#shopify",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/shopify.png?1708185060",
            alt: "Shopify",
        },
        {
            link: "#godaddy",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/godaddy.png?1633381266",
            alt: "GoDaddy",
        },
        {
            link: "#easyjet",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/easyjet.png?1708185059",
            alt: "easyjet",
        },
        {
            link: "#indeed",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/indeed.png?1708185059",
            alt: "Indeed",
        },
        {
            link: "#angellist",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/angellist.png?1708185059",
            alt: "AngelList",
        },
        {
            link: "#upwork",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/upwork.png?1708185060",
            alt: "Upwork",
        },
        {
            link: "#intercom",
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/intercom.png?1524913324",
            alt: "Intercom",
        },
        {
            link: "#amazon", 
            image: "https://remoteok.com/cdn-cgi/image/height=29,quality=85/https://remoteok.com/assets/amazon.png?1708185059",
            alt: "Amazon",
        },
    ];

    const [length, setLength] = useState(15);

    const showMore = (evt) => {
        setLength(partners.length);
        evt.target.remove();
    }

    return (
        <>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px]">
                    <div className="text-[17px] text-[#888]">
                        <div>Homework is <a href="/"><span className="border-[#ff4742] border-solid border-b-[2px] pb-[2px] font-bold text-[#ff4742]">the most popular remote jobs board in the world</span></a></div>
                        <div className="mt-4 mb-3">trusted by millions of remote workers and leading remote</div>
                        <div>companies like</div>
                    </div>
                    <div className="space-y-4 space-x-6 my-[20px]">
                        {partners.slice(0, length).map((partner, key) => {
                            return (
                                <div key={key} className="inline-block">
                                    <Icon key={key} open={partner.link} url={partner.image} alt={partner.alt} />
                                </div>
                            );
                        })}
                    </div>
                    <span onClick={showMore} className="cursor-pointer text-[gray] text-[15px] font-bold">SHOW MORE</span>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px] text-[#888] text-[15px]">
                    <div>Starting from</div>
                    <div className="font-bold text-[23px] text-black mt-1">💳 $299</div>
                    <div>for 30 days</div>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px] text-[#888] text-[15px]">
                    <div>Reach</div>
                    <div className="font-bold text-[22px] text-black my-1">🚀 2,500,000+ </div>
                    <div>remote workers monthly</div>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px] text-[#888] text-[15px]">
                    <div>Distributed on the</div>
                    <div className="flex items-center justify-center font-bold text-[21px] text-black"><div className="inline-block me-1 w-[35px] h-[35px] bg-[url('./assets/hire-remotely/google.png')] bg-contain"></div>Google for Jobs </div>
                    <div>recruitment network</div>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="mt-[30px] text-[#888] text-[15px]">
                    <div>Rated</div>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="z-40 overflow-hidden w-[124px] text-nowrap relative -top-[9px] -left-[8px]">
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                        </div>
                        <div className="relative -top-[39px] grayscale">
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                            <div className="inline-block me-1 w-[24px] h-[24px] bg-[url('./assets/hire-remotely/star.png')] bg-contain"></div>
                        </div>
                    </div>
                    <div className="relative -top-[35px]">Customer rating <b>9.0 | 31,794</b> reviews</div>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px] text-[#888] text-[15px]">
                    <div>Emailed to</div>
                    <div className="flex items-center justify-center font-bold text-[22px] text-black"><div className="inline-block me-1 w-[40px] h-[40px] bg-[url('./assets/hire-remotely/mail.gif')] bg-contain"></div>1,129,708</div>
                    <div>remote job seekers</div>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px] text-[#888] text-[15px]">
                    <div>Crossposted to</div>
                    <div className="font-bold text-[22px] text-black my-1">✨ 186 job boards</div>
                    <div>
                        that currently use <a href="/"><span className="border-[#ff4742] border-solid border-b-[2px] pb-[2px] font-bold text-[#ff4742]">our API</span></a>
                    </div>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px] text-[#888] text-[15px]">
                    <div>Guaranteed</div>
                    <div className="font-bold text-[22px] text-black my-1 mb-2">🎡 200+ [Apply] clicks</div>
                    <div>or we auto bump it for free</div>
                </div>
            </div>
            <div className="border-solid border-b-[1px] border-[#ddd] cursor-default">
                <div className="m-[30px] text-[#888] text-[15px]">
                    <div>Pay with</div>
                    <div className="m-auto mb-3 bg-[url('./assets/hire-remotely/cards.png')] bg-cover bg-no-repeat w-[350px] h-[190px]"></div>
                    <div>🔐 Secure payment with Stripe</div>
                </div>
            </div>
        </>
    );
}