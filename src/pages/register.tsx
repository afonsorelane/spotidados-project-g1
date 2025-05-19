export const Register = () => {
       return(
        <>
            <div>
                <h1 className = "font-extrabold">Sign Up</h1>
                <p >Already have an account?
                    <a href="/login" target="_blank">Sigin</a></p>
            </div>

            <form action="">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Lasst Name" />
                <input type="text" placeholder="Country" />
                <input type="email" placeholder="Email or Phone" />
                <input type="password" placeholder="Password" />
            </form>

            <div>
                <button className="cursor-pointer">
                    Create Account
                </button>
            </div>
        </>
    )
}