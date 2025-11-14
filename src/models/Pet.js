const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema ({
    name: { type: String, required: true },
    specie: { type: String, required: true },
    birthDate: { type: Date },
    adopted: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Pet', petSchema);