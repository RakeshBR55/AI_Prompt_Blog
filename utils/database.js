import mongoose from "mongoose";
let isConnected = false

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
 

  if (isConnected) {
    console.log("=> mongoose is already connected");
    return;
  }

  try {
    
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Promptverse",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("=> mongoose is connected");
  } catch (error) {
    console.log("=> mongoose connection failed");
    console.log(error);
  }
};
