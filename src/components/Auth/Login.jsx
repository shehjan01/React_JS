import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 rounded-lg p-6 w-80 sm:w-96 bg-black">
        <h2 className="text-white text-center text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-3">
          <div className="flex flex-col">
            <label className="text-gray-400 font-medium text-sm mb-1">Email</label>
            <input 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border text-white outline-none bg-transparent rounded-md border-emerald-600 text-sm px-3 py-2 placeholder-gray-400"
              type="email" 
              placeholder="Enter Email" 
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-gray-400 font-medium text-sm mb-1">Password</label>
            <input 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="border text-white outline-none bg-transparent rounded-md border-emerald-600 text-sm px-3 py-2 placeholder-gray-400 w-full pr-12"
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter Password" 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-gray-400 bg-transparent hover:text-white focus:outline-none"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button className="w-full border-none outline-none rounded-md bg-emerald-600 text-sm py-2 font-semibold mt-3">
            Log in
          </button>

          <p className="text-center text-gray-400 text-sm mt-2">
            Don't have an account?  
            <Link to="/signup" className="text-blue-400 font-bold ml-1">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
