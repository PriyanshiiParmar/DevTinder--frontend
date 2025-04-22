const RefundPage = () =>{
    return(
        <div>
            <div className="p-10">
            <h1 className="font-bold text-3xl text-center m-3 p-2">💸 Refund & Cancellation Policy
            </h1>
            <p className="p-2 text-xl">At At DevTinder, we strive to deliver a smooth and reliable experience to every user. Our refund and cancellation policy is designed to ensure transparency and fairness for all.</p>

            <div className="m-2">
            <h2 className="font-bold text-xl ">Refund Policy:            </h2>
            <p>Refunds will only be considered in the following cases:</p>
            <p>- Duplicate payment was made.</p>
            <p>- Technical errors caused an invalid charge.</p>
            <p>- You purchased a service but the platform failed to deliver (example: service failure due to system error).</p>
            <p>Refund requests will be reviewed on a case-by-case basis. If your request is approved, the amount will be refunded to your original payment method within 5 to 7 working days.</p>
            </div>


            <div className="m-2">
            <h2 className="font-bold text-xl ">Subscription Cancellation:
</h2>
            <p>You can cancel your DevTinder subscription anytime by visiting your account settings. Once canceled, you will still have access to premium features until the current billing cycle ends. After that, no further payments will be deducted.</p>
            </div>

            <div className="m-2">
            <h2 className="font-bold text-xl ">Non-Refundable Situations:
</h2>
<p>Refunds will only be considered in the following cases:</p>
            <p>- Change of mind after purchase.</p>
            <p>- Dissatisfaction due to third-party interactions (DevTinder only provides the platform, not the outcome of user connections).</p>
            <p>- Cancellation of subscription after a payment has been successfully processed (but before the end of the billing cycle).</p>
            </div>
            <p>For any issues or clarification, please email us at support@devtinder.com . Our team is committed to resolving disputes as quickly as possible.</p>
        </div>
        </div>
    )
}

export default RefundPage;