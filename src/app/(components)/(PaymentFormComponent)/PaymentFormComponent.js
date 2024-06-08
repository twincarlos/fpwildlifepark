"use client";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "../actions/action";

export function PaymentFormComponent() {
    return (
        <PaymentForm
            applicationId={appId}
            locationId={locationId}
            cardTokenizeResponseReceived={async (token) => {
                const result = await submitPayment(token.token);
                console.log(result);
            }}>
            <CreditCard />
        </PaymentForm>
    );
};