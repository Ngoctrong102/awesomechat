import mongoose, { model } from 'mongoose';

let Schema = mongoose.Schema;

let ChatGroupSchema = new Schema({
    sender: {
        id: String,
        username: String,
        avatar: String
    },
    receiver: {
        id: String,
        username: String,
        avatar: String
    },
    type: String,
    content: String,
    isRead: { type: Boolean, default: false },
    createdAt: { type: Number, default: Date.now },
});

model.exports = mongoose.model("chat-group", ChatGroupSchema);