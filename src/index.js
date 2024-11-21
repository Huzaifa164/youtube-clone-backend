import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
.then(() => {
    app.on("error", () => {
        console.log("App initialisation failed ", error);
        process.exit(1);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGODB connection failed !!! ", error);
})





















// import express from "express";

// const app = express();

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw error;
//   }
// };
