import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema(
    {
        name:{type: String, required: true },
        class:{type: String, required: true },

        galaxyId: {type: ObjectId, required: true, ref: 'Galaxy'},

    },
    { timestamps: true, toJSON: { virtuals: true } }
)