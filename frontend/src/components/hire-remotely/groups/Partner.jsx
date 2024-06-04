import Group from "../../common/Group";
import PartnerPost from "../../common/PartnerPost";

export default function Partner() {
    return (
        <Group title="From our partners (opens in new window)">
            <PartnerPost
                url="https://via.placeholder.com/60"
                title="The first health insurance for remote startups"
                description="A fully equipped health insurance that works 
                for all your global contractors and employees"
                button="Sign Up"
                className="my-3 mb-6"
            />
        </Group>
    );
}