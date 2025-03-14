import mongoose from "mongoose";

let initialized = false;
export const connect = async () => {
  mongoose.set('strictQuery', true);
  if (initialized){
    console.log("Monggoooo")
    return;
  }
  try{
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'next-blog',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("konek to mongo");
    initialized = true;
  } catch (error){
    throw new Error;
  }
}