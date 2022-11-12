const courseList = [
  {code: "ACIT 1620", name: "Web Fundamental Technologies"},
  {code: "COMM 1116", name: "Business Communications"},
  {code: "Math 1310", name: "Technical Math for IT"}
  
]


let input = ""
do {
  input = prompt("Type a 4 digit code for your class");
  console.log(input);

} while (input.length != 4 || isNaN(String(input)));

let courseNum = courseList.code
let courseChar = courseList.name


