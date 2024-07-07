import mongoose from 'mongoose'

export const connectDb = async () => {
  const uri: string = process.env.DB_URI || ''
  try {
    await mongoose.connect(uri)
  } catch (error) {
    console.error('DB接続に失敗しました')
    console.error(error)
    throw new Error()
  }
}
