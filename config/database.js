import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const test = async() => {
  const client1 = new MongoClient(process.env.MONGODB_URI);
  const clientPromise = client1.connect();

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  return { db, client };
}

const connectDB = async () => {
  if(mongoose.connections[0].readyState){
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongodb connected')
    await test();
    console.log("TEST PASSED");
    return true;
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;