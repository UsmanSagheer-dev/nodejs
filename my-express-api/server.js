const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/api/users', (req, res) => {
    res.json({ message: 'usman' });
});
app.post('/api/users', (req, res) => {
    res.json({ message: 'basit' });
});
app.get('/api/table', (req, res) => {
    let table = '';
    for(let i = 1; i <= 10; i++) {
        table += `2 x ${i} = ${2 * i}`;
        table += '\n';
    }
    res.json({ table: table });
});

app.delete('/api/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const students =[
        {
        id: 1,
        name: "Usman",
        rollNo: "2020-CS-01", 
        description: "Computer Science Student"
    },
    {
        id: 2,
        name: "Basit",
        rollNo: "2020-CS-02", 
        description: "Computer Science Student"
    },
    {
        id: 3,
        name: "Ali",
        rollNo: "2020-CS-03", 
        description: "Computer Science Student"
    },
    {
        id: 4,
        name: "Ahmed",
        rollNo: "2020-CS-04", 
        description: "Computer Science Student"
    }
    ];
    const index = students.findIndex(student => student.id === studentId);
    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }
    students.splice(index, 1);
    res.json({ message: "Student deleted successfully", students: students });
});
app.get('/api/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const students =[
        {
        id: 1,
        name: "Usman",
        rollNo: "2020-CS-01", 
        description: "Computer Science Student"
    },  
    {
        id: 2,
        name: "Basit",
        rollNo: "2020-CS-02", 
        description: "Computer Science Student"
    },
    ];
    const student = students.find(student => student.id === studentId);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
