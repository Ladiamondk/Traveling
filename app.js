
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('')
const app = express('dotenv');
dotenv.config();

mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:String,
  email:String,
  password:String,
  consent:String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Hello word');
});
app.post('/register', async (req, res)=>{
  const{username, email, password, consent} = req.body;
try {
    const newUser = new User({
      username: username,
      email: email,
      password: password,
      consent: consent,
    });
  
    await newUser.save();
    res.send('User registered successfully!')
  } catch(error){
    console.error(error);
    res.send('Error: User registration failed.')
  }
});
const CONNECT = process.env.CONNECT;
mongoose.connect(CONNECT);
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})