import React, { useEffect, useState } from 'react'


function Leaderboard() {

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://fundraisingportal-1675.onrender.com/leaderboard')
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <>
      <div className='p-6 flex justify-center'>

        <div className='bg-purple-200 flex flex-col items-center border-2 border-purple-200 rounded-lg h-180 w-150'>
          <img className='border-2 border-white w-40 h-40 bg-black rounded-full ' src="https://cdn-icons-png.flaticon.com/512/4329/4329449.png" alt="" />
          <br />
          <h1 className='text-2xl pl-3 font-bold pt-10'>Name: Kanishka Joshi</h1>
          <h1 className='text-2xl pl-3 font-bold flex'>Rank:2 <img className='w-10' src="https://cdn-icons-png.freepik.com/256/14457/14457445.png?semt=ais_hybrid" alt="" /></h1>
          <h1 className='text-2xl pl-3 font-bold'>Donation Raised: 12,000 Rs</h1>
        </div>

        <div className='flex flex-col pl-5 h-180 w-150'>

          <div className='flex flex-row font-bold border-2 w-100 p-5 sm:p-6 md:p-5 lg:w-180 rounded-lg justify-between'>
            <h1>RANK</h1>
            <h1>NAME</h1>
            <h1>INTERN ID</h1>
            <h1>POINTS</h1>
          </div>

          <div className="p-3 w-100 lg:w-180 m-3">
            
            {leaders.map((entry) => (
              <div
                key={entry.rank}
                className={`flex m-2 justify-between pl-3 pb-5 bg-white shadow-lg rounded-lg border-l-4 ${entry.rank === 100 ? 'border-green-500' : 'border-yellow-400'
                  }`}
              >
                <h2 className="text-xl font-bold">{entry.rank}</h2>
                <h2 className="text-xl font-bold pl-6">{entry.name}</h2>
                <p className="text-gray-600 pl-7">ID: {entry.id}</p>
                <p className={`font-semibold pl-7 ${entry.rank === 100 ? 'text-green-700' : 'text-blue-700'}`}>
                  Points: {entry.points}
                </p>
              </div>
            ))}
          </div>


        </div>

      </div>
    </>
  )
}

export default Leaderboard
