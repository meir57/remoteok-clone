import FormTextArea from "../../common/FormTextArea";
import Group from "../../common/Group";

export default function FeedbackUs(props) {
    return (
        <Group title="Feedback about Remote OK">
            <FormTextArea
                id="feedback-about-us"
                label="Feedback box"
                info="This isn't part of the job post. If you have any feature requests or general 
                feedback about posting a job Remote OK, leave it here. Please be radically honest, 
                I'm always improving the site and act on your feedback fast. It's most important that 
                you're happy with the site and I want you to keep coming back to post here!"
            />
        </Group>
    );
}