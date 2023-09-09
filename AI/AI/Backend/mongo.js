const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://amitnavi7692:20169361amitnavi@cluster0.nvqanhf.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((err) => {
        console.log("failed");
        console.log(err);
    })

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const users = mongoose.model("users", newSchema)

module.exports = users;