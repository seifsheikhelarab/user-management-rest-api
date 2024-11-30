require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (err)=>{ console.error(err); });
db.once("open", ()=>{ console.log(`connected to database ${process.env.MONGO_URI}`); });


app.use(express.json());

const userRoutes = require("./routes/users");
app.use("/users",userRoutes);

app.get('/', (req, res) => res.send('Welcome to the user managment REST API, navigate to /users route to start!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));