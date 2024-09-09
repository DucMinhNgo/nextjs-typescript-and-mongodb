'use server'

import PostModel from "@/models/postModel"
import connectDB from "@/config/database"

export async function getPosts(){
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await PostModel.find()));

    // throw new Error('Error!')
    console.log({data});

    return { data }
  } catch (error) {
    return { errMsg: error.message }
  }
}