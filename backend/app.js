const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();
const cors = require("cors");
//!Connect to mongodb
mongoose
 .connect("mongodb+srv://Haritha:Haritha1234@mongo4961.h9x21.mongodb.net/")
 .then(() => console.log("DB Connected"))
 .catch((e) => console.log(e));
 //!Middlewares
 app.use(express.json()); //?pass incoming jason data
 app.use(cors());
//!Routes
app.use("/",userRouter);
app.use("/",categoryRouter);
app.use("/",transactionRouter);
//!Error 
app.use(errorHandler);

//!Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);



