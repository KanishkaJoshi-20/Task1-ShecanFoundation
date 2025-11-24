import React, { useEffect, useState } from 'react' 

function Dashboard() {
    
    const [userData, setUserData] = useState(null);

useEffect(() => {
  fetch('https://fundraisingportal-1675.onrender.com/user')
    .then((res) => res.json())
    .then((fetchedData) => {
      console.log("Fetched Data:", fetchedData); // see output
      setUserData(fetchedData); // ✅ set correct data
    })
    .catch((err) => console.error("Fetch error:", err));
}, []);

    return (
        <>
            <div className='flex justify-center items-center min-h-screen bg-gray-300'>

                <div className='bg-white border-2 border-gray-200 h-180 w-150'>
                    <img className='border-2 border-white w-40 h-40 bg-black rounded-full' src="https://cdn-icons-png.flaticon.com/512/4329/4329449.png" alt="" />
                    <br />
                    <h1 className='text-2xl pl-3 font-bold'>Name: {userData?.name}</h1>
                    <h1 className='text-2xl pl-3 font-bold'>Age: {userData?.age} years</h1>
                    <h1 className='text-2xl pl-3 font-bold flex'>Level:{userData?.level} <img className='w-10' src="https://cdn-icons-png.freepik.com/256/14457/14457445.png?semt=ais_hybrid" alt="" /></h1>
                    <h1 className='text-2xl pl-3 font-bold'>Donation Raised: {userData?.points} Rs</h1>
                </div>
                <div className='p-6 border-2 border-gray-200  w-200 h-180 sm:w-180 bg-white'>
                    <h1 className='text-3xl font-bold mb-4'>Welcome,{userData?.name}</h1>
                          <p className="mb-2">Referral Code: <span className="font-mono bg-gray-100 p-1 rounded">{userData?.referralCode}</span></p>
      <p className="mb-4">Total Donations Raised: <span className="font-semibold text-green-600">₹{userData?.points}</span></p>

      <h2 className="text-xl font-semibold mb-2">🏆 Rewards / Unlockables</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-yellow-100 p-4 rounded-lg shadow">Bronze Badge – ₹5,000</div>
        <div className="bg-yellow-200 p-4 rounded-lg shadow">Silver Badge – ₹10,000</div>
        <div className="bg-yellow-300 p-4 rounded-lg shadow">Gold Badge – ₹20,000</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard
