import Job from "../common/Job";

export default function JobListing() {
    return (
        <div className="w-[1100px] m-auto mb-[100px] mt-1">
            {(new Array(50).fill(null)).map((_, key) => <Job key={key} 
                url="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=60,height=60,quality=100/https://remoteok.com/assets/img/jobs/ccc57da2103a42b4dbdfe2ef4828d5db1716328814.png?1716328814"
                title="Senior Software Engineer"
                company="Nourish"
                facts = {["🇺🇸️ United States", "💰️ $60k - $110k"]}
                keywords = {["Software", "React", "Front End"]}
                time="2d"
            />)}
        </div>
    );
}