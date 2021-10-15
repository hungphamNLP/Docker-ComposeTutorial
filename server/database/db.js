const mongoose = require("mongoose");

const connectToDB = async () => {
    const connect = await mongoose.connect(`mongodb://localhost:27017/library`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = connectToDB;
