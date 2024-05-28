import Review from "../common/Review";

export default function Feedback() {
    const highlighted = 'bg-[#fff38f] font-bold p-1 rounded-[5px] text-black';

    const feedbacks = [
        {
            author: "Edwin",
            authorURL: "https://twitter.com/edwinwee",
            company: "Stripe",
            picture: "https://remoteok.com/assets/testimonial-edwin-stripe-3.jpeg",
            companyLogo: "https://logo.clearbit.com/stripe.com",
            companyURL: "https://stripe.com",
            position: "CMO",
            children: `
                <span class="${highlighted}">
                    "The response has been amazing! A lotttt of applicants.
                </span>
                &nbsp;
                Thank you, and everything Remote OK did, to help with this!"
            `,
        },
        {
            author: "Andy",
            authorURL: "https://twitter.com/andygcook",
            company: "Tettra",
            picture: "https://remoteok.com/assets/testimonial-andy-tettra.jpg",
            companyLogo: "https://logo.clearbit.com/tettra.com",
            companyURL: "https://tettra.com",
            position: "CEO",
            children: `
                "I want to say that
                <span class="${highlighted}">having 1,500 applicants to sort through</span>
                is a good problem to have and thanks to y'all for making that happen"
            `,
        },
        {
            author: "Sara",
            authorURL: "https://linkedin.com/in/sara-krumminga-582a6524",
            company: "Komoot",
            picture: "https://remoteok.com/assets/testimonial-sara-komoot-2.jpg",
            companyLogo: "https://logo.clearbit.com/komoot.com",
            companyURL: "https://komoot.com",
            position: "Recruitment",
            children: `
                "Remote OK has been
                <span class="${highlighted}">an essential platform</span>
                for attracting great talent to our remote-first company"
            `,
        },
        {
            author: "Tris",
            authorURL: "https://twitter.com/trisrevill",
            company: "Aula Education",
            picture: "https://remoteok.com/assets/testimonial-tris-aula.jpg",
            companyLogo: "https://logo.clearbit.com/aula.education",
            companyURL: "https://aula.education",
            position: "Global Sourcing Lead",
            children: `
                "FYI - 
                <span class="${highlighted}">We are loving the performance of the job ads</span>,
                we have had so many great applicants. Thank you for your great work on building
                this job board :)"
            `,
        },
        {
            author: "Zsolt",
            authorURL: "https://twitter.com/kocsmy",
            company: "PingPong",
            picture: "https://remoteok.com/assets/testimonial-zsolt.jpeg?1708185060",
            companyLogo: "https://logo.clearbit.com/hellopingpong.com",
            companyURL: "https://hellopingpong.com",
            position: "Founder & CEO",
            children: `
                "I love the site, I tried so many different job sites and
                <span class="${highlighted}">RemoteOK is by far the best to deliver</span>"
            `,
        },
        {
            author: "Baptiste",
            authorURL: "https://twitter.com/baptistejamin",
            company: "Crisp Chat",
            picture: "https://remoteok.com/assets/testimonial-baptiste-crisp.jpg",
            companyLogo: "https://logo.clearbit.com/crisp.chat",
            companyURL: "https://crisp.chat/",
            position: "Founder & CEO",
            children: `
                "We super like Remote OK.
                <span class="${highlighted}">We had around 100 applicants</span>
                for our previous job post, so we are doing a new one :)"
            `,
        },
        {
            author: "Ken",
            authorURL: "https://twitter.com/kenyarmosh",
            company: "Savvy",
            picture: "https://remoteok.com/assets/testimonial-ken-savvy.jpg",
            companyLogo: "https://logo.clearbit.com/savvyapps.com",
            companyURL: "https://savvyapps.com/",
            position: "CEO",
            children: `
                "Awesome, you rock!
                <span class="${highlighted}">Your customer support is a perfect
                example of why I stick with your site</span>
                as our "go-to" job board..."
            `,
        },
        {
            author: "Peter",
            authorURL: "https://twitter.com/peterbenei",
            company: "KISSPatent",
            picture: "https://remoteok.com/assets/testimonial-peter-benei.png",
            companyLogo: "https://logo.clearbit.com/kisspatent.com",
            companyURL: "https://kisspatent.com/",
            position: "COO",
            children: `
                "Hey Pieter, just a quick shout out to your amazing stuff at Remote OK - 
                we posted 2 jobs in the recent month now, and a quick feedback on the 
                applicants: we not just getting a ton of them, but 
                <span class="${highlighted}">people coming from Remote OK are much much 
                much more valid and higher quality</span>
                compared to people coming from LinkedIn, Angel, VirtualVocations, 
                Remotive, or Indeed, as we posted our jobs there too. So big fan of 
                Remote OK, the last job was only posted there. Thanks for the good stuff!"
            `,
        },
        {
            author: "Alex",
            company: "Crossover",
            picture: "https://remoteok.com/assets/testimonial-crossover.jpg",
            companyLogo: "https://logo.clearbit.com/crossover.com",
            companyURL: "https://crossover.com/",
            position: "Global Sourcing Strategist",
            children: `
                "Thank you for the collaboration, it was a pleasure working with you
                and with Remote OK. It was
                <span class="${highlighted}">the best job board targeted at remote
                professionals in terms of results.</span>"
            `,
        },
    ];

    return (
        <>
            {
                feedbacks.map((feedback, key) => 
                    <Review 
                        key={key} isFirst={key == 0}
                        author={feedback.author}
                        authorURL={feedback.authorURL}
                        company={feedback.company}
                        picture={feedback.picture}
                        companyLogo={feedback.companyLogo}
                        companyURL={feedback.companyURL}
                        position={feedback.position}

                    >
                        {feedback.children}
                    </Review>
                )
            }
        </>
    );
}
