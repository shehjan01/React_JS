import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 rounded-lg p-8 w-96 bg-black">
        <h2 className="text-white text-center text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-3">

          <div className="flex flex-col">
            <label className="text-gray-400 font-medium text-sm mb-1">First Name</label>
            <input 
              required 
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="border text-white outline-none bg-transparent rounded-md border-emerald-600 text-sm px-3 py-1 placeholder-gray-400"
              type="text" 
              placeholder="Enter First Name" 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400 font-medium text-sm mb-1">Last Name</label>
            <input 
              required 
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="border text-white outline-none bg-transparent rounded-md border-emerald-600 text-sm px-3 py-1 placeholder-gray-400"
              type="text" 
              placeholder="Enter Last Name" 
            />
          </div>

           <div className="flex flex-col">
            <label className="text-gray-400 font-medium text-sm mb-1">Email</label>
            <input 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border text-white outline-none bg-transparent rounded-md border-emerald-600 text-sm px-3 py-1 placeholder-gray-400"
              type="email" 
              placeholder="Enter Email" 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400 font-medium text-sm mb-1">Password</label>
            <div className="relative">
              <input 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="border text-white outline-none bg-transparent rounded-md border-emerald-600 text-sm px-3 py-1 w-full placeholder-gray-400 pr-10"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 text-sm cursor-pointer"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button className="w-full border-none outline-none rounded-md bg-emerald-600 text-sm py-2 font-semibold mt-3">
            Sign Up
          </button>

          <p className="text-center text-gray-400 text-sm mt-2">
            Already have an account?  
            <Link to="/" className="text-blue-400 font-bold ml-1">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
