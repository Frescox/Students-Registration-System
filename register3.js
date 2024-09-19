const inputName = document.getElementById("txtName");
const inputEmail = document.getElementById("txtEmail");




let count = 1;
//const title = document.getElementById("registerStudent");
//title.innerHTML = `Register Student (${count})`;

let Students = [];

function Student(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
}


function register() {
    if (validateInput()) {
        //const title = document.getElementById("registerStudent");
        //title.innerHTML = `Register Student (${count})`;
        console.log("Botón 'Register' clickeado");
        let student = new Student(count, inputName.value, inputEmail.value);
        Students.push(student);
        console.log(student);
        displayRow();
        count++;
    }
}


function removeStudent(studentId) {
    const index = Students.findIndex(student => student.id === Number(studentId));
    if(studentId == 1){
        count = 1;
    }

    if (index !== -1) {
        Students.splice(index, 1);
        console.log(`Estudiante con ID ${studentId} eliminado.`);
        for (let i = 0; i < Students.length; i++) {
            Students[i].id = i + 1;
        }
        displayRow();
    } else {
        console.log(`Estudiante con ID ${studentId} no encontrado.`);
    }
}


function init() {
    const registerBtn = document.getElementById("registerBtn");
    registerBtn.addEventListener('click', register);
    displayRow();
}

function validateInput() {
    const name = inputName.value.trim();
    const email = inputEmail.value;
    
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return false;
    }

    if (!email.includes('@')) {
        alert("Please enter a valid email");
        return false;
    }
    for (let i = 0; i < Students.length; i++) {
        if(name == Students[i].name || email == Students[i].email){
            alert('This name or email is repeat in the list');
            return false;
        }
    }

    return true;
}


window.onload = init;
