const { default: mongoose } = require("mongoose");
const bcrypt = require('bcryptjs');

const paymentSchema = mongoose.Schema({
    user: {
        type: Object,
    },
    data: {
        type: Array,
        default: [],
    },
    product: {
        type: Array,
        default: [],
    }

}, { timestamps: true })

const Payment = mongoose.model("User", paymentSchema);

module.exports = Payment;
