const mongoose = require('mongoose')

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    description: String,
    price: {
        type: Number,
        required: true
    },

    image: String,

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },

    availableQuantity: {
        type: Number,
        default: 0,
        min: 0
    }
    ,
// Veg/ NonVeg
    dietaryType: {
      type: String,
      enum: ["VEG", "NON_VEG"],
      required: true,
      index: true,
    },


    isAvailable: {
        type: boolean,
        default: true
    },
    prepTime: {
        type: String
    },

    availableFrom: String, // "07:00"
    availableTo: String,

    active: {
        type: String,
        default: true
    }

},
    { timestamps: true }
)
module.exports = mongoose.model('Dish', dishSchema);