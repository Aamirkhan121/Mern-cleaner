const cors = require('cors');
const express = require('express');
const Connected = require('./dist/db');
const Router = require('./routers/Article-route');
const ContactRouter = require('./routers/contact-route');
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://mern-cleaner-1.onrender.com"], // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowing necessary methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowing headers you need
};

app.use(cors(corsOptions));

app.use(express.json());

// connected mongodb

Connected();
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// create route
app.use('/api', Router);
app.use("/api",ContactRouter);



app.listen(5000, () => {
  console.log('Server listening on http://localhost:5000');
});
