let students = [];
function addStudent() {
    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let dob = document.getElementById("dob").value;
    let branch = document.getElementById("branch").value;
    let contact = document.getElementById("contact").value;
    if (name === "" || rollno === "" || dob=== "" || branch === "" || isNaN(contact)) {
        alert("Please fill all fields properly");
        return;
    }
     let student = {
        name,
        rollno,
        dob,
        branch,
        contact
    };
    students.push(student);
    alert("Student added successfully");
    document.getElementById("name").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("contact").value = "";
}
function displayStudents() {

    if (students.length === 0) {
        document.getElementById("output").innerHTML =
        "<h3>No students found.</h3>";
        return;
    }

    let output = "<h3>All Students</h3>";

    students.forEach(stu => {

        output += `
        Name: ${stu.name} |
        Roll No: ${stu.rollno} |
        DOB: ${stu.dob} |
        Branch: ${stu.branch} |
        Contact: ${stu.contact}
        <br><br>
        `;

    });

    document.getElementById("output").innerHTML = output;
}
function filterBranch() {
    let filtered = students.filter(
        stu => stu.branch.toUpperCase() === "CSE DS"
    );
    if(filtered.length===0){
        document.getElementById("output").innerHTML =
        "<h3>No CSE DS students found.</h3>";
        return;
    }
    let output = "<h3>CSE DS Students</h3>";
    filtered.forEach(stu => {
        output += `
        Name: ${stu.name} |
        Roll No: ${stu.rollno} |
        Contact: ${stu.contact}
        <br><br>
        `;
    });
    document.getElementById("output").innerHTML = output;
}
function searchStudent(){
    let roll = prompt("Enter Roll Number");
    let student = students.find(
        stu => stu.rollno == roll
    );
    if(student){
        document.getElementById("output").innerHTML = `
        <h3>Student Found</h3>
        Name : ${student.name}<br>
        Roll No : ${student.rollno}<br>
        DOB : ${student.dob}<br>
        Branch : ${student.branch}<br>
        Contact : ${student.contact}
        `;
    }
    else{
        document.getElementById("output").innerHTML =
        "<h3>Student not found.</h3>";
    }
}
function deleteStudent(){
    let roll = prompt("Enter Roll Number to delete");
    let index = students.findIndex(
        stu => stu.rollno == roll
    );
    if(index==-1){
        alert("Student not found");
        return;
    }
    students.splice(index,1);
    alert("Student deleted successfully");
}
function countStudent(){
    document.getElementById("output").innerHTML =
    "<h3>Total Students : " + students.length + "</h3>";
}