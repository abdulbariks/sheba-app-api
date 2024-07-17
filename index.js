const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors(), express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
// const objectid = require("mongodb").ObjectId;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri =
  "mongodb+srv://sheba:2238522385@cluster0.9uorkol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client.connect((err) => {
  const usersCollection = client.db("sheba").collection("users");

  app.post("/user", async (req, res) => {
    const user = req.body;

    console.log(req.body);

    await usersCollection.insertOne(user, (err, result) => {
      err &&
        res.send({
          status: false,
          message: "an error ,Pleasse try again later",
        });
      result &&
        res.send({
          status: true,
          message: "User created Successfully",
          user,
        });
    });
  });
  err ? console.log(err) : console.log("MongoDB Connected");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
