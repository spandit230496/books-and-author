const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bookRoutes = require("./routes/BookRoutes");
dotenv.config();

const connect = require("./db.js");
app.use(express.json());
app.use(cors())
app.options("*", cors());

app.use("/api/book", bookRoutes);







app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    connect();
});

