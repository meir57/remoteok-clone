import Group from "../../common/Group";
import Job from "../../common/Job";

export default function Partner() {
    return (
        <Group title="From our partners (opens in new window)">
            <Job 
                url="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=60,height=60,quality=100/https://remoteok.com/assets/img/jobs/ccc57da2103a42b4dbdfe2ef4828d5db1716328814.png?1716328814"
                title="Senior Software Engineer"
                company="Nourish"
                facts = {["🇺🇸️ United States", "💰️ $60k - $110k"]}
                keywords = {["Software", "React", "Front End"]}
                time="2d"
                className="my-4"
                showButton
            />
        </Group>
    );
}