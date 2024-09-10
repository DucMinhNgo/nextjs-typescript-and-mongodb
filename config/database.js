import mongoose from "mongoose";
import { MongoClient } from "mongodb";

// const connectDB = async () => {
//   if(mongoose.connections[0].readyState){
//     return true;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Mongodb connected')
//     return true;
//   } catch (error) {
//     console.log(error)
//   }
// }
const uri = process.env.MONGODB_URI;
// const dbName = process.env.NEXT_PUBLIC_DB_NAME;
let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to the .env file.");
}

// if (!dbName) {
//   throw new Error("Please add your Database Name to the .env file.");
// }

client = new MongoClient(uri);
clientPromise = client.connect();

export async function connectToDatabase() {
  // try {
  const client = await clientPromise;
  const db = client.db(dbName);
  // console.log("Connect to database successfully");
  return { db, client };
  // } catch {
  //   console.log("Connect to database failed");
  // }
}

export default connectToDatabase;