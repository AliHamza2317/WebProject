import React from "react";

import StripeCheckout from "react-stripe-checkout"

const Checkout=()=>{

    const onToken=(token)=>{
        console.log(token)
    }
    return(
        <div>
            <StripeCheckout 
            token={onToken}
            stripeKey="pk_test_51N5keOESFgqQlsyzjuumWLQod1gxAVLkcOq7PKal3VZfisb01mY42hXtbJcwSDVDTjiSG27DHk0rf2c9p2w6IT0400PJQJxJ4A"
            />
        </div>
    )
}



export default Checkout