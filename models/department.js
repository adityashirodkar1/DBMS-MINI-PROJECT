const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ITCompany', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('It worked')
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })

const departmentSchema = new mongoose.Schema({
    code: {
        type: Number,
        required: true,
        min: 0
    },
    name: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    consists: {
        type: [String]
    }
})

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;