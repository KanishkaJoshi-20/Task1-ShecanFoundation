import React from 'react'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4
    bg-linear-to-t from-sky-500 to-indigo-500">
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        
        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Login
        </button>

        <h3>
          New to Portal, Create a account,
        <a className='pl-2 underline text-blue-600' href="#">Click here</a>
        </h3>
      </div>
    </div>
  );
}




export default Login