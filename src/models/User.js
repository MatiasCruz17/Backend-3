const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }]
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model ('User', userSchema);
