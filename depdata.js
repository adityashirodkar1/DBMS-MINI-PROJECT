const mongoose = require('mongoose');
const Department = require('./models/department');

mongoose.connect('mongodb://localhost:27017/ITCompany', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('It worked')
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })

depObj = [
    {
        code: 100,
        name: 'UX Team',
        about: 'User experience is one of the key indicators of product success, so working on this aspect of the project is vital. Users should get a perfect user experience and enjoy excellent usability, interesting design, and functionality. Oftentimes, the UX team consists of several experts who work together to achieve the set objectives. A typical UX team includes: Leader, UX researcher, UX designer and Frontend developers.',
        consists: ['UX Researcher', 'UX Designer', 'Frontend Developer', 'Team Leader']
    },
    {
        code: 200,
        name: 'Backend Developers',
        about: 'This team is the core of the entire organization as it is responsible for the application logic, efficient code, and data structure. Most often, it consists of the following experts: Backend engineers, Middle-stack developers and Team leader. Engineers are engaged in coding, improving algorithms and application logic, but for the interaction between the back-end and the front-end sides, it is necessary to involve middle-stack developers. They handle cleaning user input, rest API endpoints, etc. Thus, developers will be able to focus on performing their job efficiently, without being distracted by third-party issues. All these issues will be handled by middle-stack developers. As in any other team, there is also a leader who organizes the workflow, assigns the tasks, and coordinates the work of all team members.',
        consists: ['Backend Engineer', 'Middle-Stack Developer', 'Team Leader']
    },
    {
        code: 300,
        name: 'DevOps Engineers',
        about: 'DevOps team provides a flawless user experience, ensures the product goes to market, tests new versions of the product, and also manages the cloud infrastructure. Often, this team consists of a cloud architect, system administrator, site reliability engineer, and team lead. The main task of a cloud architect is the creation and management of the cloud infrastructure; the site reliability engineer ensures the smooth operation of all necessary systems, the system administrator is responsible for maintaining the cloud, and the team lead distributes tasks and responsibilities within the team and controls the workflow.',
        consists: ['Cloud Architect', 'System Administrator', 'Site-Reliability Engineer', 'Team Leader']
    },
    {
        code: 400,
        name: 'Data Scientist',
        about: 'The Data Scientist Department use statistical methods, machine learning algorithms and other tools to analyze data and create predictive models; some also build data products, recommendation engines, chatbots and other technologies for various use cases. Data scientists typically have a variety of skills in areas such as mathematics, statistics, data wrangling, data mining, coding and predictive modeling, as well as business knowledge and communication and collaboration skills. Increasingly, they also have advanced data science degrees or graduate-level data science certifications. These are some types of data scientist in the department - Data Analyst, Data Architect and Data Engineer.',
        consists: ['Data Analyst', 'Data Architect', 'Data Engineer', 'Team Leader']
    }
]

Department.insertMany(depObj);

//https://yojji.io/blog/tech-company-organizational-structure
//www.techtarget.com