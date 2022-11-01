const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Department = require('./models/department');
const Employee = require('./models/employee');

mongoose.connect('mongodb://localhost:27017/ITCompany', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('It worked')
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('homePage');
})

//department
app.post('/departments', async (req,res) => {
    const username = req.body.username
    const departments = await Department.find({})
    res.render('department/index', { departments , username});
})

app.get('/departments/:id', async (req,res) => {
    const { id } = req.params
    const foundDepartment = await Department.findOne({code: id})
    res.render('department/show', { foundDepartment })
})

//employee
app.get('/employees/:code/new', async (req,res) => {
    const { code } = req.params;
    const department = await Department.findOne({code: code})
    res.render('employee/new', { code, department })
})

app.post('/employees', async (req,res) => {
    const code = req.body.depCode
    const latestEmployee = await Employee.find({depCode: code}).sort({ssn: -1}).limit(1);
    latestssn = latestEmployee[0]._doc.ssn
    let newobj = req.body
    newobj.ssn = latestssn + 1
    const newEmployee = new Employee(newobj)
    await newEmployee.save()
    res.redirect(`/employees/${code}`)
})

app.get('/employees/:code', async (req,res) => {
    const { code } = req.params
    const department = await Department.findOne({code: code})
    const employees = await Employee.find({depCode: code})
    res.render('employee/show', { employees, code, department })
    
})

app.post('/employees/:code', async (req,res) => {
    const { code } = req.params
    const department = await Department.findOne({code: code})
    if(req.body.position === 'all' && req.body.condition === 'all'){
        const employees = await Employee.find({depCode: code})
        res.render('employee/show', { employees , code, department })
    }
    else if(req.body.condition === 'all'){
        const employees = await Employee.find({position: req.body.position, depCode: code})
        res.render('employee/show', { employees , code, department })
    }
    else if(req.body.position === 'all'){
        year = 2022 - req.body.age
        if(req.body.condition === 'gte'){
            const employees = await Employee.find({ dob: { $lte: `${year}-01-01`}, depCode: code});
            res.render('employee/show', { employees , code, department })
        }
        else{
            const employees = await Employee.find({ dob: { $gte: `${year}-01-01`}, depCode: code});
            res.render('employee/show', { employees , code, department })
        }
    }
    else{
        year = 2022 - req.body.age
        if(req.body.condition === 'gte'){
            const employees = await Employee.find({ dob: { $lte: `${year}-01-01`}, depCode: code, position: req.body.position});
            res.render('employee/show', { employees , code, department })
        }
        else{
            const employees = await Employee.find({ dob: { $gte: `${year}-01-01`}, depCode: code, position: req.body.position});
            res.render('employee/show', { employees , code, department })
        }
    }
    
})

app.get('/employees/edit/:ssn', async (req,res) => {
    const { ssn } = req.params
    const employee = await Employee.findOne({ssn: ssn})
    const department = await Department.findOne({code: employee.depCode})
    res.render('employee/edit', { employee , department })
})

app.put('/employees/:id', async (req,res) => {
    const { id } = req.params
    const employee = await Employee.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/employees/${employee.depCode}`)
})

app.delete('/employees/:id', async (req,res) => {
    const { id } = req.params
    const deletedEmployee = await Employee.findByIdAndDelete(id)
    res.redirect(`/employees/${deletedEmployee.depCode}`)
})

app.use((req,res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(4269, () => {
    console.log('Port 4269 is listening');
})