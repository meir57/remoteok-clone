import JobListing from "../JobListing";
import Filter from "./Filter";

export default function Content() {
    return (
        <>
            <Filter />
            <JobListing />
        </>
    );
}