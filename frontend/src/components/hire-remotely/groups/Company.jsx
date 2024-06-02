import Group from "../../common/Group";
import FormInput from "../../common/FormInput";
import LabeledCheckbox from "../../common/LabeledCheckbox";
import FormTextArea from "../../common/FormTextArea";
import { useEffect, useState } from "react";

export default function Company() {
    const [payLater, setPayLater] = useState(false);

    const handlePayLater = (evt) => {
        setPayLater(evt.target.checked);
    }

    return (
        <Group title="Company">
            <FormInput
                id="company-twitter"
                label="Company twitter"
                placeholder="username"
                info="Twitter username without @. Not required, but used to tag your company 
                when we tweet out your job post."
            />
            <FormInput required
                id="company-email"
                label="Company email (stays private, for invoice + edit link)"
                info="
                Make sure this email is accessible by you! We use this to send the invoice 
                and edit link. We can not and do not manually resend it! If you use your 
                company domain (same as company name), we will show a [ Verified ] tag on 
                your job post."
            />
            <FormInput
                id="invoice-email"
                label="Invoice email (stays private)"
                info="We send a copy of the invoice and edit link to here too. You can write 
                your finance department or accountant expenses email here so they get a copy 
                of the invoice for your bookkeeping."
            />
            <FormTextArea required
                id="invoice-address"
                label="Invoice address"
                placeholder="e.g. your company's full name and full invoice address, including building, street, city and country; also things like your VAT number, this is shown on the invoice."
                info="Specify your company address here and we'll put it on your invoice for your bookkeeping. 
                Be sure to [ Save changes ] in bottom right after editing your invoice address. 
                Then it'll be instantly updated on the invoice."
            />
            <FormInput
                id="invoice-notes-number"
                label="Invoice notes / PO number"
                placeholder="e.g. PO number 1234"
                info="Not required. Add notes here that you'd like to see on the invoice/receipt 
                such as a Purchase Order number or any other internal notes you need for reference. 
                You can add or edit this later."
            />
            <LabeledCheckbox
                id="pay-later"
                label="Pay later"
                info="Need to get approval for this payment? Or send the invoice to your finance 
                department first? No problem, we'll save your job post and send you (and your finance 
                department below) a payment link. Once it's paid we immediately publish it!"
                onClick={handlePayLater}
            >
                I'd like to pay later
            </LabeledCheckbox>
            { payLater && <FormInput required
                id="pay-later-email"
                label="Pay later email"
                placeholder="Pay later email address"
                info="We will send a link to pay for this job to this email address."
                className="mt-6"
            /> }
        </Group>
    );
}