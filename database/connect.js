import {mongoose} from "mongoose"



const connectDb = async () => {
    try {
       const { connection } = await mongoose.connect(process.env.MONGO_URL)

       if (connection.readyState === 1) {
        console.log('Database connected')
       }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectDb;