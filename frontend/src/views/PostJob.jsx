import Header from "../components/hire-remotely/Header";
import Content from "../components/hire-remotely/Content";
import JobPreview from "../components/hire-remotely/JobPreview";

import useTitle from "../hooks/useTitle";

export default function PostJob() {
    useTitle("Hire Remotely");
    
    return (
        <>
            <Header />
            <Content />
            <JobPreview />
        </>
    );
}