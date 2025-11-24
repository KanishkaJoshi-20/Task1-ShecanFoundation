const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});


app.get('/user', (req, res) => {
  res.json({
    name: 'Kanishka Joshi',
    age: 21,
    level: 'Intermediate',
    referralCode: 'KANISHKA2025',
    points: 8500
  });
});

app.get('/leaderboard', (req, res) => {
  res.json([
    { rank: 1, name: 'Ananya Mehta', id: 'FR2025INT001', points: 1480 },
    { rank: 2, name: 'Kanishka Joshi', id: 'FR2025INT002', points: 1200 },
    { rank: 3, name: 'Priya Verma', id: 'FR2025INT003', points: 1110 },
    { rank: 4, name: 'Arjun Patel', id: 'FR2025INT004', points: 1020 },
    { rank: 5, name: 'Sneha Gupta', id: 'FR2025INT005', points: 985 },
    
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
