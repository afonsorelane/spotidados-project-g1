export const Register = () => {
       return(
        <>
            <div className=
            "px-10 py-20 min-h-screen bg-cover bg-center bg-radial-[at_20%_95%] from-purple-950 via-fuchsia-800 to-purple-950 text-white">
                <div>
                <h1 className = "font-bold text-2xl mt-18">Sign Up</h1>
                <p className="font-normal text-lg mt-2">Already have an account?  
                    <a href="/login" target="_blank" className="font-medium">
                    Sign in</a></p>
                </div>

                <form className="mt-8">
                    <input className="w-full rounded-xl p-4 bg-transparent text-white border mt-4"
                    type="text" placeholder="First Name" required/>
                    <input className="w-full rounded-xl p-4 bg-transparent text-white border mt-4"
                    type="text" placeholder="Last Name" />
                    <input className="w-full rounded-xl p-4 bg-transparent text-white border mt-4"
                    type="text" placeholder="Country" />
                    <input className="w-full rounded-xl p-4 bg-transparent text-white border mt-4"
                    type="email" placeholder="Email or Phone" />
                    <input className="w-full rounded-xl p-4 bg-transparent text-white border mt-4"
                    type="password" placeholder="Password" required/>
                </form>

                <div>
                    <button className="w-full bg-gray-900 rounded-xl p-4 mt-4">
                        Create Account
                    </button>
                </div>
            </div>
        </>
    )
}



<div>
  <p>
    
  </p>
</div>