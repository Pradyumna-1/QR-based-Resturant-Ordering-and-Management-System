const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    role: {
        type: String,
        enum: ['ADMIN', 'CHEF'],
        default: 'CHEF'
    }
    ,
    active: {
        type: String,
        default: true
    },


},
    { timestamps: true }

)
// Hashed password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 12)
    next()
})


// Compared Password


userSchema.methods.comparePassword = async function (psd) {
    return bcrypt.compare(psd, this.password)
}

module.exports = mongoose.model('User', userSchema)