import Checkbox from "../../common/Checkbox";
import Group from "../../common/Group";
import LabeledInput from "../../common/LabeledInput";

export default function Design() {
    return (
        <Group title="design your job post">
            <div className="mb-7">
                <Checkbox checked id="premium-support">
                    Get 💁‍♀️ premium support and help with your job post (+$89)
                </Checkbox>
                <Checkbox checked id="show-company-logo" detail="2x more views">
                    Show my ⭐️ company logo besides my post (+$44)
                </Checkbox>
                <Checkbox checked id="email-blast" detail="3x more views">
                    Email blast my job post to 📮1,139,317  remote candidates (+$89)
                </Checkbox>
                <Checkbox checked id="get-auto-matched">
                    Get auto matched with suitable applicants from our &nbsp;
                    <a
                        href="#workers"
                        className="border-[#ff4742] border-solid border-b-[2px] pb-[2px] font-bold text-[#ff4742]"
                    >
                        directory of remote workers
                    </a>
                </Checkbox>
                <Checkbox checked id="qr-link">
                    Create a <div className="inline-block align-middle bg-[url('./assets/hire-remotely/qr_icon.png')] bg-cover w-[22px] h-[22px]"></div> QR-code short link for your post like <a
                        href="#"
                        className="border-[#ff4742] border-solid border-b-[2px] pb-[2px] font-bold text-[#ff4742]"
                    >
                        rok.co/hh
                    </a> to share easily (+$49)
                </Checkbox>
                <Checkbox checked id="highlight-post" detail="2x more views">
                    Highlight your post in ⚠️ yellow (+$49)
                </Checkbox>
                <Checkbox id="stick-day" detail="2x more views">
                    Sticky your post so it stays on 📌 top of the frontpage for ⏰ 24 hours (+$99)
                </Checkbox>
                <Checkbox id="stick-week" detail="6x more views">
                    Sticky your post so it stays on 📌 top of the frontpage for 🗓 1 entire week (+$199)
                </Checkbox>
                <Checkbox id="stick-month" detail="9x more views">
                    Sticky your post so it stays on 📌 top of the frontpage for 🗓 1 entire month (+$597)
                </Checkbox>
                <Checkbox id="geolock">
                    Geolock your post for people only in the location 
                    it's restricted to above and block applicants from elsewhere (+$99)
                </Checkbox>
            </div>
            <div className="rates space-x-5 mb-7">
                <LabeledInput id="expected-views" label="Expected views" value="2,272" readonly/>
                <LabeledInput id="expected-clicks" label="Expected clicks" value="256" readonly/>
            </div>
            <div className="text-[12px] text-[#888] mb-2 text-justify">
                Pricing of job posts and extra features is dynamic and may change based on 
                how many jobs are posted every week, for example to avoid too many sticky 
                jobs at one time. Sticky posts are limited to max 2 per company at one time. 
                Job posts are a) published for 30 days, b) cannot be refunded, and 
                c) renew automatically after 30 days unless you 1) disable auto renew after 
                posting on the edit page, or 2) close your job post on the edit page. 
                We send a reminder 7 days by email before renewing. Renewing is the same price 
                as the original job post for 30 days. If you buy a bundle, the discounted single 
                job post price is used to renew. Automatic renewals can be self-refunded within 
                7 days after renewing with the link in the email.
            </div>
        </Group>
    );
}