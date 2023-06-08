import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import "./payment.css"
import { useParams } from "react-router-dom"
import jwt_decode from "jwt-decode"; 
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const { bookingId } = useParams();  
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    let token=localStorage.getItem('token')
    const decodedToken = jwt_decode(token);
    const user_id=decodedToken.id;
    console.log(user_id)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        });
    
        if (!error) {
          try {
            const { id } = paymentMethod;
            const response = await axios.post(
              `http://localhost:3001/payment/addpayment/${bookingId}`,
              {
                id,
                user_id: user_id,
                amount: 1000,
                payment_method: "card",
                transaction_id: id,
                status: "paid",
              }
            );
    
            if (response.status === 201) {
              console.log("Successful payment");
              setSuccess(true);
            }
          } catch (error) {
            console.log("Error", error.response.data.error);
          }
        } else {
          console.log(error.message);
        }
      };
      

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup" id="form">
                <div className="FormRow" id="formrow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button id="butn">Pay</button>
        </form>
        :
       <div>
           <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
       </div> 
        }
            
        </>
    )
}