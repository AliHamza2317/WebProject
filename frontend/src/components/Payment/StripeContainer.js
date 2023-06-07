
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import React from "react";



const PUBLIC_KEY="pk_test_51N5keOESFgqQlsyzjuumWLQod1gxAVLkcOq7PKal3VZfisb01mY42hXtbJcwSDVDTjiSG27DHk0rf2c9p2w6IT0400PJQJxJ4A"

const stripeTestPromise= loadStripe(PUBLIC_KEY)

export default function StripeContainer()
{
    return(

       <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
       </Elements>
    )
}