const TermsAndConditions = () =>{
    return(
        <div>
             <div className="p-10">
            <h1 className="font-bold text-3xl text-center m-3 p-2"> 📄Terms & Conditions
            </h1>
            <p className="p-2 text-xl">Welcome to DevTinder! By using our app, you agree to the following:</p>

            <div className="m-2">
            <h2 className="font-bold text-xl ">User Agreement:</h2>
            <p>- You agree to provide accurate information.</p>
            <p>- You are responsible for your interactions on the platform.</p>
            <p>- Misuse of the service may result in account suspension or termination.</p>
            </div>


            <div className="m-2">
            <h2 className="font-bold text-xl ">Eligibility:</h2>
            <p>You must be 18 or older and agree to comply with our guidelines for honest, respectful, and professional interactions.</p>
            </div>

            <div className="m-2">
            <h2 className="font-bold text-xl ">Payments:</h2>
            <p>All payments for premium services (like subscriptions or boosts) are securely handled via Razorpay.</p>
            </div>

            <div className="m-2">
            <h2 className="font-bold text-xl ">Liability:</h2>
            <p>We are not responsible for user behavior on the platform or third-party services.</p>
            </div>

            

            <div className="m-2">
            <h2 className="font-bold text-xl ">Governing Law:</h2>
            <p>This agreement is governed by the laws of Madhya Pradesh, India.</p>
            </div>
        
        </div>
        </div>
    )
}

export default TermsAndConditions;