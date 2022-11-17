import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


// Initialize Firebase


// Initialize Cloud Firestore and get a reference to the service

const firebaseConfig = {
    apiKey: "AIzaSyBk0z-HnPdl8DceZjh6DGjyIJsjmG0tv-4",
    authDomain: "quiz-app-8dfe7.firebaseapp.com",
    projectId: "quiz-app-8dfe7",
    storageBucket: "quiz-app-8dfe7.appspot.com",
    messagingSenderId: "121004155127",
    appId: "1:121004155127:web:26094c43a964f4dc3833f2",
    measurementId: "G-BYY18EWFXE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import { doc, setDoc, getDocs,collection, query, where } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 

let createClass = document.getElementById('create_class_btn');
let addStudent = document.getElementById('add_student_btn');
createClass.addEventListener('click', () => {
    let classDiv = document.getElementById("create_class");
    classDiv.style.display = 'flex';
    console.log("hamza");
    let cancelClass = document.getElementById('class_icon')
    cancelClass.addEventListener('click', () => {
        classDiv.style.display = 'none';
    })
        let createClass = document.getElementById('create_btn');
        createClass.addEventListener('click',async () => {
        let course = document.getElementById('course').value
        let schedule = document.getElementById('schedule').value
        let teacher = document.getElementById('teacher').value
        let timing = document.getElementById('class_timming').value
        let section = document.getElementById('section').value
        let batch = document.getElementById('batch_no').value
        let firDoc = doc(db, "classes", `${course} batch:${batch} (Sir ${teacher})` );
        setDoc(firDoc, {
           course: course,
           batch: batch,
           teacher: teacher,
           section: section,
           timing: timing,
           schedule: schedule,
           classId: `${course} batch:${batch} (Sir ${teacher})`
           // id: uid
           // profile:url
       
         }).then( () => {
            window.location.reload()
        })
        })
        
       
    })
    // let showClass = document.getElementById('show_class_btn')
    // showClass.addEventListener('click', async() => {
    // })
// const querySnapshot = await getDocs(collection(db,"classes"));
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data())
//     })
// addStudent.addEventListener('click', () => {
//     let studentDiv = document.getElementById("add_student");
//     studentDiv.style.display = 'flex';
//     console.log("hamza");
//     let cancelClass = document.getElementById('student_icon')
//     cancelClass.addEventListener('click', () => {
//         studentDiv.style.display = 'none'
//     })
//     let addStudent = document.getElementById('create_student')
//     console.log(addStudent)
//     addStudent.addEventListener('click' , () => {
//         let studentName = document.getElementById('student_name').value;
//         let fatherName = document.getElementById('student_father').value;
//         let rollNo = document.getElementById('student_rollno.').value;
//         let courseName = document.getElementById('course_name').value;
//         let phoneNo = document.getElementById('student_no.').value;
//         let cnicNo = document.getElementById('cnic_no').value;
//         // let className = document.getElementById('student_cnic_no').value;
//         // let studentImage = document.getElementById('studentImage').file;
//         console.log(studentName,fatherName,rollNo)
//     })
// })