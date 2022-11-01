const mongoose = require('mongoose');
const Employee = require('./models/employee');

mongoose.connect('mongodb://localhost:27017/ITCompany', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('It worked')
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })

//BACKEND TEAM
backObj = [
    {
        ssn: 20030501,
        name: 'Niti Sawant',
        dob: '1980-08-13',
        depCode: 200,
        email: 'NS_20030501@gmail.com',
        position: 'Middle-Stack Developer',
        address: 'Saki Naka',
        salary: 65000
    },
    {
        ssn: 20030502,
        name: 'Prathamesh Shah',
        dob: '1980-06-20',
        depCode: 200,
        email: 'PS_20030502@gmail.com',
        position: 'Backend Engineer',
        address: 'Dadar',
        salary: 58000
    },
    {
        ssn: 20030503,
        name: 'Karan kaur',
        dob: '1985-02-17',
        depCode: 200,
        email: 'KK_20030503@gmail.com',
        position: 'Middle-Stack Developer',
        address: 'Andheri',
        salary: 60000
    },
    {
        ssn: 20030504,
        name: 'Sahil Chaudhary',
        dob: '1990-09-21',
        depCode: 200,
        email: 'SC_20030504@gmail.com',
        position: 'Backend Engineer',
        address: 'Thane',
        salary: 68000
    },
    {
        ssn: 20030505,
        name: 'Pooja Joshi',
        dob: '1990-10-26',
        depCode: 200,
        email: 'PJ_20030505@gmail.com',
        position: 'Backend Engineer',
        address: 'Malad',
        salary: 75000
    },
    {
        ssn: 20030506,
        name: 'Aditya Shirodkar',
        dob: '1990-09-23',
        depCode: 200,
        email: 'AS_20030506@gmail.com',
        position: 'Team Leader',
        address: 'Goregaon',
        salary: 105000
    },
    {
        ssn: 20030507,
        name: 'Haridas Singh',
        dob: '1992-04-20',
        depCode: 200,
        email: 'HS_20030507@gmail.com',
        position: 'Middle-Stack Developer',
        address: 'Lokhandwala',
        salary: 80000
    },
    {
        ssn: 20030508,
        name: 'Krutika Shinde',
        dob: '1992-10-17',
        depCode: 200,
        email: 'KS_20030508@gmail.com',
        position: 'Backend Engineer',
        address: 'Dombivali',
        salary: 70000
    },
    {
        ssn: 20030509,
        name: 'Malay Phadke',
        dob: '1990-09-20',
        depCode: 200,
        email: 'MP_20030509@gmail.com',
        position: 'Backend Engineer',
        address: 'Malad',
        salary: 85000
    },
    {
        ssn: 20030510,
        name: 'Madhura Mate',
        dob: '1995-10-26',
        depCode: 200,
        email: 'MM_20030510@gmail.com',
        position: 'Middle-Stack Developer',
        address: 'Malad',
        salary: 65000
    }
]

//UX TEAM
uxObj = [
    {
        ssn: 10040701,
        name: 'Jay Bagwe',
        dob: '1984-07-17',
        depCode: 100,
        email: 'JB_20040001@gmail.com',
        position: 'Frontend Developer',
        address: 'High Sept',
        salary: 75000
    
    },
    {
        ssn: 10040702,
        name: 'Aryan Palande',
        dob: '1983-06-04',
        depCode: 100,
        email: 'AP_20040002@gmail.com',
        position: 'Team Leader',
        address: 'Highgarden',
        salary: 100000
    
    },
    {
        ssn: 10040703,
        name: 'Jash Chodhankar',
        dob: '1982-12-1',
        depCode: 100,
        email: 'JC_20040003@gmail.com',
        position: 'Frontend Developer',
        address: 'Newtulip',
        salary: 55000
    
    },
    {
        ssn: 10040704,
        name: 'Oberyn Martel',
        dob: '1979-05-23',
        depCode: 100,
        email: 'OM_20040004@gmail.com',
        position: 'UX Researcher',
        address: 'Dorne',
        salary: 69000
    
    },
    {
        ssn: 10040705,
        name: 'Jaime Lanister',
        dob: '1978-02-14',
        depCode: 100,
        email: 'JL_20040005@gmail.com',
        position: 'UX Researcher',
        address: 'Casterly Rock',
        salary: 72000
    
    },
    {
        ssn: 10040706,
        name: 'Ser Bron',
        dob: '1976-03-26',
        depCode: 100,
        email: 'SB_20040006@gmail.com',
        position: 'UX Researcher',
        address: 'Blackwater Bay',
        salary: 84000
    
    },
    {
        ssn: 10040707,
        name: 'Cersie Lanister',
        dob: '1979-08-11',
        depCode: 100,
        email: 'CL_20040007@gmail.com',
        position: 'Frontend Developer',
        address: "King's Landing",
        salary: 80000
    
    },
    {
        ssn: 10040708,
        name: 'Robert Baratheon',
        dob: '1975-04-19',
        depCode: 100,
        email: 'RB_20040008@gmail.com',
        position: 'UX Researcher',
        address: `Boar's Cave`,
        salary: 77000
    
    },
    {
        ssn: 10040709,
        name: 'Gregor Clegane',
        dob: '1975-08-17',
        depCode: 100,
        email: 'GC_20040009@gmail.com',
        position: 'Frontend Developer',
        address: 'Brotherhood',
        salary: 73000
    
    },
    {
        ssn: 10040710,
        name: 'Euron Grejoy',
        dob: '1978-09-19',
        depCode: 100,
        email: 'EG_20040010@gmail.com',
        position: 'UX Researcher',
        address: 'Iron Islands',
        salary: 81000
    }
]

//DATA SCIENTIST
dsObj = [
    {
        ssn: 40010901,
        name: 'Ned Stark',
        dob: '1975-02-21',
        depCode: 400,
        email: 'NS_40010901@gmail.com',
        position: 'Data Analyst',
        address: 'Winterfell',
        salary: 88000
    
    },
    {
        ssn: 40010902,
        name: 'Dany Targeryan',
        dob: '1985-12-31',
        depCode: 400,
        email: 'DT_40010902@gmail.com',
        position: 'Data Analyst',
        address: 'Valariya',
        salary: 92000
    },
    {
        ssn: 40010903,
        name: 'Tony Stark',
        dob: '1977-07-07',
        depCode: 400,
        email: 'TS_40010903@gmail.com',
        position: 'Team Leader',
        address: 'New York',
        salary: 140000
    },
    {
        ssn: 40010904,
        name: 'Night King',
        dob: '1967-02-29',
        depCode: 400,
        email: 'NK_40010904@gmail.com',
        position: 'Data Architect',
        address: 'NorthWall',
        salary: 98000
    },
    {
        ssn: 40010905,
        name: 'Yara Grejoy',
        dob: '1978-09-03',
        depCode: 400,
        email: 'YG_40010905@gmail.com',
        position: 'Data Architect',
        address: 'Iron Fleet',
        salary: 95500
    },
    {
        ssn: 40010906,
        name: 'Brianne Tarth',
        dob: '1978-05-02',
        depCode: 400,
        email: 'BT_40010906@gmail.com',
        position: 'Data Architect',
        address: 'Tarth',
        salary: 91000
    },
    {
        ssn: 40010907,
        name: 'Olenna Tyrel',
        dob: '1968-02-21',
        depCode: 400,
        email: 'OT_40010907@gmail.com',
        position: 'Data Engineer',
        address: 'Evergarden',
        salary: 100000
    },
    {
        ssn: 40010908,
        name: 'Jon Snow',
        dob: '1979-06-18',
        depCode: 400,
        email: 'JS_40010908@gmail.com',
        position: 'Data Engineer',
        address: `Dragon's Bane`,
        salary: 96000
    },
    {
        ssn: 40010909,
        name: 'Arya Stark',
        dob: '1989-11-18',
        depCode: 400,
        email: 'AS_40010909@gmail.com',
        position: 'Data Analyst',
        address: 'Bravos',
        salary: 87000
    },
    {
        ssn: 40010910,
        name: 'Sam Tarly',
        dob: '1983-01-27',
        depCode: 400,
        email: 'ST_40010910@gmail.com',
        position: 'Data Engineer',
        address: 'Citedal',
        salary: 99000
    }
]

//DEVOPS DEVELOPERS
devObj = [
    {
        ssn: 30025101,
        name: 'Chinmay Shahane',
        dob: '1985-04-27',
        depCode: 300,
        email: 'CS_30025101@gmail.com',
        position: 'System Administrator',
        address: 'Mulund',
        salary: 78000
    
    },
    {
        ssn: 30025102,
        name: 'Bhairavi Jadhav',
        dob: '1987-10-11',
        depCode: 300,
        email: 'BJ_30025102@gmail.com',
        position: 'System Administrator',
        address: 'Goregaon',
        salary: 82000
    },
    {
        ssn: 30025103,
        name: 'Ashish Patil',
        dob: '1979-07-07',
        depCode: 300,
        email: 'AP_30025103@gmail.com',
        position: 'Team Leader',
        address: 'Mulund',
        salary: 98000
    },
    {
        ssn: 30025104,
        name: 'Sakshi Chavan',
        dob: '1992-02-29',
        depCode: 300,
        email: 'SC_30025104@gmail.com',
        position: 'Cloud Architect',
        address: 'Bandra',
        salary: 88000
    },
    {
        ssn: 30025105,
        name: 'Nikhil Singh',
        dob: '1988-09-03',
        depCode: 300,
        email: 'NS_30025105@gmail.com',
        position: 'Cloud Architect',
        address: 'Mulund',
        salary: 85500
    },
    {
        ssn: 30025106,
        name: 'Harsh Jadhav',
        dob: '1996-05-02',
        depCode: 300,
        email: 'HJ_30025106@gmail.com',
        position: 'Cloud Architect',
        address: 'Goregaon',
        salary: 81000
    },
    {
        ssn: 30025107,
        name: 'Sanika Jain',
        dob: '1982-02-21',
        depCode: 300,
        email: 'SJ_30025107@gmail.com',
        position: 'Site-Reliability Engineer',
        address: 'Kurla',
        salary: 90000
    },
    {
        ssn: 30025108,
        name: 'Tejas Mahale',
        dob: '1989-06-18',
        depCode: 300,
        email: 'TM_30025108@gmail.com',
        position: 'Site-Reliability Engineer',
        address: `Andheri`,
        salary: 86000
    },
    {
        ssn: 30025109,
        name: 'Manasi Khade',
        dob: '1998-11-18',
        depCode: 300,
        email: 'MK_30025109@gmail.com',
        position: 'Cloud Architect',
        address: 'Bandra',
        salary: 81000
    },
    {
        ssn: 30025110,
        name: 'Siddhart Bhosale',
        dob: '1991-01-27',
        depCode: 300,
        email: 'SB_30025110@gmail.com',
        position: 'Site-Reliability Engineer',
        address: 'Kalyan',
        salary: 89000
    }
]
Employee.insertMany(uxObj);
Employee.insertMany(backObj);
Employee.insertMany(devObj);
Employee.insertMany(dsObj);
