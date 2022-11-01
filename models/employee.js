const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ITCompany', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('It worked')
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })

const employeeSchema = new mongoose.Schema({
    ssn: {
        type: Number,
        required: true,
        min: 0,
    },
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date
    },
    depCode: {
        type: Number,
        min: 100,
        max: 400
    },
    email: {
        type: String
    },
    position: {
        type: String
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true,
        min: 50000
    }
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;