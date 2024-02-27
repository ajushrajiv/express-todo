const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { AppRouter } = require("./src/routes");
const todoSequelize = require("./src/database/setup/database");

const { PORT } = process.env

const app = express();
app.use(bodyParser.json());

app.use(cors());

todoSequelize.sync()
    .then(()=>{
        console.log("DB has been initialized")
    })
    .catch((e)=>{
        console.log(e);
    })

app.use("/v1", AppRouter);

app.listen(PORT,()=>{
    console.log(`App listening from port ${PORT}`);
})