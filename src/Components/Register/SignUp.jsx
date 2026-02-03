import { useState } from "react";
import { NavLink } from "react-router";
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {

    const [formError, setFormError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmed_password = e.target.confirmed_password.value;
        const terms = e.target.terms.checked;
        setFormError(null);
        setSuccess(null);


        if(password.length < 6){
            setFormError('please type more then 6 characters');
            return;
        }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
            setFormError("Password must contain uppercase, lowercase, number, and special character!");
            return;
        }

        if(password !== confirmed_password){
            setFormError("Password and Confirm Password do not match");
            return;
        }

        if(!terms){
            setFormError("Please accept the terms and conditions");
            return;
        }



        // Signup With Email And Password


        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setSuccess('Registered Successfully!');
            e.target.reset(); // optional: clear the form
        })
        .catch(error => {
            console.error(error.message);
            setFormError(error.message);
        });

     
        console.log(name,email,password,confirmed_password,terms);
    }


    return (
        

        <div>
            <form className="space-y-4 max-w-md" onSubmit={handleRegister}>
                {/* Continue with Google */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100"
                >
                    <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                    />
                    <span className="text-sm font-medium">Continue with Google</span>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="text-xs text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Enter password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmed_password"
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Terms */}
                <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" name="terms" required className="w-4 h-4" />
                    <span>Are you agree with our terms and condition</span>
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4">
                    <NavLink to="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</NavLink>

                    <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                    Register
                    </button>
                </div>
            </form>
            {
                formError ? 
                    <p className="text-red-600">{formError}</p> :
                    <p className="text-green-600">{success}</p>
            }
            
        </div>


    );
};

export default SignUp;