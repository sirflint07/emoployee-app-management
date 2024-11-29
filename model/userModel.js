import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    avatar : String,
    salary: Number,
    date: String,
    status: String,
}, {timestamps: true})

const userModel = models.user || model('user', userSchema);

export default userModel;