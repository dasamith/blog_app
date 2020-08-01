const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        default: ""
    },
});

const blog = mongoose.model("Blog", blogSchema);

module.exports = blog;
