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

// Routes pour l'inscription et la connexion

app.post('/api/users/login', async (req, res) => {
  console.log("req.body : ", req.body)
  try {
      const { username, password } = req.body;
      console.log("username in  : ", username)
      const user = await User.findOne({ username });
      console.log("user : ", user)
      if (!user) {
          return res.status(400).send({ error: 'Invalid credentials' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).send({ error: 'Invalid credentials' });
      }
      const token = jwt.sign({ _id: user._id }, 'secretkey', { expiresIn: '1h' });
      res.send({ token });
  } catch (error) {
      res.status(400).send(error);
  }
});

app.post('/api/users/register', async (req, res) => {
  try {
      const { username, password } = req.body;
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).send({ error: 'Username already exists' });
      }
      const user = new User({ username, password });
      await user.save();
      const token = jwt.sign({ _id: user._id }, 'secretkey', { expiresIn: '1h' });
      res.send({ token });
  } catch (error) {
      res.status(400).send(error);
  }
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
    //console.log(furnitures);
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
