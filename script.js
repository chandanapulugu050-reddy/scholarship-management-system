document.addEventListener("DOMContentLoaded", function () {

function showPopup(message){
alert(message);
}

//////////////////////////////////////////////////
// APPLY SCHOLARSHIP
//////////////////////////////////////////////////

window.applyScholarship=function(name){

const studentName = prompt("Enter your Name");
const qualification = prompt("Enter your Qualification");
const percentage = prompt("Enter your Percentage");
const income = prompt("Enter Family Income");

if(studentName && qualification && percentage && income){

let applications = JSON.parse(localStorage.getItem("applications")) || [];

applications.push({
name:studentName,
scholarship:name,
qualification:qualification,
percentage:percentage,
income:income
});

localStorage.setItem("applications",JSON.stringify(applications));

showPopup("Application Submitted Successfully!");

}else{

showPopup("Please fill all details");

}

};

//////////////////////////////////////////////////
// LOGIN
//////////////////////////////////////////////////

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(username==="student" && password==="1234"){

showPopup("Login Successful");
window.location.href="home.html";

}else{

showPopup("Invalid Login");

}

});

}

//////////////////////////////////////////////////
// STUDENT REGISTRATION
//////////////////////////////////////////////////

const studentForm=document.getElementById("studentForm");

if(studentForm){

studentForm.addEventListener("submit",function(e){

e.preventDefault();

const student={
name:document.getElementById("studentName").value,
email:document.getElementById("studentEmail").value,
phone:document.getElementById("studentPhone").value,
course:document.getElementById("studentCourse").value,
year:document.getElementById("studentYear").value
};

let students=JSON.parse(localStorage.getItem("students"))||[];

students.push(student);

localStorage.setItem("students",JSON.stringify(students));

showPopup("Student Registered Successfully!");

studentForm.reset();

});

}

//////////////////////////////////////////////////
// FEEDBACK
//////////////////////////////////////////////////

const feedbackForm=document.getElementById("feedbackForm");

if(feedbackForm){

feedbackForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("feedbackName").value;
const email=document.getElementById("feedbackEmail").value;
const message=document.getElementById("feedbackMessage").value;

let feedbacks=JSON.parse(localStorage.getItem("feedbacks"))||[];

feedbacks.push({name,email,message});

localStorage.setItem("feedbacks",JSON.stringify(feedbacks));

showPopup("Feedback Submitted Successfully!");

feedbackForm.reset();

});

}

//////////////////////////////////////////////////
// ADMIN ADD SCHOLARSHIP
//////////////////////////////////////////////////

const adminForm=document.getElementById("adminScholarshipForm");

if(adminForm){

adminForm.addEventListener("submit",function(e){

e.preventDefault();

const title=document.getElementById("scholarshipTitle").value;
const amount=document.getElementById("scholarshipAmount").value;

let scholarships=JSON.parse(localStorage.getItem("scholarships"))||[];

scholarships.push({title,amount});

localStorage.setItem("scholarships",JSON.stringify(scholarships));

showPopup("Scholarship Added Successfully!");

adminForm.reset();

});

}

});
