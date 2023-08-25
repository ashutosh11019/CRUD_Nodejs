import mongoose from "mongoose"

const connectDB = async (MONGO_URL) => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Server Connected")
    } catch (error) {
        console.log("error")
    }
}

export default connectDB