// Install the cors package
// npm install cors

import express from "express";
import cors from "cors";

const app = express();

// Use CORS with options
app.use(cors({
  origin: "http://localhost:3000", // Allow your frontend to make requests
  methods: ["GET", "POST"], // Specify allowed methods
  credentials: true, // Allow credentials (if needed)
}));

app.post('/api/contact', (req, res) => {
  // Your contact handling logic
  res.send('Contact form submitted');
});

// Start your server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
