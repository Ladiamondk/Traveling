const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ladiamondk:@registration.aatrzhn.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
