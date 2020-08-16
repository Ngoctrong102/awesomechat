import mongoose, { model } from 'mongoose';

let connectDB = () => {
    let DB_CONNECT = "mongodb";
    let DB_HOST = "localhost";
    let DB_PORT = 27017;
    let DB_NAME = "awesomechat";
    let DB_USERNAME = "";
    let DB_PASSWORD = "";

    let URI = `${DB_CONNECT}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

    return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
            if (err)
                console.log(err);
            else
                console.log("Connect DB success!")
        });
}

module.exports = connectDB;