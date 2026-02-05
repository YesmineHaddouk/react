import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const courseTitle="React";

const student={
  name:"Yesmine",
  age:21,
  track:"Development"
}
function sayHello(){
  return 'Hello,${studentName}!';
}

function App() {
  const studentName="Yesmine" ;
return (
  <div>
      <h1> Yesmine's first element </h1>
      <p>Student Name: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="nameInput">Your Name:</label>
      <input id="nameInput" type="text" />
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
      <p>I understand how JSX allows me to combine JavaScript with HTML</p>
      <p>Nothing, i understand everything</p>
      <p>Where to define a function</p>
  </div>
);
}
export default App
