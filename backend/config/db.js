import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
