import Navbar from "../Shared/Navbar";
import { Link } from 'react-router-dom';


const RegisterPage = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            {/* Register Page */}

            <div>
            <div className='mt-20'>
                <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl mb-10 font-semibold">Create a New Account</h1>
                    
                    </div>
                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="font-bold text-xl label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered  h-16" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl ">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered h-16" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className=" bg-black text-white text-xl p-4 rounded-xl hover:bg-gray-700 duration-300">Login</button>
                        </div>
                    </form>
                    
                    </div>
                    <h1 className='mt-10 text-xl font-semibold'>Dont have an Account? <Link className='text-blue-500' to='/register'>Register</Link>  Here</h1>
                </div>

            </div>

            

            </div>

            </div>
        </div>
    );
};

export default RegisterPage;