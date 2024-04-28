const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Collection = mongoose.model('Task', taskSchema);

module.exports = Collection;
