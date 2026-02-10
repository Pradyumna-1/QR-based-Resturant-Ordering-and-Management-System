const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true,
        },

        description: {
            type: String,
            trim: true,
        },

        // controls display order in menu UI
        order: {
            type: Number,
            default: 0,
        },

        // hide/show entire category
        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true, // createdAt & updatedAt
    }
);

module.exports = mongoose.model("Category", categorySchema);
