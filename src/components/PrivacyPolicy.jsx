const PrivacyPolicy = () =>{
    return(
        <div className="p-10">
            <h1 className="font-bold text-3xl text-center m-3 p-2">🧾 Privacy Policies</h1>
            <p className="p-2 text-xl">At DevTinder, we respect your privacy. Your personal and payment information is protected and only used to deliver our services. Payments are securely processed via Razorpay.</p>
            <h1 className="font-bold text-2xl p-2">Information We Collect:</h1>
            <ul>
                <li><span className="font-bold">- Personal Info:</span> Name, Email, Contact Number</li>
                <li><span className="font-bold">- Payment Info:</span> Securely processed via Razorpay</li>
                <li><span className="font-bold">- Usage Data:</span> Device Info, IP Address, Browser Type</li>
            </ul>
            <h1 className="font-bold text-2xl p-2">How We Use Your Information:</h1>
            <ul>
                <li>- To match you with the best developers & opportunities</li>
                <li>- To process secure payments for premium features</li>
                <li>- To improve the DevTinder user experience</li>
            </ul>
            <h1 className="font-bold text-2xl p-2">Data Security:</h1>
            <p className="m-2">All payment and personal data is encrypted and processed via trusted gateways like Razorpay.  We do not sell, rent, or share your data with any third party, except as required to complete your transactions or comply with the law.</p>
            <h1 className="font-bold text-2xl p-2">Contact Us:            </h1>
            <p className="m-2">Have questions? Reach us at: support@devtinder.com</p>
        </div>
    )
}

export default PrivacyPolicy;