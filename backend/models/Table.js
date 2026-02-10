const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: String,
        unique: true,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
    ,
    qrUrl: {
        type: String,

    },
    active: {
        type: Boolean,
        default: true
    }

},
    {
        timestamps: true //createdAt,, updatedAt
    })

module.exports = mongoose.model('Table', tableSchema)