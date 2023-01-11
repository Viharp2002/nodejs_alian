require('dotenv').config({ path: './models/.env' });
require("./db/conn");
const port = process.env.PORT || 4500;

const express = require("express");
const app = express();

const router = require("./routers/router");
const cookieParser = require("cookie-parser");
const auth = require("./middlewares/auth"); //Note:If we remove cookie then it can't stay on that page ,it will return an error
const path = require("path");

const staticPath = path.join(__dirname, "../public");
const pathViews = path.join(__dirname, "../templates/views");
app.set("view engine", "hbs");
app.set("views", pathViews);

app.use(express.static(staticPath));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
    console.log("Success");
})