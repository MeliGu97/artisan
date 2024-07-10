const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Furniture =  require('./furniture');
const Material =  require('./material');
const User =  require('./user');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/artisan', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Route pour récupérer les matériaux
app.get('/api/materials', async (req, res) => {
    try {
      const materials = await Material.find();
      res.json(materials);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // Route pour récupérer les meubles
app.get('/api/furnitures', async (req, res) => {
  try {
    const furnitures = await Furniture.find().populate('materialsId');
    console.log(furnitures);
    res.json(furnitures);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
