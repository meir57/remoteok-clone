import Header from "../components/home/Header";
import Filter from "../components/home/Filter";
import JobListing from "../components/home/JobListing";
import MailingList from "../components/home/MailingList";
import About from "../components/home/About";

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Filter />
            <JobListing />
            <MailingList />
        </>
    );
}