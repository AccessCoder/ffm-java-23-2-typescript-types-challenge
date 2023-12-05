import './App.css'
import {Student} from "./Student.ts";

function App() {
  const students: Student[] = [
    {
      firstName: "Max",
      lastName: "Mustermann",
      age: 18,
      grades: [1, "E", 3, 4, 6]
    },
    {
      firstName: "Maxine",
      lastName: "Musterfrau",
      age: 24,
      grades: [1, 2, undefined, 4, "F"]
    },
    {
      firstName: "Max",
      lastName: "Muster",
      age: 22,
      grades: [1, 2, 3, "A", 6]
    }
  ];


  function printStudentDetailsMap(student: Student) {
    //console.log mit $ um sich bequem einen String aus Variablen zusammenzubauen (Template Literal)
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    //.repeat bei console.log ist schmaler als eine Schleife um 30x das "=" zu printen.
    console.log('='.repeat(30));
    //.map Methode mit ternär Operator (Bedingung ? true, dann mach dass : false, dann mache dies -> hier also: ist Grade undefined? ja? -> füge "*" ein : nein? -> füge den grade hinzu!)
    const outputString = student.grades.map((grade) => grade === undefined ? "*" : grade).join(",");
    console.log(`Grades: ${outputString}`);
    console.log(" ")
  }

  function printStudentDetailsforEach(student: Student) {
    //console.log mit $ um sich bequem einen String aus Variablen zusammenzubauen (Template Literal)
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    //.repeat bei console.log ist schmaler als eine Schleife um 30x das "=" zu printen.
    console.log('='.repeat(30));
    const outputArray:Array<string|number|undefined> = [];
    //ForEach mit klassischem if/Else, das wäre natürlich auch mit der Map möglich gewesen :-)
    student.grades.forEach((grade) => {
      //Durch Truthy/Falsy, ist grade solange true, bis er undefined sein sollte.
     if (grade){
       outputArray.push(grade);
       outputArray.join(",")
     }else {
       outputArray.push("*");
       outputArray.join(",")
     }
    })
    console.log(`Grades: ${outputArray}`);
    console.log(" ")
  }

  function printAllStudents() {
    students.forEach((student:Student) => printStudentDetailsMap(student));
  }

  return (
    <>
      {printAllStudents()}
    </>
  )
}

export default App
