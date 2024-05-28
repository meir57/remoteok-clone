import Group from "../common/Group";
import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";
import FormMultiSelect from "../common/FormMultiSelect";

export default function JobBuilder() {
    const employmentTypes = [
        {text: "Full-time", value: "full-time"},
        {text: "Part-time", value: "part-time"},
        {text: "Contractor", value: "contractor"},
        {text: "Temporary", value: "temporary"},
        {text: "Internship", value: "internship"},
        {text: "Per diem", value: "per-diem"},
        {text: "Volunteer", value: "volunteer"},
        {text: "Onsite", value: "onsite"},
    ];

    const primaryTags = [
        {text: "Select a primary tag", value: ""},
        {text: "Software Development", value: "software-development"},
        {text: "Customer Support", value: "customer-support"},
        {text: "Sales", value: "sales"},
        {text: "Marketing", value: "marketing"},
        {text: "Design", value: "design"},
        {text: "Front End", value: "front-end"},
        {text: "Back End", value: "back-end"},
        {text: "Legal", value: "legal"},
        {text: "Testing", value: "testing"},
        {text: "Quality Assurance", value: "quality-assurance"},
        {text: "Non-Tech", value: "non-tech"},
        {text: "Other", value: "other"},
    ];

    const keywords = [
        "🤓 Engineer",
        "🤓 Developer",
        "💰 Finance",
        "♾️ Sys Admin",
        "☕️ JavaScript",
        "🍑 Backend",
        "🐀 Golang",
        "☁️ Cloud",
        "🚑 Medical",
        "🎨 Front End",
        "🥞 Full Stack",
        "♾️ Ops",
        "🎨 Design",
        "⚛️ React",
        "🔑 InfoSec",
        "🚥 Marketing",
    ];

    return (
        <div className="w-[100%] h-screen">
            <Group title="let's start">
                <FormInput 
                    id="company-name"
                    label="Company name"
                    placeholder="Company name"
                    info="Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc."
                    required={true}
                />
                <FormInput 
                    id="position"
                    label="Position"
                    placeholder="Position"
                    info={`
                        Please specify as single job position like "Marketing Manager" or "Node JS Developer", 
                        not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important 
                        but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple 
                        job posts. A job post is limited to a single job. We only allow real jobs, absolutely 
                        no MLM-type courses "learn how to work online" please.
                    `}
                    required={true}
                />
                <FormSelect 
                    label="Employment type"
                    id="employment-type"
                    name="employment-type"
                    options={employmentTypes}
                    required={true}
                />
                <FormSelect 
                    label="Primary tag"
                    id="primary-tag"
                    name="primary-tag"
                    options={primaryTags}
                    required={false}
                    info={`
                        This primary tag shows first and increases visibility in the main sections. 
                        Your job is shown on every page that is tagged with though. E.g. if you tag it as PHP, 
                        it shows for Remote PHP Jobs etc.
                    `}
                />
                <FormMultiSelect
                    label="Tags, keywords or stack"
                    id="stack"
                    name="stack"
                    options={keywords}
                    required={true}
                    info={`
                        Short tags are preferred. Use tags like industry and tech stack. 
                        The first 3 or 4 tags are shown on the site, the other tags aren't 
                        but the job will be shown on each tag specific page (like /remote-react-jobs). 
                        We also sometimes generate tags automatically after you post/edit to supplement.
                    `}
                />
            </Group>
        </div>
    );
}