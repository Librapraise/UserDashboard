import mongoose from "mongoose";
import { stringify } from "postcss";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        min: 6,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },

    img: {
        type: String,
    },

    createdAt: {
        type: Date,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    isActive: {
        type: Boolean,
        default: true,
    },
}, {timestamps: true}
);


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    desc: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
    },

    color: {
        type: String,
    },
    size: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    img: {
        type: String,
    },
}, {timestamps: true}
);


export const User = mongoose.models.User ||  mongoose.model("User", userSchema);

export const Product = mongoose.models.Product ||  mongoose.model("Product", productSchema);